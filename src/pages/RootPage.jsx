import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Breadcrumb, theme } from "antd";
const { Content } = Layout;
import { HomeOutlined } from "@ant-design/icons";
import ScrollToTop from "react-scroll-to-top";
import AppFooter from "../components/Footer";
import AppHeader from "../components/Header";
import LatestNews from "../components/News/LatestNews";
import HotNews from "../components/News/HotNews";

const RootPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  const [breadcrumbItems, setBreadcrumbItems] = useState([
    {
      href: "/",
      title: (
        <div className="flex gap-2 justify-center items-center">
          <HomeOutlined />
          Trang chủ
        </div>
      )
    }
  ]);

  return (
    <Layout>
      {/* Header */}
      <AppHeader setBreadcrumbItems={setBreadcrumbItems} />

      {/* Content */}
      <Content
        className="flex-col lg:flex-row lg:gap-[16px]"
        style={{
          display: "flex",
          padding: "0 32px"
        }}
      >
        {/* Left Content */}
        <div className="w-full lg:w-3/4 mt-[16px]">
          <Breadcrumb
            style={{
              marginBottom: "16px"
            }}
            items={breadcrumbItems}
          />

          <Outlet />
        </div>

        {/* Right Content */}
        <div
          style={{
            background: colorBgContainer,
            height: "fit-content",
            padding: 16,
            borderRadius: borderRadiusLG
          }}
          className="w-full lg:w-1/4 my-[16px] flex justify-start items-center flex-col gap-[16px]"
        >
          <LatestNews />

          <HotNews />

          <img
            className="w-[90%]"
            src="https://thuonghieuviet.net.vn/images/logo/logo-fashion_2.png"
            alt="img"
          />
          <img
            className="w-[90%]"
            src="https://thuonghieuviet.net.vn/images/logo/logo-tin-nong.png"
            alt="img"
          />
          <img
            className="w-[90%]"
            src="https://thuonghieuviet.net.vn/images/logo/thegioidoanh-nhan-sao-viet-2.png"
            alt="img"
          />
          <img
            className="w-[90%]"
            src="https://thuonghieuviet.net.vn/images/logo/logo-the-gioi-sao.png"
            alt="img"
          />
          <img
            className="w-[90%]"
            src="https://thuonghieuviet.net.vn/images/quang-cao/standee-02.png"
            alt="img"
          />
        </div>
      </Content>

      {/* Footer */}
      <AppFooter />

      {/* Scroll To Top Button */}
      <ScrollToTop smooth color="white" className="scroll-to-top" />
    </Layout>
  );
};

export default RootPage;
