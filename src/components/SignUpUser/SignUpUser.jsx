import React, { useEffect, useState } from "react";
import "./SignUpUser.css";
import { IoCloseOutline, IoEyeOffSharp, IoEyeOutline } from "react-icons/io5";

const SignUpUser = ({ setIsSignUpUser }) => {
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
    <div className="signup-user">
      <form className="signup-user-container" onSubmit={onSubmit}>
        <div className="signup-title">
          <h2>Đăng kí</h2>
          {/* <img onClick={()=> setShowLogin(false)} src={closeIcon} alt="" /> */}

          <span onClick={() => setIsSignUpUser(false)}>
            <IoCloseOutline className="icon-close" />
          </span>
        </div>

        <div className="signup-inputs">
          <input
            type="text"
            name="fullname"
            onChange={onChangeHandler}
            value={data.fullname}
            placeholder="Tên của bạn..."
            required
          />
           <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email của bạn..."
            required
          />

          {/* <input
            type="text"
            name="username"
            onChange={onChangeHandler}
            value={data.username}
            placeholder="Tên tài khoản của bạn..."
            required
          />

          <input
            type="tel"
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            placeholder="Số điện thoại của bạn..."
            required
          /> */}
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

          <div className="signup-button-container">
            <button>Đăng kí</button>
            <div className="signup-condition">
              <input type="checkbox" required />
              <p>
                Bằng cách tiếp tục, tôi đồng ý với các điều khoản sử dụng và
                chính sách quyền riêng tư.
              </p>
            </div>

            <p className="parah">
             Đã có tài khoản? <span>Đăng nhập</span> {""}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpUser;
