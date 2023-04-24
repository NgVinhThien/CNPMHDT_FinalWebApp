import React from "react";
import './css/DangNhap.css'


function Login(props) {
  const hasError = props.hasError;
  const errorMessage = props.errorMessage;

  return (
    <div className="login-container">
      <h1>Đăng nhập</h1>
      {hasError && (
        <div className="alert" role="alert">
          <strong>Login failed!</strong> {errorMessage}
        </div>
      )}
      <form action="" method="POST" id="frmLogin">
        <div className="form-group">
          <label htmlFor="txtUsername">Tài khoản</label>
          <input type="text" id="txtUsername" name="username" placeholder="Nhập tài khoản" required />
        </div>
        <div className="form-group">
          <label htmlFor="txtPassword">Mật khẩu</label>
          <input type="password" id="txtPassword" name="password" placeholder="Nhập mật khẩu" required />
        </div>
        <div className="forgot_change-password">
          {/* Phần quên mật khẩu */}
          <div className="form-group">
            <a href="#" className="forgot-password">Quên mật khẩu</a>
          </div>
          {/* Phần đổi mật khẩu */}
          <div className="form-group">
            <a href="#" className="forgot-password">Đổi mật khẩu</a>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Đăng nhập
        </button>

        <div className="form-group">
          <a href={`${props.contextPath}/Account/DangKy`} className="signup-link">
            Chưa có tài khoản? Đăng ký ngay
          </a>
        </div>
        <div className="or-separator">
          <span>hoặc</span>
        </div>
        <button className="btnn facebook" data-provider="facebook">
          <i className="fab fa-facebook-f"></i>
          <span>Đăng nhập bằng Facebook</span>
        </button>
        <button className="btnn google" data-provider="google">
          <i className="fab fa-google"></i>
          <span>Đăng nhập bằng Google</span>
        </button>
      </form>
    </div>
  );
}

export default Login;
