import { theme } from "antd";
import NewsContent from "../components/News/Content/NewsContent";
import { newsData, newsDetails } from "../constants";
import TopicTitle from "../components/TopicTitle";
import CardHorizontal from "../components/News/List/CardHorizontal";

const Details = () => {
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
      <NewsContent />

      <ul className="list-disc w-full p-4">
        {newsData.map((item, index) => (
          <li
            key={index}
            className="text-blue-600 font-semibold mb-2 hover:underline cursor-pointer italic"
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className="w-full">
        <TopicTitle title="Bình luận & Chia sẻ" />

        <p className="text-base my-2">Sử dụng plugin của Facebook</p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <TopicTitle title="Đọc thêm" />

        {newsDetails.map((news, index) => (
          <CardHorizontal key={index} item={news} />
        ))}

        {newsDetails.map((news, index) => (
          <CardHorizontal key={index} item={news} />
        ))}
      </div>
    </div>
  );
};

export default Details;
