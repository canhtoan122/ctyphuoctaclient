import React, { useState } from 'react'
import './Transport.css'
import logo from "../../images/logo.jpg"

export default function Transport() {
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
    return (
        <div>
            <div className="breadcrumb">
                <h2>Bảng giá</h2>
                <div className="breadcrumb_redirect">
                    <a href="/">Trang chủ</a>
                    <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
                    <span>Bảng Giá</span>
                </div>
            </div>
            <main>
                <div className="container">
                    <ul className="service_list">
                        <li className="service_list_item">
                            <div className="service_list_item_image">
                                <img src={logo} alt="" />
                            </div>
                            <a href="stationToStation">Vận Chuyển Hàng Từ ga Sài Gòn tới ga hà Nội</a>
                            <p>
                                Đối với vận chuyển từ ga Sài Gòn tới ga Hà Nội và ngược lại. Vận tải Phước Tá chỉ tính phí
                                đường sắt từ ga Sóng Thần tới ga Giáp Bát và có thể có tiền phụ thu.
                            </p>
                        </li>
                        <li className="service_list_item">
                            <div className="service_list_item_image">
                                <img src={logo} alt="" />
                            </div>
                            <a href="warehouseToWarehouse">Vận Chuyển Hàng Từ kho Sài Gòn tới kho Hà Nội</a>
                            <p>
                                Đối với vận chuyển từ kho Sài Gòn tới kho Hà Nội và ngược lại. Phí vận chuyển gồm
                                tiền ô tô lấy hàng từ kho của khách đến ga Sóng Thần + Tiền đường sắt + tiền ô tô
                                vận chuyển từ ga Giáp Bát đến kho của khách + tiền phụ thu (nếu có).
                            </p>
                        </li>
                        <li className="service_list_item">
                            <div className="service_list_item_image">
                                <img src={logo} alt="" />
                            </div>
                            <a href="HCMToGB">Vận Chuyển Hàng Từ kho Sài Gòn tới ga Giáp Bát</a>
                            <p>
                                Đối với vận chuyển từ kho Sài Gòn đến ga Giáp Bát. Phí
                                vận chuyển gồm phí vận chuyển từ kho của khách đến ga Sóng Thần + tiền đường sắt.
                            </p>
                        </li>
                        <li className="service_list_item">
                            <div className="service_list_item_image">
                                <img src={logo} alt="" />
                            </div>
                            <a href="HNToHCM">Vận Chuyển Hàng Từ kho Hà Nội tới ga Sóng Thần</a>
                            <p>
                                Đối với vận chuyển từ ga Sóng Thần đến kho Hà Nội. Phí
                                vận chuyển gồm tiền đường sắt + tiền ô tô vận chuyển từ ga Giáp Bát đến kho Hà Nội.
                            </p>
                        </li>
                        <li className="service_list_item">
                            <div className="service_list_item_image">
                                <img src={logo} alt="" />
                            </div>
                            <a href="HCMTransportation">Vận Chuyển Hàng Từ kho Sài Gòn tới các tỉnh thành miền nam</a>
                            <p>
                                Đối với vận chuyển từ kho Sài Gòn đến các tỉnh miền nam. Phí
                                vận chuyển gồm phí vận chuyển từ kho của khách đến địa chỉ cần giao.
                            </p>
                        </li>
                        <li className="service_list_item">
                            <div className="service_list_item_image">
                                <img src={logo} alt="" />
                            </div>
                            <a href="HNTransportation">Vận Chuyển Hàng Từ kho Hà Nội tới các tỉnh thành miền Bắc</a>
                            <p>
                                Đối với vận chuyển từ kho Hà Nội đến các tỉnh miền bắc. Phí
                                vận chuyển gồm phí vận chuyển từ kho của khách đến địa chỉ cần giao.
                            </p>
                        </li>
                        <li className="service_list_item">
                            <div className="service_list_item_image">
                                <img src={logo} alt="" />
                            </div>
                            <a href="CentralTransportation">Vận Chuyển Hàng miền Trung</a>
                            <p>
                                Đối với vận chuyển miền Trung thì chỉ nhận vận chuyển Đà Nẵng với Vinh và để biết cụ thể hơn thì hãy click vào đây.
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
