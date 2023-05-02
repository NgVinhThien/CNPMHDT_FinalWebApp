import React from 'react'
import '../_CSS/footer.css'

export default function () {
  return (
    <footer>
        <div class="container">
            <div class="noi-dung about">
                <h2>Về Chúng Tôi</h2>
                <p>...</p>
            </div>
            <div class="noi-dung links">
                <h2>Đường Dẫn</h2>
                <ul>
                    <li><a href="#">Trang Chủ</a></li>
                    <li><a href="#">Về Chúng Tôi</a></li>
                    <li><a href="#">Thông Tin Liên Lạc</a></li>
                    <li><a href="#">Dịch Vụ</a></li>
                    <li><a href="#">Điều Kiện Chính Sách</a></li>
                </ul>
            </div>
            <div class="noi-dung contact">
                <h2>Thông Tin Liên Hệ</h2>
                <ul class="info">
                    <li>
                        <span><i class="fa fa-map-marker"></i></span>
                        <span>01 Võ Văn Ngân<br />
                        Đại học Sư phạm Kỹ Thuật<br />
                        TP Hồ Chí Minh</span>
                    </li>
                    <li>
                        <span><i class="fa fa-envelope"></i></span>
                        <p><a href="#">diachiemail@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
