import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Schedule from "./pages/Schedule";
import { Link } from "react-router-dom";

import {
  HomeFilled,
  PhoneFilled,
  QuestionCircleFilled,
  CalendarFilled,
  SettingFilled,
  UserOutlined,
  MailFilled,
  GiftFilled,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="bg-white mt-2">
      <div className="flex items-center justify-center py-4 border-r-[1.5px] border-gray-200">
        <img
          src="https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png"
          className=" rounded-lg w-10 mx-2"
        />
        <h3 className="font-bold text-md ml-1">Neha Bhat</h3>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: "1.5px solid #E5E5E5" }}
        className="font-semibold"
      >
        <Menu.Item key="1" icon={<HomeFilled />}>
          <Link to={"/home"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<PhoneFilled />}>
          <Link to={"/booking"}>Booking</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<QuestionCircleFilled />}>
          <Link to={"/queries"}>Queries</Link>
        </Menu.Item>
        <hr className="my-2 mx-2 border-t-2 border-gray-300" />
        <Menu.Item key="4" icon={<CalendarFilled />}>
          <Link to={"/schedules"}>Schedules</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingFilled />}>
          <Link to={"/services"}>Services</Link>
        </Menu.Item>
        <hr className="my-2 mx-2 border-t-2 border-gray-300" />
        <Menu.Item key="6" icon={<UserOutlined style={{ fill: "#000000" }} />}>
          <Link to={"/profile"}>Profile</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<MailFilled />}>
          <Link to={"/invite&earn"}>Invite & Earn</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<GiftFilled />}>
          <Link to={"/rewards"}>Rewards</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<LogoutOutlined />}>
          <Link to={"/logout"}>Logout</Link>
        </Menu.Item>
      </Menu>
      <style>
        {`
          .ant-menu-item-selected, .ant-menu-item-active {
            background-color: #82d8cd !important;
            color: #000000 !important;}          
        `}
      </style>
    </Sider>
  );
};

export default Sidebar;
