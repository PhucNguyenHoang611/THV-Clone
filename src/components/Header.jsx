/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;
import { navItems } from "../constants";

const items = navItems.map((item) => ({
  key: `${item.label}:${item.to}`,
  label: <Link to={item.to}>{item.label}</Link>,
  children: item.subNav
    ? item.subNav.map((subItem) => ({
        key: `${subItem.label}:${subItem.to}`,
        label: <Link to={subItem.to}>{subItem.label}</Link>
      }))
    : null
}));

const AppHeader = (props) => {
  const [currentMenu, setCurrentMenu] = useState("");

  const onMenuClick = (e) => {
    setCurrentMenu(e.key);
    props.setBreadcrumbItems([
      {
        href: "/",
        title: (
          <div className="flex gap-2 justify-center items-center">
            <HomeOutlined />
            Trang chủ
          </div>
        )
      },
      {
        href: e.key.split(":")[1],
        title: e.key.split(":")[0]
      }
    ]);
  };

  const onSearch = (value, _e, info) =>
    console.log(`Search value from ${info?.source}: `, value);

  return (
    <Header className="app-header">
      <div className="app-header-top">
        <Link
          to="/"
          onClick={() =>
            props.setBreadcrumbItems([
              {
                href: "/",
                title: (
                  <div className="flex gap-2 justify-center items-center">
                    <HomeOutlined />
                    Trang chủ
                  </div>
                )
              }
            ])
          }
        >
          <img
            alt="app-header-logo"
            className="app-header-logo"
            src="/logo.png"
          />
        </Link>

        <div className="app-header-search">
          <Search
            size="large"
            placeholder="Tìm kiếm..."
            onSearch={onSearch}
            enterButton
            allowClear
            styles={{
              hoverBg: "black"
            }}
          />
        </div>
      </div>

      <div className="app-header-bottom">
        <Menu
          className="app-header-nav text-xs md:text-[0.79rem] 2xl:text-sm"
          mode="horizontal"
          selectedKeys={[currentMenu]}
          items={items}
          onClick={onMenuClick}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
