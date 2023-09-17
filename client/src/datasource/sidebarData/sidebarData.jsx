import React from "react";

import * as RiIcons from "react-icons/ri";
export const sidebarData = [
  {
    title: "Offers",
    path: "/offers",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Perfect Gifts",
    path: "/gifts",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Gifts for men",
        path: "/gifts/for-men",
      },
      {
        title: "Gifts for her",
        path: "/gifts/for-her",
      },
    ],
  },

  {
    title: "Watches",
    path: "/watches",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All watches",
        path: "/watches/all-watches",
      },
      {
        title: "Woman Watches",
        path: "/watches/women-watches",
      },
      {
        title: "Men Watches",
        path: "/watches/men-watches",
      },
    ],
  },
  {
    title: "Jewelry",
    path: "/jewelry",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "All Jewelry",
        path: "/jewelry/all",
      },
      {
        title: "Charms",
        path: "/jewelry/charms",
      },

      {
        title: "Earnings",
        path: "/jewelry/earnings",
      },
    ],
  },
  {
    title: "SmartWatch Accessories",
    path: "/smartwatch",

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
