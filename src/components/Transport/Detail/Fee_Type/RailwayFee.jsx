import React, { useState } from 'react'

export default function RailwayFee() {
  const [value, setValue] = useState();
  const caculateMoney = () => {
    let result = 0;
    if (value > 2000) {
      result = value * 900;
    } else {
      result = value * 1000;
    }
    if (isNaN(result)) {
      document.getElementById('railwayResult').innerText = "Xin hãy nhập vào số tiền tương ứng";
    } else {
      const formattedResult = result.toLocaleString('en-US');
      document.getElementById('railwayResult').innerText = formattedResult + "đ";
    }
  }
  const handleInputChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div>
      <h2>Cước đường sắt</h2>
      <div className="transport_detail_input">
        <input
          type="text"
          placeholder="Khối lượng"
          onChange={handleInputChange}
        />
        <i>kg</i>
        <br />
        <button onClick={caculateMoney}>Thành Tiền</button>
        <p id="railwayResult"> Số tiền</p>
      </div>
      <table className="transport_detail_table">
        <thead>
          <tr>
            <th>Nơi Đi</th>
            <th>Nơi Đến</th>
            <th>Giá Cước</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Ga Sóng Thần</th>
            <th>Ga Giáp Bát</th>
            <th>
              Ít hơn 2 tấn , giá cước 1000đ/kg, trên 2 tấn giá cước 900đ/kg
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
