import React from 'react'
import './Sidebar.css'
import { BrowserRouter as Router,  Link } from 'react-router-dom'

const Sidebar = () => {
  return (


<div className="sidebar">
      <div className="sidebar-list sidebar-parents">
        <h3>PHỤ HUYNH</h3>
        <ul className="sidebar-menu">
          <li><Link to="/seachtutor">Tìm kiếm gia sư</Link></li>
          <li>Gia sư hiện có</li>
          <li>Danh sách lớp</li>
        </ul>
      </div>

      <div className="sidebar-list sidebar-tutor">
        <h3>GIA SƯ</h3>
        <ul className="sidebar-menu">
          
          <li><Link to="/registertutor">Đăng kí làm gia sư</Link></li>
          <li>Gia sư đăng nhập</li>
        </ul>
      </div>

      <div className="sidebar-list sidebar-class-tutor">
        <h3>GIA SƯ LỚP</h3>
        <ul className="sidebar-menu">
          <li>Gia sư lớp 1</li>
          <li>Gia sư lớp 2</li>
          <li>Gia sư lớp 3</li>
          <li>Gia sư lớp 4</li>
          <li>Gia sư lớp 5</li>
          <li>Gia sư lớp 6</li>
          <li>Gia sư lớp 7</li>
          <li>Gia sư lớp 8</li>
          <li>Gia sư lớp 9</li>
          <li>Gia sư lớp 10</li>
          <li>Gia sư lớp 11</li>
          <li>Gia sư lớp 12</li>
        </ul>
      </div>

      <div className="sidebar-list sidebar-class-tutor">
        <h3>GIA SƯ BỘ MÔN</h3>
        <ul className="sidebar-menu">
          <li>Gia sư dạy môn Văn</li>
          <li>Gia sư dạy môn Sử</li>
          <li>Gia sư dạy môn Địa</li>
          <li>Gia sư dạy môn Toán</li>
          <li>Gia sư dạy môn Lý</li>
          <li>Gia sư dạy môn Hoá</li>
          <li>Gia sư dạy môn Tiếng Anh</li>
          <li>Gia sư dạy môn </li>
          <li>Gia sư dạy môn</li>
          <li>Gia sư dạy môn</li>
          <li>Gia sư dạy môn</li>
          <li>Gia sư dạy môn</li>
        </ul>
      </div>
    </div>

    
  )
}

export default Sidebar