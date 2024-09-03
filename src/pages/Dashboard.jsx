import { theme } from "antd";
import LatestNews from "../components/News/LatestNews";
import NewsList from "../components/News/List/NewsList";
import NewsCarousel from "../components/NewsCarousel";
import NewsCardDetails from "../components/News/List/NewsCardDetails";
import { newsDetails } from "../constants";
import FeedbackModal from "../components/FeedbackModal";

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <div
      className="lg:mb-[16px] flex justify-center items-center flex-col gap-[16px]"
      style={{
        background: colorBgContainer,
        padding: 16,
        borderRadius: borderRadiusLG
      }}
    >
      {/* First Part */}
      <div className="w-full flex lg:flex-row flex-col justify-center items-start gap-[16px]">
        <div className="lg:w-2/5 w-full">
          <LatestNews />
        </div>

        <div className="lg:w-3/5 w-full flex flex-col gap-[16px] items-center">
          <img
            src="https://thuonghieuviet.net.vn/cache/images/quangcao-1.png"
            alt="img"
            className="w-full"
          />

          <div className="w-full">
            <NewsCarousel />
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div className="flex lg:flex-row flex-col justify-center items-start gap-[16px]">
        <div className="lg:w-4/6 w-full flex flex-col gap-[16px]">
          <NewsList />
          <NewsList />
          <NewsList />
        </div>

        <div className="lg:w-2/6 w-full flex flex-col gap-[16px]">
          {newsDetails.map((news, index) => (
            <NewsCardDetails key={index} item={news} />
          ))}

          {newsDetails.map((news, index) => (
            <NewsCardDetails key={index} item={news} />
          ))}
        </div>
      </div>

      {/* Third Part */}
      <img
        src="https://thuonghieuviet.net.vn/cache/images/quangcao-1.png"
        alt="img"
        className="w-full"
      />
      <div className="w-full flex lg:flex-row flex-col justify-around items-center gap-[16px]">
        <img src="/logo.png" alt="img" className="w-[200px]" />

        <div className="flex flex-col gap-[16px] justify-center items-start">
          <p className="uppercase font-semibold">Ý kiến bài viết</p>
          <FeedbackModal />
          <p>
            Thuonghieuviet.net.vn rất hoan nghênh độc giả gửi thông tin và góp ý
            !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
