import React, { useState } from 'react'

export default function SongThanTransportation() {
    const [value, setValue] = useState();
    const caculateMoney = () => {
        let result = 0;
        result = value * 15000;
        if (isNaN(result)) {
        document.getElementById('railwayResult').innerText = "Xin hãy nhập vào số tiền tương ứng";
        } else {
        const formattedResult = result.toLocaleString('en-US');
        document.getElementById('songThanResult').innerText = formattedResult + "đ";
        }
    }
    const handleInputChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <h2>Cước vận chuyển từ kho đến ga Sóng Thần</h2>
            <div className="transport_detail_input">
                <input
                type="text"
                placeholder="Quãng đường"
                onChange={handleInputChange}
                />
                <i>km</i>
                <br />
                <button onClick={caculateMoney}>Thành Tiền</button>
                <p id="songThanResult"> Số tiền</p>
            </div>

            <table className="transport_detail_table">
                <thead>
                    <tr>
                        <th>Tỉnh</th>
                        <th>Địa chỉ</th>
                        <th>Đơn giá</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>TP.HCM</th>
                        <th>Địa chỉ của khách</th>
                        <th>
                            15,000đ/km
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>Ghi chú:</b> &lt;Hàng 2 tấn, &lt;3m3 hỗ trợ khách dời hàng ra đít
                xe, &gt;2 tấn,&gt; 3m3: bốc xếp 50k/ tấn, 10k/m3.
            </p>
            <p>
                <b>Bốc xếp vào kho cho khách :</b> 100k/tấn; 30k/m3 . Khách vui lòng
                báo trước để sắp xếp bốc xếp theo xe
            </p>
        </div>
    );
}
