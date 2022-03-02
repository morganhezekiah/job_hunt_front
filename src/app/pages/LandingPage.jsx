import React, {useState} from 'react';
import './style.css'
import hero from '../assets/images/img/hero-bg.png'
import cloud from '../assets/images/img/svg/cloud.svg'
import planet from '../assets/images/img/svg/planet.svg'
import asteriod from '../assets/images/img/svg/asteroid.svg'
import aboutimg from '../assets/images/img/about-img.png'
import paint from '../assets/images/img/svg/paint-palette.svg'
import vector from '../assets/images/img/svg/vector.svg'
import design from '../assets/images/img/svg/design-tool.svg'
import computing from '../assets/images/img/svg/cloud-computing.svg'
import pixel from '../assets/images/img/svg/pixel.svg'
import code from '../assets/images/img/svg/code.svg'
import team1 from '../assets/images/img/team/1.jpg'
import team2 from '../assets/images/img/team/2.jpg'
import team3 from '../assets/images/img/team/3.jpg'
import team4 from '../assets/images/img/team/4.jpg'
import screen1 from '../assets/images/img/screen/1.jpg'
import screen2 from '../assets/images/img/screen/2.jpg'
import screen3 from '../assets/images/img/screen/3.jpg'
import screen4 from '../assets/images/img/screen/4.jpg'
import screen5 from '../assets/images/img/screen/5.jpg'
import screen6 from '../assets/images/img/screen/6.jpg'
import screen7 from '../assets/images/img/screen/7.jpg'
import screen8 from '../assets/images/img/screen/8.jpg'
import blogimage1 from '../assets/images/img/blog/blog-image-1.jpg'
import blogimage2 from '../assets/images/img/blog/blog-image-2.jpg'
import blogimage3 from '../assets/images/img/blog/blog-image-3.jpg'
import open from '../assets/images/menu.png'
import close from '../assets/images/close.png'
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
// assets/img/blog/blog-image-1.jpg
// import screen9 from '../assets/images/img/screen/9.jpg'







