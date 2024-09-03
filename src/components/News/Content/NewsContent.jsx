import { Button } from "antd";
import {
  ClockCircleOutlined,
  EyeOutlined,
  LikeOutlined,
  ShareAltOutlined,
  UserOutlined
} from "@ant-design/icons";

const NewsContent = () => {
  return (
    <>
      <p className="uppercase font-bold text-lg">
        400 phần quà và 130 triệu đồng được Truyền hình trực tuyến Việt Nam kết
        nối toàn cầu GCTV trao tận tay bà con Hà Tĩnh
      </p>

      <div className="w-full py-4 border-y border-dashed border-gray-300 flex flex-col sm:flex-row gap-2 justify-between items-center">
        <div className="flex items-center text-xs gap-1">
          <ClockCircleOutlined />
          Thứ 3 | 15/12/2020 -
          <EyeOutlined />
          Lượt xem: 940
        </div>

        <div className="flex gap-2">
          <Button type="primary">
            <LikeOutlined />
            Thích
          </Button>
          <Button type="primary">
            <ShareAltOutlined />
            Chia sẻ
          </Button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[16px] text-base">
        <p className="text-blue-600 font-semibold">thuonghieuviet.net.vn:</p>

        <p className="font-semibold">
          Trong chuyến thăm và trao quà lần này, đoàn thiện nguyện đã trao 400
          thùng mì, 2 tấn gạo, 70 thùng nước suối do trung tâm nhân đạo quê
          hương ủng hộ, tiền mặt kêu gọi trong đêm nhạc hướng về miền trung ngày
          1 tháng 11 vừa qua. Được biết, tùy vào tình hình thực tế của mỗi hộ
          gia đình khi xét duyệt sẽ được trao tặng số tiền khác nhau
        </p>

        <p>
          Mới đây, vào ngày 11/12/2020 đoàn thiện nguyện của Truyền Hình Trực
          Tuyến Việt Nam Kết Nối Toàn Cầu GCTV do bà Trần Thị Hồng Phấn làm
          trưởng đoàn đã có chuyến đến thăm và trao tận tay những phần quà cho
          từng hộ gia đình tại huyện Hương Khê, tỉnh Hà Tỉnh.
        </p>

        <img
          src="https://thuonghieuviet.net.vn/cache/images/traoquahatinh2020-4.png"
          alt="img"
          className="w-full"
        />
        <img
          src="https://thuonghieuviet.net.vn/cache/images/traoquahatinh2020-2.png"
          alt="img"
          className="w-full"
        />
        <img
          src="https://thuonghieuviet.net.vn/cache/images/themtraoquahatinh-1.png"
          alt="img"
          className="w-full"
        />

        <p>
          Đây là hoạt động nối tiếp chương trình “Hướng Về Miền Trung” được tổ
          chức thành công tại thành phố Hồ Chí Minh vào ngày 1/11. Đồng hành
          cùng chuyến đi thiện nguyện lần này có sự tham gia của Hoa hậu Doanh
          nhân Thân thiện Nguyễn Thị Đăng Viên, Á hậu Doanh nhân Nhân Ái Hoàng
          Linh, ông Võ Duy Cường - Chủ Tịch CTY CP DV Ngọc Bảo, bà Trịnh Thị Thu
          - Trưởng Phòng Kinh Doanh CTY CP DV Ngọc Bảo cùng nhiều mạnh thường
          quân tại TP.HCM và Hà Nội.
        </p>
        <p>
          Được biết, tùy vào tình hình thực tế của mỗi hộ gia đình khi xét duyệt
          sẽ được trao tặng số tiền khác nhau. Số tiền mỗi hộ nhận được mức cao
          nhất là 5 triệu đồng và mức thấp nhất là 500 nghìn đồng.Trong chuyến
          thăm và trao quà lần này, đoàn thiện nguyện đã trao 400 phần
        </p>

        <img
          src="https://thuonghieuviet.net.vn/cache/images/traoquahatinh2020-4.png"
          alt="img"
          className="w-full"
        />
        <img
          src="https://thuonghieuviet.net.vn/cache/images/traoquahatinh2020-2.png"
          alt="img"
          className="w-full"
        />
        <img
          src="https://thuonghieuviet.net.vn/cache/images/themtraoquahatinh-1.png"
          alt="img"
          className="w-full"
        />

        <p>
          Chia sẻ về chuyến thiện nguyện lần này, bà Trần Thị Hồng Phấn cho
          biết, lúc bão và lũ đang hoành hành và vây lấy mảnh đất miền Trung
          thân yêu có khá nhiều cá nhân và đoàn thiện nguyện đã đến để giúp đỡ
          bà con vượt qua khó khăn hiện tại thì mình sẽ giúp bà con ổn định cuộc
          sống sau khi bão lũ đi qua. Nên đoàn đã nán lại và đến bây giờ mới đến
          với bà con miền Trung thân yêu.
        </p>
        <p>
          Bà cũng cho biết, trong chuyến đi lần này đoàn nhận được nhiều sự hỗ
          trợ của ban lãnh đạo tỉnh Hà Tỉnh, Hội Chữ Thập đỏ Việt Nam, Hội Chữ
          Đỏ Hương Khê, UBND Tỉnh Hà Tĩnh, UBND Huyện Hương Khê. Qua đây bà Trần
          Thị Hồng Phấn cũng gửi lời tri ân đến các cơ quan ban ngành, các văn
          nghệ sĩ, quý doanh nhân và những tấm lòng nhân ái đã cùng hỗ trợ đoàn
          trong chuyến thiện nguyện lần này cũng như là chung tay cùng GCTV tạo
          nên một đêm nhạc với vô vàng cảm xúc và đầy ý nghĩa.
        </p>

        <img
          src="https://thuonghieuviet.net.vn/cache/images/themtraoquahatinh-1.png"
          alt="img"
          className="w-full"
        />

        <p>
          Hy vọng rằng, với những món quà nhỏ được trao tay sẽ giúp bà con tại
          xã Hương Lâm, huyện Hương Khuê, Hà Tĩnh có thêm kinh phí để mua lại
          vật nuôi, giống cây trồng để ổn định cuộc sống hay sửa sang lại ngôi
          nhà để chuẩn bị đón chào mùa xuân mới.
        </p>

        <div className="w-full flex justify-end items-center gap-1 font-semibold">
          <UserOutlined />
          Tác giả: gctv
        </div>
      </div>
    </>
  );
};

export default NewsContent;
