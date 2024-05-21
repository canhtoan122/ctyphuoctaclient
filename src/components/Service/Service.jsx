import React from 'react';
import './Service.css'
import logo from "../../images/logo.jpg";


export default function Service() {
  let menu = document.querySelectorAll('.header_menu a');
  menu.forEach(item => {
    // Remove the 'active' class from all anchor elements
    item.classList.remove('active');

    // Check if the href attribute of the anchor element is equal to "start"
    if (item.getAttribute('href') === 'service') {
        // Add the 'active' class to the anchor element with href "start"
        item.classList.add('active');
    }
  });
  
  return (
    <div>
      <div className="breadcrumb">
        <h2>Dịch vụ vận chuyển</h2>
        <div className="breadcrumb_redirect">
            <a href="/">Trang chủ</a>
            <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
            <span>Dịch vụ vận chuyển</span>
        </div>
    </div>
    <main>
        <div className="container">
            <ul className="service_list">
                <li className="service_list_item">
                    <div className="service_list_item_image">
                        <img src={logo} alt="" />
                    </div>
                    <a href="serviceDetail">Vận Chuyển Hàng Từ ga Sài Gòn tới ga hà Nội</a>
                    <p>
                        Để giảm bớt chi phí cho khách hàng và đảm bảo an toàn cho quý khách. 
                        Vận tải Phước Tá đã mở dịch vụ chuyên vận chuyển hàng từ ga tới ga,
                        khách hàng có thể tự chở hàng ra ga và bên em sẽ giám sát quá trình vận chuyển đến ga cần tới. 
                    </p>
                </li>
                <li className="service_list_item">
                    <div className="service_list_item_image">
                        <img src={logo} alt="" />
                    </div>
                    <a href="serviceDetail">Vận Chuyển Hàng Từ kho Sài Gòn tới kho Hà Nội</a>
                    <p>
                        Đây là dịch vụ chính của bên em a. Vận tải Phước Tá đã mở dịch vụ từ dỡ hàng hóa ở kho người gửi đến dỡ hàng hóa 
                        vào kho người nhận hàng.
                    </p>
                </li>
                <li className="service_list_item">
                    <div className="service_list_item_image">
                        <img src={logo} alt="" />
                    </div>
                    <a href="serviceDetail">Vận Chuyển Hàng Từ kho Sài Gòn tới ga Giáp Bát</a>
                    <p>
                        Đối với một vài trường hợp đặc biệt, vị trí người gửi không ra ga được mà người nhận có thể vận chuyển ra ga được. Vận tải
                        Phước Tá đã mở dịch vụ vận chuyển từ kho người nhận tới ga khách cần đến. Và dĩ nhiên sẽ giảm bớt chi phí người nhận.
                    </p>
                </li>
                <li className="service_list_item">
                    <div className="service_list_item_image">
                        <img src={logo} alt="" />
                    </div>
                    <a href="serviceDetail">Vận Chuyển Hàng Từ kho Hà Nội tới ga Sóng Thần</a>
                    <p>
                        Đối với một vài trường hợp đặc biệt, vị trí người nhận không ra ga được mà người gửi có thể vận chuyển ra ga được. Vận tải
                        Phước Tá đã mở dịch vụ vận chuyển từ ga tới địa chỉ của khách hàng. Và dĩ nhiên sẽ giảm bớt chi phí người gửi.
                    </p>
                </li>
                <li className="service_list_item">
                    <div className="service_list_item_image">
                        <img src={logo} alt="" />
                    </div>
                    <a href="serviceDetail">Vận Chuyển Hàng Từ kho Hà Nội tới các tỉnh thành miền Bắc</a>
                    <p>
                        Đây là tuyến dịch vụ chính của bên em a vận chuyển từ TP.HCM ra Hà Nội. Vận tải Phước Tá vận chuyển hàng hóa đi Hà Nội 
                        có dịch vụ tốt nhất và giá cả cạnh tranh nhất so với các đơn vị vận tải khác.
                    </p>
                </li>
                <li className="service_list_item">
                    <div className="service_list_item_image">
                        <img src={logo} alt="" />
                    </div>
                    <a href="serviceDetail">Vận Chuyển Hàng miền Trung</a>
                    <p>
                        Chúng tôi chuyên vận chuyển hàng hóa hai chiều bằng xe tải từ các tỉnh miền nam đi miền trung và ngược lại.
                    </p>
                </li>
                <li className="service_list_item">
                    <div className="service_list_item_image">
                        <img src={logo} alt="" />
                    </div>
                    <a href="serviceDetail">Vận Chuyển Hàng Từ kho Sài Gòn tới các tỉnh thành miền nam</a>
                    <p>
                        Vận tải Phước Tá với nhiều năm kinh nghiệm trong dịch vụ gửi vận chuyển hàng từ Hà Nội đi TP.HCM bằng xe tải, container,
                        xe chuyên dụng,...
                    </p>
                </li>
            </ul>
        </div>
        <div className="service_contact">
            <div className="container">
                <div className="service_contact_wrapper">
                    <div className="service_contact_left">
                        <h3>LIÊN HỆ CHỞ HÀNG</h3>
                        <p>Liên hệ ngay hôm nay để nhận được giá ưu đãi nhất cho hàng hóa của bạn.</p>
                    </div>
                    <button>0937 067 986</button>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
