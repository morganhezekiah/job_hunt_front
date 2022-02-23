import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Digital Marketing</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Content Writing</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Facebook Ads</Menu.Item>
  </Menu>
);


const DropDown = () => {
    return <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link mr-1 py-2 px-2 text-white" onClick={e => e.preventDefault()} style={{backgroundColor:'#666AF6'}}>
      Select Topic <DownOutlined />
    </a>
  </Dropdown>
}

export default DropDown
