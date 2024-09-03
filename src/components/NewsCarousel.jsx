import { Carousel } from "antd";

const NewsCarousel = () => (
  <>
    <Carousel arrows autoplay infinite={true}>
      <div className="relative">
        <img
          src="https://thuonghieuviet.net.vn/cache/images/dang-bai-3/thuydnbai/19nawm-quehuong-(9)-420x260.jpg"
          alt="img"
          className="w-full"
        />

        <p className="absolute bottom-6 left-0 right-0 bg-black bg-opacity-50 font-semibold text-white text-center px-2 line-clamp-2">
          ĐẦY MÀU SẮC VỚI SINH NHẬT 19 TUỔI CỦA TRUNG TÂM NHÂN ĐẠO QUÊ HƯƠNG
        </p>
      </div>
      <div className="relative">
        <img
          src="https://thuonghieuviet.net.vn/cache/images/dang-bai-3/thuydnbai/tracythuyhh-(18)-420x260.jpg"
          alt="img"
          className="w-full"
        />

        <p className="absolute bottom-6 left-0 right-0 bg-black bg-opacity-50 font-semibold text-white text-center px-2 line-clamp-2">
          TRACY THỦY: KHÓ KHĂN KHIẾN TÔI TỰ LẬP VÀ MẠNH MẼ HƠN
        </p>
      </div>
      <div className="relative">
        <img
          src="https://thuonghieuviet.net.vn/cache/images/dang-bai-3/thuydnbai/themtraoquahatinh-(7)-copy-420x260.jpg"
          alt="img"
          className="w-full"
        />

        <p className="absolute bottom-6 left-0 right-0 bg-black bg-opacity-50 font-semibold text-white text-center px-2 line-clamp-2">
          400 phần quà và 130 triệu đồng được Truyền hình trực tuyến Việt Nam
          kết nối toàn cầu GCTV trao tận tay bà con Hà Tĩnh
        </p>
      </div>
      <div className="relative">
        <img
          src="https://thuonghieuviet.net.vn/cache/images/dang-bai-3/thuydnbai/themhinh2thuy-(4)-420x260.jpg"
          alt="img"
          className="w-full"
        />

        <p className="absolute bottom-6 left-0 right-0 bg-black bg-opacity-50 font-semibold text-white text-center px-2 line-clamp-2">
          Đại sứ Doanh nhân Sắc đẹp Thu Thủy: Tôi sẽ nỗ lực hết mình để hoàn
          thành tốt vai trò mà BTC đã giao phó
        </p>
      </div>
    </Carousel>
  </>
);
export default NewsCarousel;
