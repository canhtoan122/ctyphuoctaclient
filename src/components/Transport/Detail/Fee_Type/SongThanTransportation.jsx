import React, { useState } from 'react'

export default function SongThanTransportation() {
    const [value, setValue] = useState('');
    const [selectorValue, setSelectorValue] = useState([]);
    const [optionValue, setOptionValue] = useState('');
    const [caculatorValue, setCaculatorValue] = useState();
    const [inputType, setInputType] = useState('');
    const [kgSwitch, setKgSwitch] = useState(false);
    const [m3Switch, setM3Switch] = useState(false);
    const [hcm, setHCM] = useState([
        { value: 'HCM', label: 'Nội thành HCM bán kính 30km' },
        { value: 'CuChi', label: 'Củ Chi không có hàng ghép' }
    ]);
    const [BinhDuong, setBinhDuong] = useState([
        { value: 'DiAn', label: 'DĨ AN' },
        { value: 'ThuanAn', label: 'THUẬN AN' },
        { value: 'ThuDauMot', label: 'TP. THỦ DẦU MỘT' },
        { value: 'BauBang', label: 'BÀU BÀNG' },
        { value: 'BenCat', label: 'BẾN CÁT' },
        { value: 'TanUyen', label: 'Tân Uyên' },
        { value: 'BacTanUyen', label: 'Bắc Tân Uyên' }
    ]);
    const [DongNai, setDongNai] = useState([
        { value: 'BienHoa', label: 'TP BIÊN HÒA' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [VungTau, setVungTau] = useState([
        { value: 'VungTau', label: 'TP VŨNG TÀU' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [TayNinh, setTayNinh] = useState([
        { value: 'TrangBang', label: 'Trảng Bàng' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [LongAn, setLongAn] = useState([
        { value: 'DucHoa', label: 'Đức Hòa' },
        { value: 'BenLuc', label: 'Bến Lức' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const handleSelectorChange = (event) => {
        setValue(event.target.value);
    }
    const handleInputChange = (e) => {
        setCaculatorValue(e.target.value);
    }
    const handleOptionChange = (e) => {
        setOptionValue(e.target.value);
    }
    const handleTypeInputChange = (e) => {
        setInputType(e.target.value);
    }
    const renderSelector = () => {
        if (value == "HCM") {
            setSelectorValue(hcm);
        } else if (value == "BinhDuong") {
            setSelectorValue(BinhDuong);
        } else if (value == "DongNai") {
            setSelectorValue(DongNai);
        } else if (value == "VungTau") {
            setSelectorValue(VungTau);
        } else if (value == "TayNinh") {
            setSelectorValue(TayNinh);
        } else if (value == "LongAn") {
            setSelectorValue(LongAn);
        } else {
            setSelectorValue([]);
        }
    }
    const renderInputType = () => {
        if (inputType == "kg") {
            setKgSwitch(true);
            setM3Switch(false);
        } else if (inputType == "m3") {
            setKgSwitch(false);
            setM3Switch(true);
        } else {
            setKgSwitch(false);
            setM3Switch(false);
        }
    }
    const caculateMoney = () => {
        if (inputType == "kg") {
            caculateKgMoney();
        } else {
            caculateM3Money();
        }
    }
    const caculateKgMoney = () => {
        let result = 0;
        let check = parseInt(caculatorValue);
        if (isNaN(check)) {
            document.getElementById('songThanResult').innerText = "Xin hãy nhập vào số tiền tương ứng";
            return;
        }
        if (optionValue == "Others") {
            document.getElementById('songThanResult').innerText = "Đơn Giá thỏa thuận theo từng chuyến.";
            return;
        } else if (optionValue == "HCM") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "CuChi") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 250;
            } else {
                result = 700000;
            }
        } else if (optionValue == "DiAn") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 200;
            } else {
                result = 300000;
            }
        } else if (optionValue == "ThuanAn") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 250;
            } else {
                result = 500000;
            }
        } else if (optionValue == "ThuDauMot") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 200;
            } else {
                result = 500000;
            }
        } else if (optionValue == "BauBang") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 300;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BenCat") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 300;
            } else {
                result = 800000;
            }
        } else if (optionValue == "TanUyen") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 300;
            } else {
                result = 600000;
            }
        } else if (optionValue == "BacTanUyen") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 300;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BienHoa") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "VungTau") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 750;
            } else {
                result = 1500000;
            }
        } else if (optionValue == "TrangBang") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 400;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 350;
            } else {
                result = 800000;
            }
        } else if (optionValue == "DucHoa") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 400;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 350;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BenLuc") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 400;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 350;
            } else {
                result = 800000;
            }
        } else {
            result = 0;
        }
        const formattedResult = result.toLocaleString('en-US');
        document.getElementById('songThanResult').innerText = formattedResult + "đ";
    }
    const caculateM3Money = () => {
        let result = 0;
        if (optionValue == "Others") {
            document.getElementById('others').innerText = "Đơn Giá thỏa thuận theo từng chuyến.";
        } else if (optionValue == "HCM") {
            if (caculatorValue >= 4) {
                result = caculatorValue * 50000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "CuChi") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 50000;
            } else {
                result = 700000;
            }
        } else if (optionValue == "DiAn") {
            if (caculatorValue >= 4) {
                result = caculatorValue * 50000;
            } else {
                result = 300000;
            }
        } else if (optionValue == "ThuanAn") {
            if (caculatorValue >= 8) {
                result = caculatorValue * 50000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "ThuDauMot") {
            if (caculatorValue >= 8) {
                result = caculatorValue * 50000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "BauBang") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BenCat") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "TanUyen") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 80000;
            } else {
                result = 600000;
            }
        } else if (optionValue == "BacTanUyen") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BienHoa") {
            if (caculatorValue >= 4) {
                result = caculatorValue * 70000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "VungTau") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 150000;
            } else {
                result = 1500000;
            }
        } else if (optionValue == "TrangBang") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "DucHoa") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BenLuc") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else {
            result = 0;
        }
        if (isNaN(result)) {
            document.getElementById('result').innerText = "Xin hãy nhập vào số tiền tương ứng";
        } else {
            const formattedResult = result.toLocaleString('en-US');
            document.getElementById('result').innerText = formattedResult + "đ";
        }
    }
    return (
        <div>
            <h2>Cước vận chuyển từ kho đến ga Sóng Thần</h2>
            <div className="transport_detail_select">
                <select onChange={handleSelectorChange}>
                    <option value="">--------------</option>
                    <option value="HCM">TP.HCM</option>
                    <option value="BinhDuong">BÌNH DƯƠNG</option>
                    <option value="DongNai">ĐỒNG NAI</option>
                    <option value="VungTau">Vũng Tàu</option>
                    <option value="TayNinh">Tây Ninh</option>
                    <option value="LongAn">Long An</option>
                </select>
                <select onClick={renderSelector} onChange={handleOptionChange}>
                    <option value="">--------------</option>
                    {selectorValue.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <select onClick={renderInputType} onChange={handleTypeInputChange}>
                    <option value="">--------------</option>
                    <option value="kg">KG</option>
                    <option value="m3">M3</option>
                </select>
            </div>
            <br />
            {kgSwitch && (
                <div>
                    <div className="transport_detail_input">
                        <input
                            type="text"
                            placeholder="Khối lượng"
                            onChange={handleInputChange}
                        />
                        <i>kg</i>
                        <p>Ghi chú: 1 tấn = 1000kg</p>
                        <br />
                        <button onClick={caculateMoney}>Thành Tiền</button>
                    </div>
                    <p id="songThanResult"> Số tiền</p>
                    <p id="others"></p>
                </div>
            )}
            {m3Switch && (
                <div>
                    <div className="transport_detail_input">
                        <input
                            type="text"
                            placeholder="Trọng lượng"
                            onChange={handleInputChange}
                        />
                        <i>m3</i>
                        <br />
                        <button onClick={caculateMoney}>Thành Tiền</button>
                        <p id="songThanResult"> Số tiền</p>
                        <p id="others"></p>
                    </div>
                </div>
            )}
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
                        <th>Nội thành HCM bán kính 30km</th>
                        <th>
                            &lt;1 Tấn, &lt;4m3 200k địa điểm, &gt; 1 tấn 200k/tấn, &gt; 4m3
                            50k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>TP.HCM</th>
                        <th>Củ Chi không có hàng ghép</th>
                        <th>700k/ chuyến, &gt; 3 tấn 250k/tấn, &gt; 10m3 50k/m3</th>
                    </tr>
                    <tr>
                        <th>BÌNH DƯƠNG</th>
                        <th>DĨ AN</th>
                        <th>300K/chuyến, &gt; 2 tấn, 200k/tấn, &gt;4m3 50k/m3 </th>
                    </tr>
                    <tr>
                        <th>BÌNH DƯƠNG</th>
                        <th>THUẬN AN</th>
                        <th>500K/chuyến, &gt; 2 tấn, 250k/tấn, &gt;8m3 50k/m3 </th>
                    </tr>
                    <tr>
                        <th>BÌNH DƯƠNG</th>
                        <th>TP. THỦ DẦU MỘT</th>
                        <th>500K/chuyến, &gt; 2 tấn, 200k/tấn, &gt;8m3 50k/m3 </th>
                    </tr>
                    <tr>
                        <th>BÌNH DƯƠNG</th>
                        <th>BÀU BÀNG</th>
                        <th>800k/chuyến, &gt; 3 tấn 300k/ tấn, &gt;10m3 80k/m3</th>
                    </tr>
                    <tr>
                        <th>BÌNH DƯƠNG</th>
                        <th>BẾN CÁT</th>
                        <th>800k/chuyến, &gt; 3 tấn 300k/ tấn, &gt;10m3 80k/m3</th>
                    </tr>
                    <tr>
                        <th>BÌNH DƯƠNG</th>
                        <th>Tân Uyên</th>
                        <th>600k/ chuyến, &gt;2 tấn 300k/tấn, &gt;10m3, 80k/m3</th>
                    </tr>
                    <tr>
                        <th>BÌNH DƯƠNG</th>
                        <th>Bắc Tân Uyên</th>
                        <th>800k/chuyến, &gt; 3 tấn 300k/ tấn, &gt;10m3 80k/m3</th>
                    </tr>
                    <tr>
                        <th>ĐỒNG NAI</th>
                        <th>TP BIÊN HÒA</th>
                        <th>
                            {" "}
                            &lt;1 Tấn, &lt;4m3 200k địa điểm, &gt; 1 tấn 200k/tấn, &gt; 4m3
                            70k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>ĐỒNG NAI</th>
                        <th>Tất cả các địa điểm khác</th>
                        <th>Đơn giá thoả thuận theo từng chuyến</th>
                    </tr>
                    <tr>
                        <th>Vũng Tàu</th>
                        <th>TP VŨNG TÀU</th>
                        <th>1500k/ chuyến, &gt; 2 tấn 750k/ tấn,&gt;10m3 150k/m3</th>
                    </tr>
                    <tr>
                        <th>Vũng Tàu</th>
                        <th>Tất cả các địa điểm khác</th>
                        <th>Đơn giá thoả thuận theo từng chuyến</th>
                    </tr>
                    <tr>
                        <th>Tây Ninh</th>
                        <th>Trảng Bàng </th>
                        <th>
                            800k/chuyến, &gt; 2~4 tấn 400k/ tấn, &gt;10m3 80k/m3, &gt;= 5
                            tấn 350k/tấn
                        </th>
                    </tr>
                    <tr>
                        <th>Tây Ninh</th>
                        <th>Tất cả các địa điểm khác</th>
                        <th>Đơn giá thoả thuận theo từng chuyến</th>
                    </tr>
                    <tr>
                        <th>Long An</th>
                        <th>Đức Hòa</th>
                        <th>
                            800k/chuyến, &gt; 2~4 tấn 400k/ tấn, &gt;10m3 80k/m3, &gt;= 5
                            tấn 350k/tấn
                        </th>
                    </tr>
                    <tr>
                        <th>Long An</th>
                        <th>Bến Lức</th>
                        <th>
                            800k/chuyến, &gt; 2~4 tấn 400k/ tấn, &gt;10m3 80k/m3, &gt;= 5
                            tấn 350k/tấn
                        </th>
                    </tr>
                    <tr>
                        <th>Long An</th>
                        <th>Tất cả các địa điểm khác</th>
                        <th>Đơn giá thoả thuận theo từng chuyến</th>
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
