import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-datetimepicker';
import 'jquery-datetimepicker/build/jquery.datetimepicker.min.css';
import './css/DangKy.css'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    $.getJSON(`/Account/IsAvailable?user=${username}`, function (data) {
      if (data === true) {
        $('#frmRegister').off('submit').submit();
      } else {
        alert('Tên tài khoản đã được sử dụng');
      }
    });
  };

  const handleDateChange = () => {
    $('#txtDOB').datetimepicker({
      format: 'd/m/Y',
      timepicker: false,
      mask: true
    });
  };

  const handleSelect = (event) => {
    console.log(event.target.value);
  };

  const handleFormSubmit = () => {
    if (password !== confirmPassword) {
      setErrorMessage('The password and confirm password fields do not match');
      return false;
    } else {
      setErrorMessage('');
      return true;
    }
  };

  return (
    <div className="form-container">
      <h1>Đăng Ký</h1>
      <form id="frmRegister" onSubmit={handleSubmit}>
        <label htmlFor="txtUsername">Username</label>
        <input type="text" id="txtUsername" name="username" placeholder="Nhập tài khoản" value={username} onChange={handleUsernameChange} required />
        <label htmlFor="txtName">Họ và Tên</label>
        <input type="text" id="txtName" name="name" placeholder="Nhập họ tên" required />
        <label htmlFor="txtEmail">Email</label>
        <input type="email" id="txtEmail" name="email" placeholder="Nhập email" required />
        <label htmlFor="txtDOB">Ngày sinh</label>
        <input type="text" id="txtDOB" name="dob" placeholder="Nhập ngày sinh" onChange={handleDateChange} required />
        <label htmlFor="txtPassword">Mật khẩu</label>
        <input type="password" id="txtPassword" name="rawpwd" placeholder="Nhập mật khẩu" value={password} onChange={handlePasswordChange} required />
        <label htmlFor="txtConfirm">Xác nhận mật khẩu</label>
        <input type="password" id="txtConfirm" placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        <label>Vai trò</label>
        <select style={{
          width: '100%',
          padding: '12px 20px',
          color: '#555',
          marginBottom: '32px',
          boxSizing: 'border-box',
          border: '2px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px'
        }} className="selectRole" name="role" onChange={handleSelect}>
          <option value="0" selected>Subscriber</option>
          <option value="1">Writer</option>
            </select>
            <div className="terms">
              Khi bấm tạo tài khoản bạn đã đồng ý với
              <a href="#" className="rule">
                quy định
              </a>
              của tòa soạn
            </div>
            <div id="password-error" className="error"></div>
            <button type="submit" onClick={handleFormSubmit}>Tạo tài khoản</button>
          </form>
        </div>
        
    );
}

export default Login;

