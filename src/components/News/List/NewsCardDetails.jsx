/* eslint-disable react/prop-types */
import { Card } from "antd";
import { ClockCircleOutlined, EyeOutlined } from "@ant-design/icons";
import TopicTitle from "../../TopicTitle";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewsCardDetails = (props) => {
  const [onShow, setOnShow] = useState(true);

  return (
    <div className="w-full flex flex-col gap-[8px] border-b border-dashed border-gray-300">
      <TopicTitle title={props.item.heading} />

      <Card
        className="border-none"
        cover={
          <div className="flex flex-col justify-center items-center">
            <p
              className={`${
                onShow ? "text-[#B31312]" : "text-black"
              } hover:text-[#B31312] font-semibold line-clamp-3 cursor-pointer`}
              onClick={() => setOnShow(!onShow)}
            >
              {props.item.title}
            </p>

            {onShow && (
              <>
                <img
                  className="w-full my-2"
                  alt="example"
                  src={props.item.image}
                />
                <div className="w-full my-2 gap-1 flex justify-start items-center text-xs">
                  <ClockCircleOutlined />
                  {props.item.date} -
                  <EyeOutlined />
                  Lượt xem: {props.item.views}
                </div>
                {/* line-clamp-4 */}
                <p className="text-sm">{props.item.description}</p>
              </>
            )}
          </div>
        }
        actions={
          onShow
            ? [
                <>
                  {onShow && (
                    <Link key="see-more" to="/details">
                      <div className="w-full flex justify-end items-center px-2">
                        <p className="font-medium text-[#B31312] hover:text-[#610e0e] text-xs hover:underline">
                          Xem thêm
                        </p>
                      </div>
                    </Link>
                  )}
                </>
              ]
            : []
        }
      />
    </div>
  );
};

export default NewsCardDetails;
