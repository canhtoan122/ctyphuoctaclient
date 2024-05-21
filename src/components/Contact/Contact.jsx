import React from 'react'
import './Contact.css'

export default function Contact() {
  let menu = document.querySelectorAll('.header_menu a');
  menu.forEach(item => {
    // Remove the 'active' class from all anchor elements
    item.classList.remove('active');

    // Check if the href attribute of the anchor element is equal to "start"
    if (item.getAttribute('href') === 'contact') {
        // Add the 'active' class to the anchor element with href "start"
        item.classList.add('active');
    }
  });
  return (
    <div>
      <div className="breadcrumb">
        <h2>Liên hệ chở hàng</h2>
        <div className="breadcrumb_redirect">
            <a href="/">Trang chủ</a>
            <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
            <span>Liên hệ</span>
        </div>
      </div>
    <main id="contact">
        <div className="container">
            <h2>Liên hệ với chúng tôi</h2>
            <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1797144324664!2d106.7511249!3d10.8739319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8758c21377f%3A0x7b3a9f031df98175!2zS0RDIE5hbSBUaGluaCwgQW4gQsOsbmgsIETEqSBBbiwgQsOsbmggRMawxqFuZw!5e0!3m2!1sen!2s!4v1714989696318!5m2!1sen!2s"
                width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className="contact_main">
                <div className="contact_infor">
                    <h3>Công Ty Vận Tải Phước Tá</h3>
                    <p>Thông tin liên hệ báo giá vận chuyển:</p>
                    <span><i className="fa-solid fa-location-dot"></i> Trụ Sở: KDC Nam Thịnh, An Bình, Dĩ An, Bình Dương</span>
                    <span><i className="fa-solid fa-location-dot"></i> Ga Sóng Thần: Xã An Bình, Huyện Dĩ An, Dĩ An, Bình Dương, Việt Nam</span>
                    <span><i className="fa-solid fa-location-dot"></i> Ga Giáp Bát: Thịnh Liệt, Hoàng Mai, Hà Nội, Việt Nam</span>
                    <a href="mailto:nguyencanhtoan200@gmail.com"><span><i className="fa-solid fa-envelope"></i> nguyencanhtoan200@gmail.com</span></a>
                    <a href="tel:0908 473 406"><span><i className="fa-solid fa-phone-flip"></i> 0908 473 406</span></a>
                    <a href="tel:0936 131 202"><span><i className="fa-solid fa-phone-flip"></i> 0936 131 202</span></a>
                </div>
                <form action="" className="form_request">
                    <div className="form_request_item">
                        <label htmlFor="firstName">Tên khách hàng và số điện thoại <span>*</span> </label>
                        <div className="form_request_item_name">
                            <span>
                                <input type="text" name="name" id="name" />
                                <label htmlFor="name">Họ và tên</label>
                            </span>
                            <span>
                                <input type="text" name="phoneNumber" id="phoneNumber" />
                                <label htmlFor="phoneNumber">Số điện thoại</label>
                            </span>
                        </div>
                    </div>
                    <div className="form_request_item">
                        <label htmlFor="type">Dịch vụ vận chuyển<span>*</span> </label>
                        <select id="type" name="type">
                            <option value="default">--------------</option>
                            <option value="Kho tới kho">Kho tới kho</option>
                            <option value="Ga tới ga">Ga tới ga</option>
                            <option value="Kho tới ga">Kho tới ga</option>
                            <option value="Ga tới kho">Ga tới kho</option>
                        </select>
                    </div>
                    <div className="form_request_item">
                        <label htmlFor="email">Email<span>*</span> </label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="form_request_item">
                        <label htmlFor="email">Nội dung <span>*</span> </label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className="button">Hoàn tất</button>
                </form>
            </div>
        </div>
      </main>
    </div>
  )
}
