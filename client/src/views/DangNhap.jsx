import react from 'react';
import './css/DangNhap.css'
document.body.style.backgroundColor = "#f1f1f1";

function DangNhap() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Đăng nhập</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossOrigin="anonymous" />
      <div className="login-container">
        <h1>Đăng nhập</h1>
        {/* <c:if test="${hasError}">
          <div className="alert" role="alert">
            <strong>Login failed!</strong> ${'{'}errorMessage{'}'}
          </div>
        </c:if> */}
        <form action method="POST" id="frmLogin">
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
          <button type="submit" className="btn-primary">Đăng nhập</button>
          <div className="form-group">
            <a href="#" className="signup-link">Chưa có tài khoản? Đăng ký ngay</a>
          </div>
          <div className="or-separator">
            <span>hoặc</span>
          </div>
          <button className="btnn facebook" data-provider="facebook"><i className="fab fa-facebook-f" /><span>Đăng nhập bằng Facebook</span></button>
          <button className="btnn google" data-provider="google"><i className="fab fa-google" /><span>Đăng nhập bằng Google</span></button>
        </form>
      </div>
    </div>
  );
}

export default DangNhap;