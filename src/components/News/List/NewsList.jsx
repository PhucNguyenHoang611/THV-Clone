import { List } from "antd";
import { newsData } from "../../../constants";
import TopicTitle from "../../TopicTitle";
import NewsCard from "./NewsCard";

const NewsList = () => {
  return (
    <div className="w-full">
      <TopicTitle title="Tin tức" seeMore={true} />

      <List
        grid={{
          gutter: 10,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3,
          xxl: 4
        }}
        dataSource={newsData}
        renderItem={(item) => (
          <List.Item>
            <NewsCard item={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NewsList;
