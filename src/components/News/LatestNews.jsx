import { Button, Card, List } from "antd";
import { latestNews } from "../../constants";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <Card title="MỚI NHẤT">
      <List
        size="small"
        dataSource={latestNews}
        renderItem={(item) => (
          <List.Item
            className="flex-row-reverse gap-2 text-[0.75rem] font-medium"
            extra={<img width={100} alt="logo" src={item.image} />}
          >
            <Link to="/details">{item.title}</Link>
          </List.Item>
        )}
      />

      {/* Code me See more button */}
      <div className="w-full flex justify-end items-center p-2">
        <Button type="primary">Xem thêm</Button>
      </div>
    </Card>
  );
};

export default LatestNews;
