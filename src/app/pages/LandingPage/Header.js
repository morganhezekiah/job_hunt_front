import React , {useState} from 'react'
import Banner from "../../misc/Banner";
import { Link } from "react-router-dom";
import open from '../../assets/images/menu.png'
import close from '../../assets/images/close.png'
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const Header = () => {
  const [navModal, setNavModal] = useState(false)
  const [collapsed, setCollapsed] = useState()
  const { SubMenu } = Menu;


    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
  return (
    <header
      className="header-area header-sticky"
      
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="flex main-nav ">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="index.html" className="logo">
                <Banner />
              </a>
              {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
              <ul className="nav flex ml-auto">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">About</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#services">Services</a>
                </li>
                
                <li className="scroll-to-section ">
                  <a href="#contact">Contact</a>
                </li>
                <li className="scroll-to-section ">
                  {/* <a href="#contact">Contact</a> */}
                </li>
                {/* <li className="scroll-to-section">
                  <div className="border-first-button">
                    <Link to="/users/register" href="#contact" className="primary">
                      Register now
                    </Link>
                  </div>
                </li> */}
              </ul>
              <div className="mt-8 mr-6 flex md:hidden lg:h-0 lg:w-0 h-48 w-48 justify-end">
                  {navModal ? <img  class="xs:w-6 xs:h-6 h-4 w-4 cursor-pointer" src={close} onClick={() => setNavModal(prev => !prev)}/> : <img className="xs:w-8 xs:h-8 w-6 h-6 cursor-pointer" src={open} alt='text' onClick={() => setNavModal(prev => !prev)}/>}
              </div>
              {/* <a className="menu-trigger">
                <span>Menu</span>
              </a> */}
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
            {navModal && <div  className="fixed   md:hidden w-11/12 text-green-200 ">
        <Button type="secondary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        //   theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
