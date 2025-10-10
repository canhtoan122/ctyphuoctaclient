import React, { useState } from 'react'
import Banner from '../../images/img-1.png'
import Intro from '../../images/intro.jpg'
import IntroIcon from '../../images/icon-image.png'
import Brand1 from '../../images/abper-300x59.png'
import Brand2 from '../../images/ares-300x53.png'
import Brand3 from '../../images/bromo-300x56.png'
import Brand4 from '../../images/pieso-300x118.png'
import Brand5 from '../../images/wagon-300x60.png'
import Brand6 from '../../images/boson-300x71.png'
import MainBackground from '../../images/MainBackGround.jpg'
import Service1 from '../../images/accident.png'
import Service2 from '../../images/g53.png'
import Service3 from '../../images/train.png'
import Service4 from '../../images/tow-truck.png'
import Service5 from '../../images/road.png'
import './Home.css'
import axios from 'axios'

export default function Home() {
    const [name, setName] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ type, setType ] = useState("");

    let isMobileDevice = () =>{
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    let phoneCall = (e) =>{
        e.preventDefault();
        if(isMobileDevice()){
            window.location.href = "tel:0908473406";
        } else {
            const hotline = document.getElementById("hotline");
            if (hotline) {
              hotline.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
              console.warn('Không tìm thấy phần tử chứa "Hotline"');
            }
        }
    }
    let postForm = (e) =>{
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            document.getElementById("result").innerHTML = "Email is not correct";
        }else{
            sendMail();
        }
    }
    let sendMail = () =>{
        axios.post("https://ctyphuoctaapi.onrender.com/submit", {name, phoneNumber, email, message, type})
        .then(response => {
            alert(response.data);
        })
        .catch(error => {
            // Handle error
            console.error("Error:", error);
        });
    }
    let handleChangeName = (e) =>{
        setName(e.target.value);
    }
    let handleChangePhoneNumber = (e) =>{
        setPhoneNumber(e.target.value);
    }
    let handleChangeEmail = (e) =>{
        setEmail(e.target.value);
    }
    let handleChangeMessage = (e) =>{
        setMessage(e.target.value);
    }
    let handleChangeType = (e) =>{
        setType(e.target.value);
    }
  return (
    <div>
      <main>
        <div className="main_banner">
            <div className="container main_banner_wrapper">
                <div className="main_banner_left">
                    <h3>Vận tải Giang Toàn</h3>
                    <h2>NÂNG NIU TRÊN TỪNG CÂY SỐ</h2>
                    <p>Giang Toàn cung cấp các dịch vụ vận chuyển hàng hóa bằng đường sắt từ kho đến kho cho các công ty có trụ sở ở TP.HCM, Hà Nội, Trung Quốc, Mông Cổ, Nga và các nước Trung Á 
                        hoặc là các công ty ở Sài Gòn, Hà Nội, Trung Quốc, Mông Cổ, Nga theo container 40' đang có nhu cầu mở rộng thị trường.
                    </p>
                    <a href="start" className="button">Quy trình</a>
                </div>
            </div>
        </div>
        <div className="main_infor">
            <div className="container main_infor_wrapper">
                <div className="main_infor_item">
                    <span>
                        <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span>(0908) 473 406</span>
                </div>
                <div className="main_infor_item">
                   <span><i className="fa-solid fa-clock"></i></span>
                    <span>Đến nơi trong vòng 5 ngày</span>
                </div>
                <div className="main_infor_item">
                    <span><i className="fa-solid fa-circle-check"></i></span>
                    <span>Không chi phí phát sinh</span>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="main_intro">
                <div className="main_intro_left">
                    <img src={Intro} alt="" />
                    <span>
                        <img src={IntroIcon} alt="" />
                    </span>
                </div>
                <div className="main_intro_right">
                    <h3>Tại sao chọn chúng tôi</h3>
                    <h2>GIỚI THIỆU VẬN TẢI GIANG TOÀN</h2>
                    <p>Công Ty TNHH Dịch Vụ Vận Tải Giang Toàn được thành lập vào năm 2012, với hơn kinh nghiệm 10 năm hoạt động trong ngành vận tải
                        đường sắt chúng tôi luôn đảm bảo hàng hóa được vận chuyển an toàn và đúng thời gian cho quý khách hàng. <br></br>
                        Bên em chuyên vận chuyển tất cả các loại hàng hóa từ vận chuyển nhà, hàng xuất nhập khẩu, hàng nội địa đến cung cấp 
                        dịch vụ đường sắt, tàu hỏa. Ngoài ra bên em còn hỗ trợ vận chuyển xe tải đến ga tàu. <br></br>
                        Hiện tại thì vận tải Phước Tá chú trọng nhiều nhất vào các công ti miền Bắc và miền Nam. 
                        Trong đó, dịch vụ vận chuyển hàng hóa được ưu tiên và chú trọng nhất với mục tiêu 
                        đáp ứng nhanh nhất những yêu cầu về vận chuyển hàng hóa. Nếu quý khách có nhu cầu vận 
                        chuyển hàng hóa đến bất kỳ nơi nào, chúng tôi đều có khả năng đáp ứng.<br></br>
                        Ngoài ra thì công ty Giang Toàn còn cung cấp dịch vụ xuất nhập khẩu ở các nước như Trung Quốc, Mông Cổ, Nga theo container 40'.<br></br>
                    </p>
                    <button className="button" onClick={phoneCall}>Gọi Ngay</button>
                </div>
            </div>
            <div className="main_brand">
                <span>
                    <img src={Brand1} alt="" />
                </span>
                <span>
                    <img src={Brand2} alt="" />
                </span>
                <span>
                    <img src={Brand3} alt="" />
                </span>
                <span>
                    <img src={Brand4} alt="" />
                </span>
                <span>
                    <img src={Brand5} alt="" />
                </span>
                <span>
                    <img src={Brand6} alt="" />
                </span>
            </div>
        </div>
        <div className="main_bg">
            <img src={MainBackground} alt="" />
        </div>
        <div className="container">
            <div className="service">
                <h3>Dịch vụ của chúng tôi</h3>
                <h2>Chúng tôi vận chuyển hàng hóa của bạn một cách an toàn và nhanh chóng.</h2>
                <p>Chúng tôi là một dịch vụ vận tải được trang bị tốt sẵn sàng nhận yêu cầu vận chuyển 24/7, chúng tôi cung cấp dịch vụ nhanh chóng, giá cả phải chăng,
                    thân thiện và đáng tin cậy.</p>
                <div className="home_list">
                    <div className="home_list_top">
                        <div className="home_list_item">
                            <span className="icon">
                                <img src={Service1} alt="" />
                            </span>
                            <h4>Tình huống khẩn cấp</h4>
                            <p>Đối với những tình huống khẩn cấp như hỏng hàng, mất hàng trong quá trình vận chuyển thì bên chúng tôi sẽ cập nhật tình trạng hàng hóa
                                cho khách hàng và đền bù theo giá thị trường.</p>
                        </div>
                        <div className="home_list_item">
                            <span className="icon">
                                <img src={Service2} alt="" />
                            </span>
                            <h4>Giảm giá cước vận chuyển</h4>
                            <p>Đối với những khách hàng mới, sẽ có ưu đãi về giá cước vận chuyển. Tốn ít thời gian và tiền bạc hơn 
                                mà dành nhiều thời gian hơn cho doanh nghiệp của bạn.</p>
                        </div>
                    </div>
                    <div className="home_list_bottom">
                        <div className="home_list_item">
                            <span className="icon">
                                <img src={Service3} alt="" />
                            </span>
                            <h4>Dịch vụ vận chuyển đường dài (từ ga đến ga)</h4>
                            <p>Luôn cập nhật tiến độ cho khách hàng từ lúc dỡ hàng hóa lên tàu cho đến lúc tàu chạy đến ga cần đến.</p>
                        </div>
                        <div className="home_list_item">
                            <span className="icon">
                                <img src={Service4} alt="" />
                            </span>
                            <h4>Dịch vụ vận chuyển từ kho đến kho</h4>
                            <p>Luôn cập nhật tiến độ cho khách hàng từ lúc bốc xếp dỡ hàng ở kho đối tác của bạn tới kho doanh nghiệp của bạn và trong quá trình 
                                nếu có vấn đề thì sẽ lập tức báo cho bạn ngay lập tức.</p>
                        </div>
                        <div className="home_list_item">
                            <span className="icon">
                                <img src={Service5} alt="" />
                            </span>
                            <h4>Dịch vụ vận chuyển đường ngắn (từ kho tới ga)</h4>
                            <p>Luôn cập nhật tiến độ cho khách hàng từ lúc xếp dỡ từ kho lên xe tải và luôn quan sát quá trình tàu chạy và xe chạy.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="question">
                <h3>FAQ</h3>
                <h2>Những câu hỏi phổ biến</h2>
                <p>Chúng tôi là một dịch vụ vận chuyển được trang bị tốt sẵn sàng hỗ trợ khách hàng 24/7, chúng tôi cung cấp dịch vụ nhanh chóng, giá cả linh hoạt, thân thiện,
                    và dịch vụ vận chuyển đánh tin cậy.</p>
                <ul className="question_list">
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Thời gian vận chuyển là bao lâu?</h4>
                            <p>Thường thì sẽ là 4 ngày từ khi báo kế hoạch vận chuyển nhưng tùy theo khối lượng cũng như loại dịch vụ mà thời gian vận chuyển có thể thay đổi.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Giá cước vận chuyển là bao nhiêu?</h4>
                            <p>Thường thì sẽ tùy theo khối lượng, loại hàng, loại dịch vụ,... và sẽ báo giá trước 1 ngày dựa theo thông tin đã cung cấp.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có an toàn không?</h4>
                            <p>Chúng tôi là dịch vụ vận tải với hơn 10 năm hoạt động trong ngành và được trang bị tốt nhất để hỗ trợ khách hàng 24/7.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có chế độ bồi thường hàng hóa khi bị mất mát hư hỏng không?</h4>
                            <p>Trong những trường hợp trong quá trình vận chuyển hàng hóa bị mất mát hư hỏng thì công ti sẽ đền bù hàng hóa đã mất mát hư hỏng 
                                dựa theo giá thị trường.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có đảm bảo thông tin về hàng hóa cho khách hàng không?</h4>
                            <p>Sau khi nhận thông tin khách hàng thì công ti sẽ gọi đến số điện thoại đã được cung cấp và lên hợp đồng thỏa thuận giữa 2 bên và 
                                bảo mật thông tin khách hàng cũng được làm vào lúc này.</p>
                        </div>
                    </li>
                    <li>
                        <span><i className="fa-solid fa-circle-question"></i></span>
                        <div>
                            <h4>Có các dịch vụ hỗ trợ như bốc xếp, kho bãi, vận chuyển từ kho tới kho không?</h4>
                            <p>Có và nếu có dịch vụ phát sinh thì tất cả phải được làm rõ trước khi lên hợp đồng giữa 2 bên.</p>
                        </div>
                    </li>
                </ul>
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
                    {/* <form action="" className="form_request">
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
                        <button className="button" onClick={postForm}>Hoàn tất</button>
                    </form> */}
                    <div className="contact_phone">
                        <h4>Liên hệ để chuyển hàng</h4>
                        <span className="line"></span>
                        <p>Hotline: <br/> 0908 473 406</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}
