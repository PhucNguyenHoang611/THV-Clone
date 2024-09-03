/* eslint-disable react/prop-types */
// import { Card } from "antd";
import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CardHorizontal = (props) => {
  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={props.item.image}
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-center items-start gap-2">
            <p className="text-[#B31312] font-semibold line-clamp-2 cursor-pointer">
              {props.item.title}
            </p>

            <div className="w-full my-2 gap-1 flex justify-start items-center text-xs">
              <ClockCircleOutlined />
              {props.item.date} -
              <EyeOutlined />
              Lượt xem: {props.item.views}
            </div>
            <p className="text-sm line-clamp-3 mb-2">
              {props.item.description}
            </p>

            <div className="w-full flex justify-end items-center px-2">
              <Link key="see-more" to="/details">
                <p className="font-medium text-[#B31312] hover:text-[#610e0e] text-xs hover:underline">
                  Xem tiếp...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
