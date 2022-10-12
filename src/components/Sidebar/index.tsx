import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { selectors } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <MailOutlined />,
  },
  {
    label: "Js Practice",
    key: "js-practice",
    icon: <AppstoreOutlined />,
  },
  {
    label: "github",
    key: "github",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Action",
        key: "action",
      },
    ],
  },
];

const Sidebar: React.FC = (props) => {
  const theme = useSelector(selectors.theme);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    const keyPath = e.keyPath;
    navigate(keyPath.reverse().join("/"));
    dispatch({
      type: "app/changeThemeReducer",
      payload: theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, height: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      theme={theme}
    />
  );
};

export default Sidebar;
