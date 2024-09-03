/* eslint-disable react/prop-types */
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const NewsCard = (props) => {
  return (
    <Card
      hoverable
      cover={
        <div className="w-full flex flex-col gap-2">
          <img
            alt="img"
            className="w-full rounded-t-lg"
            src={props.item.image}
          />

          <p className="px-2 pt-2 line-clamp-1 font-semibold text-sm">
            {props.item.title}
          </p>
        </div>
      }
      actions={[
        <Link key="see-more" to="/details">
          <div className="w-full flex justify-end items-center px-2">
            <p className="font-medium text-yellow-600 hover:text-yellow-700 text-xs hover:underline">
              Xem thêm
            </p>
          </div>
        </Link>
      ]}
    >
      <Meta
        className="py-1 px-2"
        description={
          <p className="line-clamp-3 mb-2">{props.item.description}</p>
        }
      />
    </Card>
  );
};

export default NewsCard;
