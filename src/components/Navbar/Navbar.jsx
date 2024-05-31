import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import LoginUser from "../LoginUser/LoginUser";
import SignUpUser from "../SignUpUser/SignUpUser";

const Navbar = ({isLoginUser,setIsLoginUser,isSignUpUser, setIsSignUpUser}) => {
  const [menu, setMenu] = useState("home");



  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            TRANG CHỦ
          </Link>
        </li>
        <li
          onClick={() => setMenu("user")}
          className={menu === "user" ? "active" : ""}
        >
          PHỤ HUYNH
          <div className="submenu">
            <ul>
              <li>
                <Link to="/seachtutor">Đăng kí tìm kiếm gia sư</Link>
              </li>
              <li>
                <Link to="/tutor">Gia sư hiện có</Link>
              </li>
              <li>Học phí tham khảo</li>
            </ul>
          </div>
        </li>
        <li
          onClick={() => setMenu("tutor")}
          className={menu === "tutor" ? "active" : ""}
        >
          GIA SƯ
        </li>
        <li
          onClick={() => setMenu("payment")}
          className={menu === "payment" ? "active" : ""}
        >
          THANH TOÁN
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          LIÊN HỆ
        </li>
      </ul>

      <div className="navbar-right">
        <button onClick={() => setIsSignUpUser(true)}>ĐĂNG KÍ</button>
        <button onClick={() => setIsLoginUser(true)}>ĐĂNG NHẬP</button>
      </div>

      {isLoginUser && <LoginUser setIsLoginUser={setIsLoginUser} />}
      {isSignUpUser && <SignUpUser setIsSignUpUser={setIsSignUpUser} />}
    </div>
  );
};

export default Navbar;
