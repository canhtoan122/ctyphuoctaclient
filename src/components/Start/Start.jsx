import React, { useState } from 'react'
import axios from 'axios'
import './Start.css'

export default function Start() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    let menu = document.querySelectorAll('.header_menu a');
    menu.forEach(item => {
        // Remove the 'active' class from all anchor elements
        item.classList.remove('active');

        // Check if the href attribute of the anchor element is equal to "start"
        if (item.getAttribute('href') === 'start') {
            // Add the 'active' class to the anchor element with href "start"
            item.classList.add('active');
        }
    });
    let postForm = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("result").innerHTML = "Email is not correct";
        } else {
            sendMail();
        }
    }
    let sendMail = () => {
        axios.post("https://ctyphuoctaapi.onrender.com/submit", { name, phoneNumber, email, message, type })
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                // Handle error
                console.error("Error:", error);
            });
    }
    let handleChangeName = (e) => {
        setName(e.target.value);
    }
    let handleChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }
    let handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    let handleChangeMessage = (e) => {
        setMessage(e.target.value);
    }
    let handleChangeType = (e) => {
        setType(e.target.value);
    }
    return (
        <div>
            <div className="breadcrumb">
                <h2>Quy trình</h2>
                <div className="breadcrumb_redirect">
                    <a href="/">Trang chủ</a>
                    <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
                    <span>Quy trình</span>
                </div>
            </div>
            <main>
                <div className="container">
                    <div className="main_proceduce">
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 1:</h3>
                            <p className="main_proceduce_item_desc">Điền form thông tin về nơi giao nhận và thông tin hành hoá</p>
                            <div className='form_request_procedure'>
                                <h4>
                                    Vui lòng liên hệ qua Hotline hoặc <span className="chat_icon"><i className="fa-solid fa-comment"></i></span>để tư vấn miễn phí.
                                </h4>
                            </div>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 2:</h3>
                            <p className="main_proceduce_item_desc">Báo kế hoạch vận chuyển trước 1 ngày</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 3:</h3>
                            <p className="main_proceduce_item_desc">Đi lấy hàng viết biên bản</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 4:</h3>
                            <p className="main_proceduce_item_desc">Xếp lên tàu</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 5:</h3>
                            <p className="main_proceduce_item_desc">Vận chuyển tới ga gần nhất nơi nhận hàng</p>
                        </div>
                        <span className="main_proceduce_icon"><iconify-icon icon="bytesize:arrow-bottom"></iconify-icon></span>
                        <div className="main_proceduce_item">
                            <h3 className="main_proceduce_item_title">Quy trình 6:</h3>
                            <p className="main_proceduce_item_desc"> Chung chuyển đường bộ tới kho khách</p>
                        </div>
                    </div>
                    <div className="contact">
                <h3>Gửi Yêu Cầu Giá Cước Vận Chuyển</h3>
                <div className="contact_content">
                    <div className='form_request'>
                        <h4>
                            Vui lòng liên hệ qua Hotline hoặc <span className="chat_icon"><i className="fa-solid fa-comment"></i></span>
                            để tư vấn miễn phí.
                        </h4>
                    </div>
                    <div className="contact_phone">
                        <h4>Liên hệ để chuyển hàng</h4>
                        <span className="line"></span>
                        <p className="hotline">Hotline: <br/> 0908 473 406</p>
                    </div>
                </div>
                </div>
            </main>
        </div>
    )
}
