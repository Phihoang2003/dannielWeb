import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, resetState } from "../feature/product/productLSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CustomModal from "../component/CustomModal";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");

  const showModal = (id) => {
    setOpen(true);
    setProductId(id);
  };
  const hideModal = () => setOpen(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      price: `${productState[i].price}`,
      action: (
        <>
          <Link
            to={`/admin/product/${productState[i]._id}`}
            className=" fs-3 text-danger"
          >
            <BiEdit />
          </Link>
          <Link
            className="ms-3 fs-3 text-danger"
            onClick={() => showModal(productState[i]._id)}
          >
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  console.log(data1);
  const deleteProduct = (id) => {
    dispatch(deleteProduct(id));
    setOpen(false);
    useEffect(() => {
      dispatch(getProducts());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteProduct(productId);
        }}
        title="Are you sure you want to delete this product?"
      />
    </div>
  );
};

export default ProductList;
