import React from 'react'

export default function Service_Detail() {
    let menu = document.querySelectorAll('.header_menu a');
    menu.forEach(item => {
        // Remove the 'active' class from all anchor elements
        item.classList.remove('active');

        // Check if the href attribute of the anchor element is equal to "start"
        if (item.getAttribute('href') === 'service') {
            // Add the 'active' class to the anchor element with href "start"
            item.classList.add('active');
        }
    });
    return (
        <div>
            <div class="breadcrumb">
                <h2>Dịch vụ vận chuyển</h2>
                <div class="breadcrumb_redirect">
                    <a href="/">Trang chủ</a>
                    <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
                    <span>Dịch vụ vận chuyển</span>
                    <span><iconify-icon icon="icon-park-outline:right"></iconify-icon></span>
                    <span>Vận Chuyển Hàng Từ Ga tới Ga</span>
                </div>
            </div>
            <main>
                <div class="container">
                    <div class="service_detail">
                        <h1>Vận Chuyển Hàng Từ Ga tới Ga</h1>
                        <p>Chúng tôi là công ty chuyên nhận vận chuyển hàng hóa hai chiều bằng xe tải từ các tỉnh Miền Nam đi Hà Nội
                            và các tỉnh
                            lân cận, và nhận hàng từ Hà Nội về ngược lại.</p>
                        <ul class="service_detail_list">
                            <li>-Vận chuyển hàng lẻ, giao nhận hàng tận nơi</li>
                            <li>-Vận chuyển hàng công ty, hàng nhập khẩu</li>
                            <li>-Cho thuê xe tải vận chuyển hàng đi Hà Nội</li>
                            <li>-Vận chuyển hàng quảng cáo, hàng sự kiện</li>
                            <li>-Vận chuyển hàng siêu trường, siêu trọng</li>
                            <li>-Vận chuyển xe nâng, xe đào, máy công cụ, tổ máy xây dựng</li>
                        </ul>
                        <h2>Lợi Ích Khi Chọn Dịch Vụ Vận Chuyển Hàng Của Phước Tá</h2>
                        <ul class="service_detail_list">
                            <li>-Giá cả là yếu tố chúng tôi cạnh tranh nhất, giá cả chúng tôi luôn ổn định trong thời gian dài</li>
                            <li>-Có lịch xe chạy liên tỉnh mỗi ngày, hàng hóa sẽ không bị lưu tại kho, hay trễ hẹn giao hàng</li>
                            <li>-Có đội xe số lượng lớn đảm bảo đáp ứng tối đa nhu cầu vận chuyển hàng hóa của quý khách hàng, luôn
                                đáp ứng kịp thời khi
                                khách hàng có nhu cầu,</li>
                            <li>-Có hợp đồng vận chuyển, hóa đơn, biên nhận vận chuyển rỏ ràng, chính xác, đầy đủ</li>
                            <li>-Chúng tôi chịu hoàn toàn trách nhiệm khi hàng hóa xảy ra hư hỏng, mất mát, hoặc xe giao hàng chậm
                                trễ</li>
                            <li>-Đội ngũ nhân viên luôn thân thiện, hợp tác và làm việc hết mình vì khách hàng.</li>
                            <li>-Có đội ngũ kỹ thuật kháo sát hàng hóa, tư vấn phương pháp vận chuyển kỹ lưởng, đảm bảo chi phí vận
                                chuyển thấp nhất</li>
                            <li>-Có đội bốc xếp, đóng gói, gia cố hàng hóa trước khi hàng lên xe, đảm bảo hàng hóa được an toàn
                                nhất, sẽ không có trường
                                hợp hàng bị móp mép, ẩm ướt, rách bao bì..</li>
                        </ul>
                        <h2>Thủ Tục Cần Biết Khi Vận Chuyển Hàng Đi Hà Nội</h2>
                        <p>Nếu bạn gửi hàng lẻ, hàng ghép sản xuất trong nước muốn vận chuyển hàng đi Hà Nội thì cần có: hóa đơn
                            GTGT, tem nhãn
                            hàng hóa, phiếu xuất kho. Đối với hàng nguyên xe , nguyên chuyến thì bạn phải có thêm Lệnh Điều Động.
                            Trong trường hợp
                            hàng hóa của bạn là hàng chưa thành phẩm hoặc hàng chuyển cho chính nhanh, đại lý bán lẻ chưa có hóa đơn
                            thì bạn phải có
                            Phiếu Xuất Kho Kiêm Vận Chuyển Nội Bộ đi kèm,</p>
                        <p>Nếu hàng của bạn là hàng Nhập Khẩu, hàng tạm nhập tái xuất: Tờ khai Hải Quan, Hóa Đơn GTGT, Tem nhãn phụ
                            hàng hóa (
                            Tiếng Việt), Nếu bạn yêu cầu đi nguyên chuyến đối với hàng nhập khẩu thì cũng phải bổ sung đầy đủ thử
                            tục giống hàng
                            trong nước</p>
                        <p>Trường hợp hóa đơn, giấy tờ đi kèm có giá trị cao, dễ mắt mát, bạn có thể photo và đóng dấu treo gửi kèm
                            theo hàng hóa,
                            tuy nhiên hình thức này hiện tại chỉ một số cơ quan quản lý thị trường chấp nhận, còn lại vẫn phải làm
                            đúng thủ tục hành
                            chính khi vận chuyển hàng đi Hà Nội</p>
                        <h2>Các Dịch Vụ Khác:</h2>
                        <ul class="service_detail_list">
                            <li>– Vận chuyển hàng đi Hà Nội hàng ghép, hàng lẻ</li>
                            <li>– Vận chuyển hàng đi Hà Nội ưu tiên</li>
                            <li>– Vận chuyển hàng đi Hà Nội nguyên chuyến</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
