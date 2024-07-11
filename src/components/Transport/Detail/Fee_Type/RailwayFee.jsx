import React, { useState } from 'react'

export default function RailwayFee() {
  const [value, setValue] = useState();
  const caculateMoney = () => {
    let result = 0;
    result = value * 500000;
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
        <i>m3</i>
        <br />
        <button onClick={caculateMoney}>Thành Tiền</button>
        <p id="railwayResult"> Số tiền</p>
      </div>
      <p>
          <b>Ghi chú:</b> Công thức tính m3: Chiều dài * chiều rộng * chiều cao
      </p>
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
              500,000đ/m3
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
