import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";


let CURRENT_DROPDOWN_TEXT ="Select Topic";
const menu = (topics) => {

  return (
    <Menu>
      {topics.map((t) => (
        <>
          <Menu.Item onClick={ async ()=>{
             CURRENT_DROPDOWN_TEXT = t.title ;
             await localStorage.setItem("CURRENT_TOPIC", t.id )
           }} key="0">
            <a href="#">{t.title}</a>
          </Menu.Item>
          <Menu.Divider />
        </>
      ))}
    </Menu>
  );
};

const DropDown = () => {
  const GetTopicState = useSelector((state) => state.GetTopicsReducer);
  useEffect(() => {
    return async () => {
        await localStorage.removeItem("CURRENT_TOPIC")
    }
}, [])
  return (
    <Dropdown overlay={menu(GetTopicState.topics)} trigger={["click"]}>
      <a
        className="ant-dropdown-link mr-1 py-2 px-2 text-white"
        onClick={(e) => e.preventDefault()}
        style={{ backgroundColor: "#666AF6" }}
      >
        { CURRENT_DROPDOWN_TEXT } <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default DropDown;
