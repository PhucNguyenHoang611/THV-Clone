import TopicTitle from "../TopicTitle";
import { latestNews } from "../../constants";
import { Link } from "react-router-dom";

const HotNews = () => {
  return (
    <div>
      <TopicTitle title="Tin nóng" />

      {latestNews.map((news, index) => (
        <div
          key={news.title}
          className={`py-4 ${
            index < latestNews.length - 1
              ? "border-b border-dashed border-gray-300"
              : ""
          }`}
        >
          <Link to="/details">
            <h3 className="text-left">{news.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HotNews;
