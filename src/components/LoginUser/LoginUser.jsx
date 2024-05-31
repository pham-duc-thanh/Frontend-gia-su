import React, { useEffect, useState } from "react";
import "./LoginUser.css";
import { IoCloseOutline, IoEyeOffSharp, IoEyeOutline } from "react-icons/io5";

const LoginUser = ({ setIsLoginUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    fullname: "",
    password: "",
    email: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log("data...", data);
  }, [data]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-user">
      <form className="login-container" onSubmit={onSubmit}>
        <div className="login-title">
          <h2>Đăng nhập</h2>
          {/* <img onClick={()=> setShowLogin(false)} src={closeIcon} alt="" /> */}

          <span onClick={() => setIsLoginUser(false)}>
            <IoCloseOutline className="icon-close" />
          </span>
        </div>

        <div className="login-inputs">
          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email của bạn..."
            required
          />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              placeholder="Mật khẩu..."
              required
            />
            {showPassword ? (
              <IoEyeOutline
                className="password-icon"
                onClick={toggleShowPassword}
              />
            ) : (
              <IoEyeOffSharp
                className="password-icon"
                onClick={toggleShowPassword}
              />
            )}
          </div>

          <div className="login-button-container">
            <button>Đăng nhập</button>
            <div className="login-condition">
              <input type="checkbox" required />
              <p>
                Bằng cách tiếp tục, tôi đồng ý với các điều khoản sử dụng và
                chính sách quyền riêng tư.
              </p>
            </div>

            <p className="parah">
              Tạo tài khoản mới? <span>Đăng kí</span> {""}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
