import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <h2>TRUNG TÂM GIA SƯ ANH HOÀNG</h2>
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-column">
            <a href="link-to-location">
              <IoLocationSharp className="icon" />
            </a>
            <h4>Địa chỉ: </h4>
            <p>123 Đường ABC, Phường XYZ, Thành phố ABC</p>
          </div>
          <div className="footer-column">
            <a href="mailto:example@example.com">
              <MdEmail className="icon" />
            </a>
            <h4>Email: </h4>
            <p>
              <a href="mailto:example@example.com">example@example.com</a>
            </p>
          </div>
          <div className="footer-column">
            <a href="tel:0123-456-789">
              <FaPhoneAlt className="icon" />
            </a>
            <h4>Số điện thoại: </h4>
            <p>0123-456-789</p>
          </div>
          <div className="footer-column">
            <a href="http://www.example.com">
              <FaGlobe className="icon" />
            </a>
            <h4>Website: </h4>
            <p>
              <a href="http://www.example.com">www.example.com</a>
            </p>
          </div>
        </div>

        <div className="footer-content-center">
          <ul className="">
            <li>TRANG CHỦ</li>
            <li>GIỚI THIỆU</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <p>Kết nối với chúng tôi</p>
          <div className="footer-social-icons">
            <a href="" target="blank_">
              <FaFacebook />
            </a>
            <a href="" target="blank_">
              <FaTwitter />
            </a>
            <a href="" target="blank_">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-coryrignht">Coryright 2024 by Gia sư Anh Hoàng.</p>
    </div>
  );
};

export default Footer;
