import { Button } from "antd";

/* eslint-disable react/prop-types */
const TopicTitle = (props) => {
  return (
    <div className="w-full flex justify-between items-center border-b-4 border-[#B31312] mb-2">
      <p className="text-xl font-bold text-center uppercase">{props.title}</p>
      {props.seeMore && (
        <Button type="primary" className="text-xs px-1 rounded-none">
          Xem thêm
        </Button>
      )}
    </div>
  );
};

export default TopicTitle;
