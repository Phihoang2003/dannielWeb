import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteACoupon, getAllCoupon } from "../feature/coupon/couponSlice";
import CustomModal from "../component/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },

  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Discount",
    dataIndex: "discount",
    sorter: (a, b) => a.discount - b.discount,
  },
  {
    title: "Expiry",
    dataIndex: "expiry",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
function formatDate(dateString) {
  const parts = dateString.split("/");
  const month = parts[0].padStart(2,"0");
  const day = parts[1].padStart(2,"0");
  const year = parts[2];
  return `${day}/${month}/${year}`;
}
const Couponlist = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setcouponId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setcouponId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoupon());
  }, []);
  const couponState = useSelector((state) => state.coupon.coupons);
  const data1 = [];
  for (let i = 0; i < couponState.length; i++) {
    data1.push({
      key: i + 1,
      name: couponState[i].name,
      discount: couponState[i].discount,
      expiry: formatDate(new Date(couponState[i].expiry).toLocaleString()),
      action: (
        <>
          <Link
            to={`/admin/coupon/${couponState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(couponState[i]._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    });
  }
  const deleteCoupon =async (e) => {
      setOpen(false);
    await dispatch(deleteACoupon(e));
    dispatch(getAllCoupon());
    
  };
  return (
    <div>
      <h3 className="mb-4 title">Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCoupon(couponId);
        }}
        title="Are you sure you want to delete this Coupon?"
      />
    </div>
  );
};

export default Couponlist;