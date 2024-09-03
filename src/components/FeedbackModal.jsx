import { useRef, useState } from "react";
import { Button, Modal } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Draggable from "react-draggable";

const FeedbackModal = () => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  const draggleRef = useRef(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y)
    });
  };

  return (
    <>
      <Button onClick={showModal}>
        <QuestionCircleOutlined />
        Câu hỏi thường gặp
      </Button>
      <Modal
        title={
          <div
            style={{
              width: "100%",
              cursor: "move"
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Thương hiệu Việt xin chào các bạn đọc.
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <p>
          THV rất vui khi đón nhận những ý kiến đóng góp của bạn đọc. Tất cả ý
          kiến đóng góp của bạn đọc vui lòng gửi tới địa chỉ email của công ty
          hoặc comment ngay trên trang bạn đang đọc.
        </p>
        <br />

        <p className="italic">Email: truyenhinhtructuyenvietnam@gctv.vn</p>
        <br />

        <p>
          Rất vui khi nhận được góp ý đóng góp của các bạn đọc. THV xin chân
          thành cảm ơn ! www.thuonghieuviet.net.vn
        </p>
      </Modal>
    </>
  );
};
export default FeedbackModal;