const LandingPage = () => {

    const [collapsed, setCollapsed] = useState()
    const [navModal, setNavModal] = useState(false)

    const { SubMenu } = Menu;


    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };



    return <>
  <header id="header" className="header  fixed-top d-flex align-items-center">
    <div className="container flex  justify-content-between h-16">

      <div id="logo">
        <div>
            <h1 className=""><a href="index.html"><span>Owerri </span>Job hunt</a></h1>
            <a href="index.html"><img src="assets/img/logo.png" alt="" title="" /></a>
        </div>
      </div>
      <div className="flex lg:hidden lg:h-0 lg:w-0 h-48 w-48 justify-end">
          {navModal ? <img  class="w-8 h-8 cursor-pointer" src={close} onClick={() => setNavModal(prev => !prev)}/> : <img className="w-8 h-8 cursor-pointer" src={open} alt='text' onClick={() => setNavModal(prev => !prev)}/>}
      </div>

      <nav id="navbar" className="hidden lg:block">
          <ul className="flex">
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about-us">About</a></li>
            <li><a className="nav-link scrollto" href="#features">Features</a></li>
            <li><a className="nav-link scrollto" href="#screenshots">Screenshots</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
          </ul>
      </nav>
      {navModal && <div  className="fixed mt-24 lg:hidden w-11/12 text-green-200 ">
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
  </header>

  <section id="hero">
    <div className="hero-container" data-aos="fade-in">
      <h1>Owerri Job Hunt</h1>
      <h2>Over 2000 local and international jobs open for grabs!</h2>
      <img src={hero} alt="Hero Imgs" data-aos="zoom-out" data-aos-delay="100"/>
      <a href="#get-started" className="btn-get-started scrollto">Get Started</a>
      {/* <div className="btns">
        <a href="#"><i className="fa fa-apple fa-3x"></i> App Store</a>
        <a href="#"><i className="fa fa-play fa-3x"></i> Google Play</a>
        <a href="#"><i className="fa fa-windows fa-3x"></i> windows</a>
      </div> */}
    </div>
  </section>

  <main id="main">

    <section id="get-started" className="padd-section text-center">

      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">

          <h2>Apply</h2>
          {/* <p className="separator">Integer cursus bibendum augue ac cursus .</p> */}

        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="feature-block ">

              <img className="mx-auto" src={cloud} alt="img"/>
              <h4>Register</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <a href="#">read more</a>

            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="feature-block">

              <img className="mx-auto" src={planet} alt="img"/>
              <h4>complete your training</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <a href="#">read more</a>

            </div>
          </div>

          <div className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="feature-block">

              <img className="mx-auto" src={asteriod} alt="img"/>
              <h4>Meet your employer</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <a href="#">read more</a>

            </div>
          </div>

        </div>
      </div>

    </section>
    <section id="team" className="padd-section text-center">

      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">

          <h2>Hire Smarter</h2>
          <p className="separator">Join other smart buisnessess to discover and hire digital talents from Owerris best talent pool</p>
        </div>

        <div className="row">

          <div className="col-md-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div className="team-block bottom">
              <img src={team1} className="img-responsive" alt="img"/>
              <div className="team-content">
                <ul className="list-unstyled">
                  <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                  <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                </ul>
                <span>manager</span>
                <h4>Kimberly Tran</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="200">
            <div className="team-block bottom">
              <img src={team2} className="img-responsive" alt="img"/>
              <div className="team-content">
                <ul className="list-unstyled">
                  <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                  <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                </ul>
                <span>manager</span>
                <h4>Kimberly Tran</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="300">
            <div className="team-block bottom">
              <img src={team3} className="img-responsive" alt="img"/>
              <div className="team-content">
                <ul className="list-unstyled">
                  <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                  <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                </ul>
                <span>manager</span>
                <h4>Kimberly Tran</h4>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-md-4 col-lg-3" data-aos="zoom-in" data-aos-delay="400">
            <div className="team-block bottom">
              <img src={team4} className="img-responsive" alt="img"/>
              <div className="team-content">
                <ul className="list-unstyled">
                  <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                  <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                  <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                </ul>
                <span>manager</span>
                <h4>Kimberly Tran</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* <section id="about-us" className="about-us padd-section">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">

          <div className="col-md-5 col-lg-3">
            <img src={aboutimg} alt="About" data-aos="zoom-in" data-aos-delay="100"/>
          </div>

          <div className="col-md-7 col-lg-5">
            <div className="about-content" data-aos="fade-left" data-aos-delay="100">

              <h2><span>eStartup</span>UI Design Mobile </h2>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>

              <ul className="list-unstyled">
                <li><i className="vi bi-chevron-right"></i>Creative Design</li>
                <li><i className="vi bi-chevron-right"></i>Retina Ready</li>
                <li><i className="vi bi-chevron-right"></i>Easy to Use</li>
                <li><i className="vi bi-chevron-right"></i>Unlimited Features</li>
                <li><i className="vi bi-chevron-right"></i>Unlimited Features</li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section> */}

    {/* <section id="features" className="padd-section text-center">

      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Amazing Features.</h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={paint} alt="img"/>
              <h4>creative design</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={vector} alt="img"/>
              <h4>Retina Ready</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={design} alt="img"/>
              <h4>easy to use</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={asteriod} alt="img"/>
              <h4>Free Updates</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={asteriod} alt="img"/>
              <h4>Free Updates</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={computing} alt="img"/>
              <h4>App store support</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={pixel} alt="img"/>
              <h4>Perfect Pixel</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img className="mx-auto" src={code} alt="img"/>
              <h4>clean codes</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </div>

        </div>
      </div>
    </section> */}

    {/* <section id="screenshots" className="padd-section text-center">

      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>App Gallery</h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>

        <div className="screens-slider swiper">
          <div className="swiper-wrapper align-items-center md:flex">
            <div className="swiper-slide"><img src={screen1} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={screen2} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={screen3} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={screen4} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={screen5} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={screen6} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={screen7} className="img-fluid" alt=""/></div>
            <div className="swiper-slide"><img src={screen8} className="img-fluid" alt=""/></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

    </section> */}

    <section id="video" className="text-center">
      <div className="overlay">
        <div className="container-fluid container-full" data-aos="zoom-in">

          <div className="row">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q&feature=emb_title" className="glightbox play-btn"></a>
          </div>

        </div>
      </div>
    </section>

    <section id="testimonials" className="padd-section text-center">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">

          <div className="col-md-8">

            <div className="testimonials-content">
              <div id="carousel-example-generic" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner" role="listbox">

                  <div className="carousel-item  active">
                    <div className="top-top">

                      <h2>Our Users Speack volumes us</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries.</p>
                      <h4>Kimberly Tran<span>manager</span></h4>

                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="top-top">

                      <h2>Our Users Speack volumes us</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries.</p>
                      <h4>Henderson<span>manager</span></h4>

                    </div>
                  </div>

                  <div className="carousel-item ">
                    <div className="top-top">

                      <h2>Our Users Speack volumes us</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries.</p>
                      <h4>David Spark<span>manager</span></h4>

                    </div>
                  </div>

                </div>

                <div className="btm-btm">

                  <ul className="list-unstyled carousel-indicators">
                    <li data-bs-target="#carousel-example-generic" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carousel-example-generic" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carousel-example-generic" data-bs-slide-to="2"></li>
                  </ul>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="pricing" className="padd-section text-cente">

      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">

          <h2>Meet With Price</h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="pricing-table">
                <h4>basic</h4>
                <h2>$29</h2>
                <ul className="list-unstyled">
                  <li><b>4 GB</b> Ram</li>
                  <li><b>7/24</b> Tech Support</li>
                  <li><b>40 GB</b> SSD Cloud Storage</li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className="table_btn">
                  <a href="#" className="btn"><i className="bi bi-cart"></i> Buy Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="pricing-table">
                <h4>PERSONAL</h4>
                <h2>$29</h2>
                <ul className="list-unstyled">
                  <li><b>4 GB</b> Ram</li>
                  <li><b>7/24</b> Tech Support</li>
                  <li><b>40 GB</b> SSD Cloud Storage</li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className="table_btn">
                  <a href="#" className="btn"><i className="bi bi-cart"></i> Buy Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="pricing-table">
                <h4>BUSINESS</h4>
                <h2>$29</h2>
                <ul className="list-unstyled">
                  <li><b>4 GB</b> Ram</li>
                  <li><b>7/24</b> Tech Support</li>
                  <li><b>40 GB</b> SSD Cloud Storage</li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className="table_btn">
                  <a href="#" className="btn"><i className="bi bi-cart"></i> Buy Now</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-pricing">
              <div className="pricing-table">
                <h4>profeesional</h4>
                <h2>$29</h2>
                <ul className="list-unstyled">
                  <li><b>4 GB</b> Ram</li>
                  <li><b>7/24</b> Tech Support</li>
                  <li><b>40 GB</b> SSD Cloud Storage</li>
                  <li>Monthly Backups</li>
                  <li>Palo Protection</li>
                </ul>
                <div className="table_btn">
                  <a href="#" className="btn"><i className="bi bi-cart"></i> Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog" className="padd-sectio">

      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">

          <h2>Latest posts</h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">

          <div className="col-md-6 col-lg-4">
            <div className="block-blog text-left">
              <a href="#"><img src={blogimage1}alt="img"/></a>
              <div className="content-blog">
                <h4><a href="#">whats isthe difference between good and bat typography</a></h4>
                <span>05, juin 2017</span>
                <a className="float-end readmore" href="#">read more</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="block-blog text-left">
              <a href="#"><img src={blogimage2} className="img-responsive" alt="img"/></a>
              <div className="content-blog">
                <h4><a href="#">whats isthe difference between good and bat typography</a></h4>
                <span>05, juin 2017</span>
                <a className="float-end readmore" href="#">read more</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="block-blog text-left">
              <a href="#"><img src={blogimage3} className="img-responsive" alt="img"/></a>
              <div className="content-blog">
                <h4><a href="#">whats isthe difference between good and bat typography</a></h4>
                <span>05, juin 2017</span>
                <a className="float-end readmore" href="#">read more</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="newsletter" className="newsletter text-center">
      <div className="overlay padd-section">
        <div className="container" data-aos="zoom-in">

          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-6">
              <form className="d-flex" method="POST" action="#">
                <input type="email" className="form-control " placeholder="Email Adress" name="email"/>
                <button type="submit" className="btn btn-default"><i className="bi bi-location-arrow"></i>Subscribe</button>
              </form>
            </div>
          </div>

          <ul className="list-unstyled">
            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
            <li><a href="#"><i className="bi bi-twitter"></i></a></li>
            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
            <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
          </ul>

        </div>
      </div>
    </section>

    <section id="contact" className="padd-section">

      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>Contact</h2>
          <p className="separator">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-3 col-md-4">

            <div className="info">
              <div>
                <i className="bi bi-geo-alt"></i>
                <p>A108 Adam Street<br/>New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <p>info@example.com</p>
              </div>

              <div>
                <i className="bi bi-phone"></i>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>

          </div>

          <div className="col-lg-5 col-md-8">
            <div className="form">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="form-group mt-3">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer className="footer">
    <div className="container">
      <div className="row">

        <div className="col-md-12 col-lg-4">
          <div className="footer-logo">

            <a className="navbar-brand" href="#">eStartup</a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Abou Us</h4>

            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Features item</a></li>
              <li><a href="#">Live streaming</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Abou Us</h4>

            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Features item</a></li>
              <li><a href="#">Live streaming</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Support</h4>

            <ul className="list-unstyled">
              <li><a href="#">faq</a></li>
              <li><a href="#">Editor help</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Abou Us</h4>

            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Features item</a></li>
              <li><a href="#">Live streaming</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

      </div>
    </div>

    <div className="copyrights">
      <div className="container">
        <p>&copy; Copyrights eStartup. All rights reserved.</p>
        <div className="credits">
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=eStartup
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>

  </footer>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
}

export default LandingPage