import React, { useState } from 'react'

export default function GiapBatTransportation() {
    const [value, setValue] = useState('');
    const [selectorValue, setSelectorValue] = useState([]);
    const [optionValue, setOptionValue] = useState('');
    const [caculatorValue, setCaculatorValue] = useState();
    const [inputType, setInputType] = useState('');
    const [kgSwitch, setKgSwitch] = useState(false);
    const [m3Switch, setM3Switch] = useState(false);
    const [HaNoi, setHaNoi] = useState([
        { value: 'BaDinh', label: 'BA ĐÌNH' },
        { value: 'BacTuLiem', label: 'BẮC TỪ LIÊM' },
        { value: 'CauGiay', label: 'CẦU GIẤY' },
        { value: 'DongDa', label: 'ĐỐNG ĐA' },
        { value: 'HaDong', label: 'HÀ ĐÔNG' },
        { value: 'HaiBatrung', label: 'HAI BÀ TRƯNG' },
        { value: 'HoanKiem', label: 'HOÀN KIẾM' },
        { value: 'HoangMai', label: 'HOÀNG MAI' },
        { value: 'LongBien', label: 'LONG BIÊN' },
        { value: 'NamTuLiem', label: 'NAM TỪ LIÊM' },
        { value: 'TayHo', label: 'TÂY HỒ' },
        { value: 'ThanhXuan', label: 'THANH XUÂN' },
        { value: 'SonTay', label: 'SƠN TÂY' },
        { value: 'BaVi', label: 'BA VÌ' },
        { value: 'ChuongMy', label: 'CHƯƠNG MỸ' },
        { value: 'DanPhuong', label: 'ĐAN PHƯỢNG' },
        { value: 'DongAnh', label: 'ĐÔNG ANH' },
        { value: 'GiaLam', label: 'GIA LÂM' },
        { value: 'HoaiDuc', label: 'HOÀI ĐỨC' },
        { value: 'MeLinh', label: 'MÊ LINH' },
        { value: 'MyDuc', label: 'MỸ ĐỨC' },
        { value: 'PhuXuyen', label: 'PHÚ XUYÊN' },
        { value: 'QuocOai', label: 'QUỐC OAI' },
        { value: 'SocSon', label: 'SÓC SƠN' },
        { value: 'ThachThat', label: 'THẠCH THẤT' },
        { value: 'ThanhOai', label: 'THANH OAI' },
        { value: 'ThanhTri', label: 'THANH TRÌ' },
        { value: 'ThuongTin', label: 'THƯỜNG TÍN' },
        { value: 'UngHoa', label: 'ỨNG HOÀ' }
    ]);
    const [HaiDuong, setHaiDuong] = useState([
        { value: 'HaiDuong', label: 'HẢI DƯƠNG' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [BacGiang, setBacGiang] = useState([
        { value: 'BacGiang', label: 'BẮC GIANG' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [BacNinh, setBacNinh] = useState([
        { value: 'BacNinh', label: 'BẮC NINH' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [HaNam, setHaNam] = useState([
        { value: 'HaNam', label: 'HÀ NAM' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [HoaBinh, setHoaBinh] = useState([
        { value: 'HoaBinh', label: 'TP- HÒA BÌNH' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [HungYen, setHungYen] = useState([
        { value: 'VanLam', label: 'Văn Lâm' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [NamDinh, setNamDinh] = useState([
        { value: 'MyLoc', label: 'THÀNH PHỐ NAM ĐỊNH VÀ MỸ LỘC' },
        { value: 'HaiHau', label: 'HẢI HẬU' },
        { value: 'NghiaHung', label: 'NGHĨA HƯNG' }
    ]);
    const [NinhBinh, setNinhBinh] = useState([
        { value: 'NinhBinh', label: 'TP-NINH BÌNH' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [PhuTho, setPhuTho] = useState([
        { value: 'PhuTho', label: 'PHÚ THỌ' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [ThaiBinh, setThaiBinh] = useState([
        { value: 'ThaiBinh', label: 'THÀNH PHỐ THÁI BÌNH' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [ThaiNguyen, setThaiNguyen] = useState([
        { value: 'ThaiNguyen', label: 'THÁI NGUYÊN' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [VinhPhuc, setVinhPhuc] = useState([
        { value: 'VinhPhuc', label: 'VĨNH PHÚC' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [ThanhHoa, setThanhHoa] = useState([
        { value: 'ThanhHoa', label: 'THANH HÓA' },
        { value: 'NongCong', label: 'NÔNG CỐNG' },
        { value: 'TrieuSon', label: 'TRIỆU SƠN' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [QuangNinh, setQuangNinh] = useState([
        { value: 'QuangNinh', label: 'QUẢNG NINH' },
        { value: 'Others', label: 'Các huyện khác' }
    ]);
    const [HaiPhong, setHaiPhong] = useState([
        { value: 'HaiPhong', label: 'HẢI PHÒNG' },
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
        if (value == "HaNoi") {
            setSelectorValue(HaNoi);
        } else if (value == "HaiDuong") {
            setSelectorValue(HaiDuong);
        } else if (value == "BacGiang") {
            setSelectorValue(BacGiang);
        } else if (value == "BacNinh") {
            setSelectorValue(BacNinh);
        } else if (value == "HaNam") {
            setSelectorValue(HaNam);
        } else if (value == "HoaBinh") {
            setSelectorValue(HoaBinh);
        } else if (value == "HungYen") {
            setSelectorValue(HungYen);
        } else if (value == "NamDinh") {
            setSelectorValue(NamDinh);
        } else if (value == "NinhBinh") {
            setSelectorValue(NinhBinh);
        } else if (value == "PhuTho") {
            setSelectorValue(PhuTho);
        } else if (value == "ThaiBinh") {
            setSelectorValue(ThaiBinh);
        } else if (value == "ThaiNguyen") {
            setSelectorValue(ThaiNguyen);
        } else if (value == "VinhPhuc") {
            setSelectorValue(VinhPhuc);
        } else if (value == "ThanhHoa") {
            setSelectorValue(ThanhHoa);
        } else if (value == "QuangNinh") {
            setSelectorValue(QuangNinh);
        } else if (value == "HaiPhong") {
            setSelectorValue(HaiPhong);
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
            document.getElementById('giapBatResult').innerText = "Xin hãy nhập vào số tiền tương ứng";
            return;
        }
        if (optionValue == "Others") {
            document.getElementById('giapBatResult').innerText = "Đơn Giá thỏa thuận theo từng chuyến.";
            return;
        } else if (optionValue == "BaDinh") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "BacTuLiem") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 250;
            } else {
                result = 250000;
            }
        } else if (optionValue == "CauGiay") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "DongDa") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "HaDong") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 250;
            } else {
                result = 250000;
            }
        } else if (optionValue == "HaiBatrung") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "HoanKiem") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "HoangMai") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "LongBien") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "NamTuLiem") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "TayHo") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "ThanhXuan") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "SonTay") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 350;
            } else {
                result = 700000;
            }
        } else if (optionValue == "BaVi") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 350;
            } else {
                result = 800000;
            }
        } else if (optionValue == "ChuongMy") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 250;
            } else {
                result = 500000;
            }
        } else if (optionValue == "DanPhuong") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 250;
            } else {
                result = 500000;
            }
        } else if (optionValue == "DongAnh") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 300;
            } else {
                result = 500000;
            }
        } else if (optionValue == "GiaLam") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 250;
            } else {
                result = 250000;
            }
        } else if (optionValue == "HoaiDuc") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 250;
            } else {
                result = 250000;
            }
        } else if (optionValue == "MeLinh") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 250;
            } else {
                result = 500000;
            }
        } else if (optionValue == "MyDuc") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 350;
            } else {
                result = 700000;
            }
        } else if (optionValue == "PhuXuyen") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 250;
            } else {
                result = 500000;
            }
        } else if (optionValue == "QuocOai") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 250;
            } else {
                result = 500000;
            }
        } else if (optionValue == "SocSon") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 350;
            } else {
                result = 700000;
            }
        } else if (optionValue == "ThachThat") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 300;
            } else {
                result = 600000;
            }
        } else if (optionValue == "ThanhOai") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 250;
            } else {
                result = 250000;
            }
        } else if (optionValue == "ThanhTri") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 200;
            } else {
                result = 200000;
            }
        } else if (optionValue == "ThuongTin") {
            if (caculatorValue >= 1000) {
                result = caculatorValue * 250;
            } else {
                result = 250000;
            }
        } else if (optionValue == "UngHoa") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 300;
            } else {
                result = 600000;
            }
        } else if (optionValue == "HaiDuong") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 400;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BacGiang") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 400;
            } else {
                result = 900000;
            }
        } else if (optionValue == "BacNinh") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 300;
            } else {
                result = 600000;
            }
        } else if (optionValue == "HaNam") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 400;
            } else {
                result = 800000;
            }
        } else if (optionValue == "HoaBinh") {
            if (caculatorValue >= 2000) {
                result = 2000000;
            } else if (caculatorValue >= 4000) {
                result = caculatorValue * 500;
            } else {
                result = 1500000;
            }
        } else if (optionValue == "VanLam") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 250;
            } else {
                result = 500000;
            }
        } else if (optionValue == "MyLoc") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 450;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 400;
            } else {
                result = 1200000;
            }
        } else if (optionValue == "HaiHau") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 600;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 500;
            } else {
                result = 1700000;
            }
        } else if (optionValue == "NghiaHung") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 600;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 500;
            } else {
                result = 1700000;
            }
        } else if (optionValue == "NinhBinh") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 500;
            } else if (caculatorValue >= 10000) {
                result = caculatorValue * 400;
            } else {
                result = 1200000;
            }
        } else if (optionValue == "PhuTho") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 500;
            } else if (caculatorValue >= 10000) {
                result = caculatorValue * 400;
            } else {
                result = 1200000;
            }
        } else if (optionValue == "ThaiBinh") {
            if (caculatorValue >= 2500) {
                result = caculatorValue * 500;
            } else if (caculatorValue >= 10000) {
                result = caculatorValue * 350;
            } else {
                result = 1400000;
            }
        } else if (optionValue == "ThaiNguyen") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 500;
            } else {
                result = 1000000;
            }
        } else if (optionValue == "VinhPhuc") {
            if (caculatorValue >= 2000) {
                result = caculatorValue * 400;
            } else {
                result = 800000;
            }
        } else if (optionValue == "ThanhHoa") {
            if (caculatorValue >= 200) {
                result = 500000;
            } else if (caculatorValue >= 500) {
                result = 2100000;
            } else if (caculatorValue >= 3000) {
                result = 2300000;
            } else if (caculatorValue >= 4000) {
                result = caculatorValue * 550;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 500;
            } else {
                result = 300000;
            }
        } else if (optionValue == "NongCong") {
            if (caculatorValue >= 5000) {
                result = caculatorValue * 650;
            } else {
                document.getElementById('others').innerText = "Đơn Giá thỏa thuận sau.";
            }
        } else if (optionValue == "TrieuSon") {
            if (caculatorValue >= 3000) {
                result = caculatorValue * 650;
            } else {
                result = 2400000;
            }
        } else if (optionValue == "QuangNinh") {
            document.getElementById('others').innerText = "Đơn Giá thỏa thuận theo từng chuyến.";
        } else if (optionValue == "HaiPhong") {
            if (caculatorValue >= 3000) {
                result = 2400000;
            } else if (caculatorValue >= 5000) {
                result = caculatorValue * 500;
            } else {
                result = 1800000;
            }
        } else {
            result = 0;
        }
        const formattedResult = result.toLocaleString('en-US');
        document.getElementById('giapBatResult').innerHTML = formattedResult + "đ";
    }
    const caculateM3Money = () => {
        let result = 0;
        let check = parseInt(caculatorValue);
        if (isNaN(check)) {
            document.getElementById('giapBatResult').innerText = "Xin hãy nhập vào số tiền tương ứng";
            return;
        }
        if (optionValue == "Others") {
            document.getElementById('giapBatResult').innerText = "Đơn Giá thỏa thuận theo từng chuyến.";
            return;
        } else if (optionValue == "BaDinh") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "BacTuLiem") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 50000;
            } else {
                result = 250000;
            }
        } else if (optionValue == "CauGiay") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "DongDa") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "HaDong") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 50000;
            } else {
                result = 250000;
            }
        } else if (optionValue == "HaiBatrung") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "HoanKiem") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "HoangMai") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "LongBien") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "NamTuLiem") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "TayHo") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "ThanhXuan") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "SonTay") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 80000;
            } else {
                result = 700000;
            }
        } else if (optionValue == "BaVi") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "ChuongMy") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 60000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "DanPhuong") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 60000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "DongAnh") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 60000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "GiaLam") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 50000;
            } else {
                result = 250000;
            }
        } else if (optionValue == "HoaiDuc") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 60000;
            } else {
                result = 250000;
            }
        } else if (optionValue == "MeLinh") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 60000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "MyDuc") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 80000;
            } else {
                result = 700000;
            }
        } else if (optionValue == "PhuXuyen") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 60000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "QuocOai") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 60000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "SocSon") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 70000;
            } else {
                result = 700000;
            }
        } else if (optionValue == "ThachThat") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 70000;
            } else {
                result = 600000;
            }
        } else if (optionValue == "ThanhOai") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 50000;
            } else {
                result = 250000;
            }
        } else if (optionValue == "ThanhTri") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 40000;
            } else {
                result = 200000;
            }
        } else if (optionValue == "ThuongTin") {
            if (caculatorValue >= 5) {
                result = caculatorValue * 50000;
            } else {
                result = 250000;
            }
        } else if (optionValue == "UngHoa") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 70000;
            } else {
                result = 600000;
            }
        } else if (optionValue == "HaiDuong") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 100000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "BacGiang") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 100000;
            } else {
                result = 900000;
            }
        } else if (optionValue == "BacNinh") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 80000;
            } else if (caculatorValue >= 30) {
                result = caculatorValue * 60000;
            } else {
                result = 600000;
            }
        } else if (optionValue == "HaNam") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "HoaBinh") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 100000;
            } else {
                result = 1500000;
            }
        } else if (optionValue == "VanLam") {
            if (caculatorValue >= 9) {
                result = caculatorValue * 60000;
            } else {
                result = 500000;
            }
        } else if (optionValue == "MyLoc") {
            if (caculatorValue >= 9) {
                result = caculatorValue * 120000;
            } else if (caculatorValue >= 10) {
                result = caculatorValue * 100000;
            } else {
                result = 1200000;
            }
        } else if (optionValue == "HaiHau") {
            if (caculatorValue >= 9) {
                result = caculatorValue * 120000;
            } else if (caculatorValue >= 10) {
                result = caculatorValue * 100000;
            } else {
                result = 1700000;
            }
        } else if (optionValue == "NghiaHung") {
            if (caculatorValue >= 9) {
                result = caculatorValue * 120000;
            } else if (caculatorValue >= 10) {
                result = caculatorValue * 100000;
            } else {
                result = 1700000;
            }
        } else if (optionValue == "NinhBinh") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 110000;
            } else if (caculatorValue >= 11) {
                result = caculatorValue * 100000;
            } else {
                result = 1200000;
            }
        } else if (optionValue == "PhuTho") {
            if (caculatorValue >= 10) {
                result = caculatorValue * 110000;
            } else if (caculatorValue >= 11) {
                result = caculatorValue * 100000;
            } else {
                result = 1200000;
            }
        } else if (optionValue == "ThaiBinh") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 120000;
            } else if (caculatorValue >= 5) {
                result = caculatorValue * 100000;
            } else {
                result = 1400000;
            }
        } else if (optionValue == "ThaiNguyen") {
            if (caculatorValue >= 5) {
                result = 1200000;
            } else {
                result = 1000000;
            }
        } else if (optionValue == "VinhPhuc") {
            if (caculatorValue >= 0) {
                result = caculatorValue * 80000;
            } else {
                result = 800000;
            }
        } else if (optionValue == "ThanhHoa") {
            if (caculatorValue >= 200) {
                result = 500000;
            } else {
                result = 300000;
            }
        } else if (optionValue == "NongCong") {
            document.getElementById('others').innerText = "Đơn Giá thỏa thuận sau.";
        } else if (optionValue == "TrieuSon") {
            result = 2400000;
        } else if (optionValue == "QuangNinh") {
            document.getElementById('others').innerText = "Đơn Giá thỏa thuận theo từng chuyến.";
        } else if (optionValue == "HaiPhong") {
            if (caculatorValue >= 10) {
                result = 2400000;
            } else if (caculatorValue >= 20) {
                result = caculatorValue * 120000;
            } else {
                result = 1800000;
            }
        } else {
            result = 0;
        }
        const formattedResult = result.toLocaleString('en-US');
        document.getElementById('giapBatResult').innerHTML = formattedResult + "đ";
    }
    return (
        <div>
            <h2>Cước vận chuyển từ ga Giáp Bát đến kho khách</h2>
            <div className="transport_detail_select">
                <select onChange={handleSelectorChange}>
                    <option value="">--------------</option>
                    <option value="HaNoi">HÀ NỘI</option>
                    <option value="HaiDuong">HẢI DƯƠNG</option>
                    <option value="BacGiang">BẮC GIANG</option>
                    <option value="BacNinh">BẮC NINH</option>
                    <option value="HaNam">HÀ NAM</option>
                    <option value="HoaBinh">TP- HÒA BÌNH</option>
                    <option value="HungYen">HƯNG YÊN</option>
                    <option value="NamDinh">NAM ĐỊNH</option>
                    <option value="NinhBinh">TP-NINH BÌNH</option>
                    <option value="PhuTho">PHÚ THỌ</option>
                    <option value="ThaiBinh">THÁI BÌNH</option>
                    <option value="ThaiNguyen">THÁI NGUYÊN</option>
                    <option value="VinhPhuc">VĨNH PHÚC</option>
                    <option value="ThanhHoa">THANH HÓA</option>
                    <option value="QuangNinh">QUẢNG NINH</option>
                    <option value="HaiPhong">HẢI PHÒNG</option>
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
                        <p id="giapBatResult"> Số tiền</p>
                        <p id="others"></p>
                    </div>
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
                        <p id="giapBatResult"> Số tiền</p>
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
                        <th>HÀ NỘI</th>
                        <th>BA ĐÌNH</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>BẮC TỪ LIÊM</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 250k địa điểm, &gt; 1 tấn
                            250k/tấn, 50k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>CẦU GIẤY</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>ĐỐNG ĐA</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>HÀ ĐÔNG</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 250k địa điểm, &gt; 1 tấn
                            250k/tấn, 50k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>HAI BÀ TRƯNG</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>HOÀN KIẾM</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>HOÀNG MAI</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>LONG BIÊN</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>NAM TỪ LIÊM</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>TÂY HỒ</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>THANH XUÂN</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>SƠN TÂY</th>
                        <th>&lt;2 tấn, 700k/chuyến, &gt;2 tấn 350k/ tấn, 80k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>BA VÌ</th>
                        <th>&lt;2 tấn, 800k/chuyến, &gt;2 tấn 350k/ tấn, 80k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>CHƯƠNG MỸ</th>
                        <th>&lt;2 tấn, 500k/chuyến, &gt;2 tấn 250k/ tấn, 60k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>ĐAN PHƯỢNG</th>
                        <th>&lt;2 tấn, 500k/chuyến, &gt;2 tấn 250k/ tấn, 60k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>ĐÔNG ANH</th>
                        <th>&lt;2 tấn, 500k/chuyến, &gt;2 tấn 300k/ tấn, 60k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>GIA LÂM</th>
                        <th>
                            &lt;1 Tấn, &lt;5m3 250k địa điểm, &gt; 1 tấn 250k/tấn, 50k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>HOÀI ĐỨC</th>
                        <th>
                            &lt;1 Tấn, &lt;5m3 250k địa điểm, &gt; 1 tấn 250k/tấn, 60k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>MÊ LINH</th>
                        <th>
                            &lt;1 Tấn, &lt;5m3 500k địa điểm, &gt; 2 tấn 250k/tấn, 60k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>MỸ ĐỨC</th>
                        <th>&lt;2 tấn, 700k/chuyến, &gt;2 tấn 350k/ tấn, 80k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>PHÚ XUYÊN</th>
                        <th>&lt;2 tấn, 500k/chuyến, &gt;2 tấn 250k/ tấn, 60k/m2</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>QUỐC OAI</th>
                        <th>&lt;2 tấn, 500k/chuyến, &gt;2 tấn 250k/ tấn, 60k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>SÓC SƠN</th>
                        <th>&lt;2 tấn, 700k/chuyến, &gt;2 tấn 350k/ tấn, 70k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>THẠCH THẤT</th>
                        <th>&lt;2 tấn, 600k/chuyến, &gt;2 tấn 300k/ tấn, 70k/m3</th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>THANH OAI</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 250k địa điểm, &gt; 1 tấn
                            250k/tấn, 50k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>THANH TRÌ</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 200k địa điểm, &gt; 1 tấn
                            200k/tấn, 40k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>THƯỜNG TÍN</th>
                        <th>
                            Nội thành HN &lt;1 Tấn, &lt;5m3 250k địa điểm, &gt; 1 tấn
                            250k/tấn, 50k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NỘI</th>
                        <th>ỨNG HOÀ</th>
                        <th>&lt;2 tấn, 600k/chuyến, &gt;2 tấn 300k/ tấn, 70k/m3</th>
                    </tr>
                    <tr>
                        <th>HẢI DƯƠNG</th>
                        <th>HẢI DƯƠNG</th>
                        <th>&lt;2 tấn, 800k/chuyến, &gt;2 tấn 400k/ tấn, 100k/m3</th>
                    </tr>
                    <tr>
                        <th>BẮC GIANG</th>
                        <th>BẮC GIANG</th>
                        <th>
                            xe nhỏ 2 ~2,5 tấn 900k ~1.1tr /chuyến, xe lớn 400k/ tấn, 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>BẮC NINH</th>
                        <th>BẮC NINH</th>
                        <th>
                            xe nhỏ 2 ~2,5 tấn 600k/chuyến , xe lớn 300k/ tấn 80k/m3, từ 30m3
                            60k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HÀ NAM</th>
                        <th>HÀ NAM</th>
                        <th> xe nhỏ 800K/Chuyến, &gt; 2 tấn 400k/ tấn, 80k/m3</th>
                    </tr>
                    <tr>
                        <th>HÒA BÌNH</th>
                        <th>TP- HÒA BÌNH</th>
                        <th>
                            &lt; 2 tấn 1500k/chuyến, 2-4 tấn 2000k/chuyến, &gt;4 tấn 500k/
                            tấn 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HƯNG YÊN</th>
                        <th>Văn Lâm</th>
                        <th>
                            &lt;2 tấn hoặc &lt;9m3 500k/chuyến, &gt; 2 tấn 250k/tấn, 60k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>HƯNG YÊN</th>
                        <th>HƯNG YÊN</th>
                        <th>
                            &lt;2 tấn hoặc &lt;9m3 650k/chuyến, &gt; 2 tấn 300k/tấn, 80k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>NAM ĐỊNH</th>
                        <th>THÀNH PHỐ NAM ĐỊNH VÀ MỸ LỘC</th>
                        <th>
                            &lt;2 tấn hoặc &lt;9m3 1.2tr/chuyến, 3-5 tấn 450k/tấn 120k/m3,
                            &gt;5 tấn 400k/tấn 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>NAM ĐỊNH</th>
                        <th>HẢI HẬU</th>
                        <th>
                            &lt;2 tấn hoặc &lt;9m3 1.7tr/chuyến, 3-5 tấn 600k/tấn 120k/m3,
                            &gt;5 tấn 500k/tấn 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>NAM ĐỊNH</th>
                        <th>NGHĨA HƯNG</th>
                        <th>
                            &lt;2 tấn hoặc &lt;9m3 1.7tr/chuyến, 3-5 tấn 600k/tấn 120k/m3,
                            &gt;5 tấn 500k/tấn 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>NINH BÌNH</th>
                        <th>TP-NINH BÌNH</th>
                        <th>
                            &lt;10m3 1.2tr/chuyến, &gt;2 tấn hoặc &gt;10m3 500k/tấn 110k/m3,
                            &gt;10 tấn 400k/tấn 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>PHÚ THỌ</th>
                        <th>PHÚ THỌ</th>
                        <th>
                            &lt;10m3 1.2tr/chuyến, &gt;2 tấn hoặc &gt;10m3 500k/tấn 110k/m3,
                            &gt;10 tấn 400k/tấn 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>THÁI BÌNH</th>
                        <th>THÁI BÌNH</th>
                        <th>
                            &lt;2,5 tấn 1.4tr/chuyến, 2,6-10 tấn 500k/tấn 120k/m3, &gt;10
                            tấn 350k/tấn 100k/m3
                        </th>
                    </tr>
                    <tr>
                        <th>THÁI NGUYÊN</th>
                        <th>THÁI NGUYÊN</th>
                        <th>
                            &lt;2 tấn hoặc &lt;4 m3 1tr/chuyến, &gt;5m3 1.2tr/chuyến, &gt;2
                            tấn 500k/tấn
                        </th>
                    </tr>
                    <tr>
                        <th>VĨNH PHÚC</th>
                        <th>VĨNH PHÚC</th>
                        <th>&lt;2 tấn, 800k/chuyến, &gt;2 tấn 400k/ tấn, 80k/m3</th>
                    </tr>
                    <tr>
                        <th>THANH HÓA</th>
                        <th>THANH HÓA</th>
                        <th>
                            &lt;200kg: 300k/đơn, 200kg-500kg 500k/đơn, &lt;3 tấn:
                            2,1tr/chuyến, 3-&lt;4 tấn 2,3tr/ chuyến, 4-5 tấn: 550k/tấn,
                            &gt;5 tấn: 500k/tấn-{" "}
                        </th>
                    </tr>
                    <tr>
                        <th>THANH HÓA</th>
                        <th>NÔNG CỐNG</th>
                        <th>&gt;=5 tấn: 650/tấn - đi các đơn ít hơn sẽ thỏa thuận sau</th>
                    </tr>
                    <tr>
                        <th>THANH HÓA</th>
                        <th>TRIỆU SƠN</th>
                        <th>&lt;3 tấn 2400k/chuyến &gt;4 tấn 650k/tấn</th>
                    </tr>
                    <tr>
                        <th>QUẢNG NINH</th>
                        <th>QUẢNG NINH</th>
                        <th>Đơn giá thoả thuận theo từng chuyến</th>
                    </tr>
                    <tr>
                        <th>HẢI PHÒNG</th>
                        <th>HẢI PHÒNG</th>
                        <th>
                            &lt;2 tấn hoặc &lt;10m3 1.8tr/chuyến, 3-5 tấn hoặc 10-20m3
                            2.4tr/chuyến, &gt;5 tấn 500k/tấn, &gt;20m3 120k/m3
                        </th>
                    </tr>
                </tbody>
            </table>
            <p>
                <b>Ghi chú:</b> Tất cả các tỉnh không có ở danh sách trên vui lòng
                liên hệ để lại thông tin ở trang quy trình a.
            </p>
            <p>Em cảm ơn.</p>
        </div>
    );
}
