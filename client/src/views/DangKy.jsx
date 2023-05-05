import React, { useState } from 'react';
import $ from 'jquery';
import DateTimePicker from 'react-datetime-picker';
import './css/DangKy.css'
document.body.style.backgroundColor = "#f1f1f1";

function DangKy() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>Đăng ký</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.min.css" integrity="sha512-f0tzWhCwVFS3WeYaofoLWkTP62ObhewQ1EZn65oSYDZUg1+CyywGKkWzm8BxaJj5HGKI72PnMH9jYyIFz+GH7g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="form-container">
        <h1>Đăng Ký</h1>
        <form action method="POST" id="frmRegister" onsubmit="return checkPassword();">
          <label htmlFor="txtUsername">Username</label>
          <input type="text" id="txtUsername" name="username" placeholder="Nhập tài khoản" required />
          <label htmlFor="txtName">Họ và Tên</label>
          <input type="text" id="txtName" name="name" placeholder="Nhập họ tên" required />
          <label htmlFor="txtEmail">Email</label>
          <input type="email" id="txtEmail" name="email" placeholder="Nhập email" required />
          <label htmlFor="txtDOB">Ngày sinh</label>
          <input type="text" id="txtDOB" name="dob" placeholder="Nhập ngày sinh" required />
          <label htmlFor="txtPassword">Mật khẩu</label>
          <input type="password" id="txtPassword" name="rawpwd" placeholder="Nhập mật khẩu" required />
          <label htmlFor="txtConfirm">Xác nhận mật khẩu</label>
          <input type="password" id="txtConfirm" placeholder="Xác nhận mật khẩu" required />
          <label>Vai trò</label>
          <select style={{ width: '100%', padding: '12px 20px', color: '#555', marginBottom: '32px', boxSizing: 'border-box', border: '2px solid #ccc', borderRadius: '4px', fontSize: '16px' }} className="selectRole" name="role">
            <option value={0} selected>Subscriber</option>
            <option value={1}>Writer</option>
          </select>
          <div className="terms">
            Khi bấm tạo tài khoản bạn đã đồng ý với&nbsp;
            <a href="#" className="rule">quy định</a>
            &nbsp;của tòa soạn
          </div>
          <div id="password-error" className="error" />
          <button type="submit">Tạo tài khoản</button>
        </form>
      </div>
    </div>
  )
}

export default DangKy;

