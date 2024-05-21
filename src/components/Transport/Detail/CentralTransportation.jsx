import React from 'react'

export default function CentralTransportation() {
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
                <h2>Dịch vụ vận chuyển</h2>
                <div className="breadcrumb_redirect">
                    <a href="/">Trang chủ</a>
                    <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
                    <span>Bảng giá</span>
                    <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
                    <span>Vận Chuyển Hàng miền Trung</span>
                </div>
            </div>
            <main>
                <div className="container">
                    Đơn giá thỏa thuận theo từng chuyến. Anh/chị vui lòng liên hệ để biết thêm chi tiết.
                </div>
            </main>
        </div>
    )
}
