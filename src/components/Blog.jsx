import React from 'react'
import blog1 from "../images/intro.jpg"
import blog2 from "../images/blog2.png"
import blog3 from "../images/blog3.jpg"
import blog4 from "../images/blog4.jpg"
import blog5 from "../images/blog5.jpg"
import blog6 from "../images/blog6.jpg"

export default function Blog() {
  let menu = document.querySelectorAll('.header_menu a');
  menu.forEach(item => {
    // Remove the 'active' class from all anchor elements
    item.classList.remove('active');

    // Check if the href attribute of the anchor element is equal to "start"
    if (item.getAttribute('href') === 'blog') {
        // Add the 'active' class to the anchor element with href "start"
        item.classList.add('active');
    }
  });
  return (
    <div>
      <div className="breadcrumb">
        <h2>Tin tức về vận tải</h2>
        <div className="breadcrumb_redirect">
            <a href="/">Trang chủ</a>
            <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
            <span>Tin tức về vận tải</span>
        </div>
    </div>
    <main id="blog">
        <div className="container">
            <ul className="blog_list">
                <li>
                    <h3>Vận Tải Đường Bộ Là Gì?</h3>
                    <span>
                        <img src={blog1} alt="" />
                    </span>
                    <p>
                        Vận tải đường bộ là loại hình vận tải phổ biến nhất hiện nay, được sử dụng hàng ngày để vận chuyển hàng hóa, vật liệu,
                        đồ gia dụng,.. Ưu điểm của vận chuyển bằng đường bộ là chủ động được thời gian, nhanh chóng và an toàn. Giá cả hợp lý.
                        Có thể nói dịch vụ chuyển phát đường bộ không thể thiếu trong cuộc sống ngày nay.
                    </p>
                </li>
                <li>
                    <h3>Vận chuyển từ ga tới ga là gì?</h3>
                    <span>
                        <img src={blog2}  alt="" />
                    </span>
                    <p>
                    Vận chuyển từ ga hàng tới ga hàng là quá trình chuyển hàng hóa từ một điểm dừng của vận chuyển hàng hóa đến một điểm đích khác, 
                    thường được thực hiện thông qua các dịch vụ vận tải như xe tải, container hoặc các phương tiện giao thông khác.
                    </p>
                </li>
                <li>
                    <h3>Vận chuyển từ kho tới kho là gì?</h3>
                    <span>
                        <img src={blog3} alt="" />
                    </span>
                    <p>
                        Vận chuyển từ kho hàng tới kho hàng là quá trình chuyển đổi và di chuyển hàng hóa từ một điểm lưu trữ hoặc 
                        trung tâm phân phối đến một điểm đích khác, nhằm đáp ứng nhu cầu vận chuyển và phân phối hàng hóa trong 
                        chuỗi cung ứng và logistics.
                    </p>
                </li>
                <li>
                    <h3>Vận chuyển hàng nam bắc là gì?</h3>
                    <span>
                        <img src={blog4} alt="" />
                    </span>
                    <p>
                    Vận chuyển hàng từ Nam ra Bắc là quá trình di chuyển hàng hóa từ khu vực miền Nam đến khu vực miền Bắc 
                    của một quốc gia hoặc giữa các quốc gia khác nhau, nhằm đáp ứng nhu cầu vận chuyển và cung ứng hàng hóa 
                    trong lưu thông kinh tế và thương mại.
                    </p>
                </li>
                <li>
                    <h3>Vận chuyển hàng bắc nam là gì?</h3>
                    <span>
                        <img src={blog5} alt="" />
                    </span>
                    <p>
                    Vận chuyển hàng từ Bắc ra Nam là quá trình di chuyển hàng hóa từ khu vực miền Bắc đến khu vực miền Nam 
                    của một quốc gia hoặc giữa các quốc gia khác nhau, nhằm đáp ứng nhu cầu vận chuyển và cung ứng hàng hóa 
                    trong lưu thông kinh tế và thương mại.
                    </p>
                </li>
                <li>
                    <h3>Vận chuyển hàng nam trung là gì?</h3>
                    <span>
                        <img src={blog6} alt="" />
                    </span>
                    <p>
                    Vận chuyển hàng từ Nam ra Trung là quá trình di chuyển hàng hóa từ khu vực miền Nam đến khu vực miền Trung 
                    của một quốc gia hoặc giữa các quốc gia khác nhau, nhằm đáp ứng nhu cầu vận chuyển và cung ứng hàng hóa 
                    trong lưu thông kinh tế và thương mại.
                    </p>
                </li>
            </ul>
        </div>
    </main>
    </div>
  )
}
