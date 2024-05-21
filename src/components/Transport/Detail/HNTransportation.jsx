import React, { useState } from 'react'
import GiapBatTransportation from './Fee_Type/GiapBatTransportation'

export default function HNTransportation() {
  const [money, setMoney] = useState();
  let menu = document.querySelectorAll('.header_menu a');
  menu.forEach(item => {
    // Remove the 'active' class from all anchor elements
    item.classList.remove('active');

    // Check if the href attribute of the anchor element is equal to "start"
    if (item.getAttribute('href') === 'transport') {
      // Add the 'active' class to the anchor element with href "start"
      item.classList.add('active');
    }
  });
  let handleMoneyChange = (e) => {
    setMoney(e.target.value);
  }
  let caculateMoney = () => {
    let result = parseInt(money);
    if (isNaN(result)) {
      document.getElementById('result').innerText = "Xin hãy nhập vào số tiền tương ứng";
    } else {
      const formattedResult = result.toLocaleString('en-US');
      document.getElementById('result').innerText = formattedResult + "đ";
    }
  }
  return (
    <div>
      <div className="breadcrumb">
        <h2>Dịch vụ vận chuyển</h2>
        <div className="breadcrumb_redirect">
          <a href="/">Trang chủ</a>
          <span>
            <iconify-icon icon="icon-park-outline:right"></iconify-icon>
          </span>
          <span>Bảng giá</span>
          <span>
            <iconify-icon icon="icon-park-outline:right"></iconify-icon>
          </span>
          <span>
            Vận Chuyển Hàng Từ Kho Hà Nội tới các tỉnh thành miền bắc
          </span>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="transport_detail">
            <h1>Bảng Giá Tổng Hợp</h1>
            <div className="transport_detail_input">
              <input type="text" placeholder="Tiền ga Giáp Bát đến kho" onChange={handleMoneyChange}/>
              <br />
              <button onClick={caculateMoney}>Thành Tiền</button>
              <p id="result"> Số tiền</p>
            </div>
            <table className="transport_detail_table">
              <thead>
                <tr>
                  <th>Nơi Đi</th>
                  <th>Nơi Đến</th>
                  <th>Cách tính cước vận chuyển Đường dài Nam - Bắc</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Ga Sóng Thần</th>
                  <th>Ga Giáp Bát</th>
                  <th>Cước Đường sắt ( Từ Ga Sóng Thần đến Ga Giáp Bát)</th>
                </tr>
                <tr>
                  <th>Ga Sóng Thần</th>
                  <th>Kho Hà Nội</th>
                  <th>
                    Cước Đường sắt + Cước vận chuyển từ ga Giáp Bát đến Kho
                    của Khách
                  </th>
                </tr>
                <tr>
                  <th>Kho Sài Gòn</th>
                  <th>Ga Giáp Bát</th>
                  <th>
                    Cước ô tô lấy hàng từ kho của khách đến ga Sóng Thần +
                    Cước Đường sắt
                  </th>
                </tr>
                <tr>
                  <th>Kho Sài Gòn</th>
                  <th>Kho Hà Nội</th>
                  <th>
                    Cước ô tô lấy hàng từ kho của khách đến ga Sóng Thần +
                    Cước Đường sắt + Cước ô tô vận chuyển từ ga Giáp Bát đến
                    kho của Khách
                  </th>
                </tr>
              </tbody>
            </table>
            <GiapBatTransportation></GiapBatTransportation>
          </div>
        </div>
      </main>
    </div>
  );
}
