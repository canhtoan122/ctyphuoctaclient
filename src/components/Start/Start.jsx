import React from 'react'
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
                // Handle successful response
                document.getElementById("result").innerHTML = response.data;
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
                            <form action="" className="form_request">
                                <div className="form_request_item">
                                    <label htmlFor="firstName">Tên khách hàng và số điện thoại <span>*</span> </label>
                                    <div className="form_request_item_name">
                                        <span>
                                            <input type="text" name="name" id="name" onChange={handleChangeName}/>
                                            <label htmlFor="name">Họ và tên</label>
                                        </span>
                                        <span>
                                            <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleChangePhoneNumber}/>
                                            <label htmlFor="phoneNumber">Số điện thoại</label>
                                        </span>
                                    </div>
                                </div>
                                <div className="form_request_item">
                                    <label htmlFor="type">Dịch vụ vận chuyển<span>*</span> </label>
                                    <select id="type" name="type" onChange={handleChangeType}>
                                        <option value="default">--------------</option>
                                        <option value="Kho tới kho">Kho tới kho</option>
                                        <option value="Ga tới ga">Ga tới ga</option>
                                        <option value="Kho tới ga">Kho tới ga</option>
                                        <option value="Ga tới kho">Ga tới kho</option>
                                    </select>
                                </div>
                                <div className="form_request_item">
                                    <label htmlFor="email">Email<span>*</span> </label>
                                    <input type="email" name="email" id="email" onChange={handleChangeEmail}/>
                                </div>
                                <div className="form_request_item">
                                    <label htmlFor="message">Nội dung <span>*</span> </label>
                                    <textarea name="" id="" cols="30" rows="10" onChange={handleChangeMessage}></textarea>
                                </div>
                                <button className="button">Hoàn tất</button>
                            </form>
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
                </div>
            </main>
        </div>
    )
}
