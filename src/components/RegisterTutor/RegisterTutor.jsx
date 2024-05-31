import React from "react";
import "./RegisterTutor.css";

const RegisterTutor = () => {
  return (
    <div className="register-tutor">
      <div className="register-tutor-title">
        <h3>Đăng kí làm gia sư </h3>
      </div>

      <div className="register-tutor-info">
        <form className="form-container">
          <div className="form-group">
            <div className="left">
              <label>
                Tỉnh/Thành dạy:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" name="" className="form-control" placeholder="VD: TP.Hồ Chí Minh" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Khu vực dạy:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" name="" className="form-control" placeholder="Quận, huyện của Tỉnh, TP dạy" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Họ và tên:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" name="fullName" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Giới tính:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <select>
                <option value="">Chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
              <select>
                <option value="">Chọn giọng nói</option>
                <option value="Miền Bắc">Miền Bắc</option>
                <option value="Miền Trung">Miền Trung</option>
                <option value="Miền Nam">Miền Nam</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Ngày sinh:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="date" className="form-control" placeholder="Chọn ngày sinh" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Nguyên quán:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" className="form-control" placeholder="Tỉnh/TP trên CMND" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Địa chỉ hiện tại:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Email:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="email" className="form-control" required placeholder="VD: abc123@gmail.com" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Điện thoại:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="tel" className="form-control" placeholder="012345678" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Ảnh thẻ:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="file" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Ảnh CMND mặt trước:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="file" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Ảnh CMND mặt sau:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="file" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Ảnh bằng cấp:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="file" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Sinh viên(Giáo viên) trường:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Nghành học:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Năm tốt nghiệp:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Hiện là:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <select>
                <option value="">-Trình độ-</option>
                <option value="Cử nhân sư phạm">Cử nhân sư phạm</option>
                <option value="Sinh viên sư phạm">Sinh viên sư phạm</option>
                <option value="Giáo viên">Giáo viên</option>
                <option value="Sinh viên">Sinh viên</option>
                <option value="Cử nhân">Cử nhân</option>
                <option value="Thạc sĩ">Thạc sĩ</option>
                <option value="Tiến sĩ">Tiến sĩ</option>
                <option value="Kỹ sư">Kỹ sư</option>
                <option value="Bằng khác">Bằng khác</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Ửu điểm:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <textarea
                type="text"
                rows={3}
                placeholder="VD: Có 3 năm kinh nghiệm, nhiệt tình, hỗ trợ hết mình..."
              />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Môn dạy:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <table className="table-box">
                <tbody>
                  <tr>
                    <td>
                      <label for="toan">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Toán"
                          id="toan"
                        />
                        Toán
                      </label>
                    </td>
                    <td>
                      <label for="ly">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Lý"
                          id="ly"
                        />
                        Lý
                      </label>
                    </td>
                    <td>
                      <label for="hoa ">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Hoá"
                          id="hoa"
                        />
                        Hoá
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="van">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Văn"
                          id="van"
                        />
                        Văn
                      </label>
                    </td>
                    <td>
                      <label for="su">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Sử"
                          id="su"
                        />
                        Sử
                      </label>
                    </td>
                    <td>
                      <label for="dia">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Địa"
                          id="dia"
                        />
                        Địa
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="ve">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Vẽ"
                          id="ve"
                        />
                        Vẽ
                      </label>
                    </td>
                    <td>
                      <label for="dan_nhac">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Đàn,nhạc"
                          id="dan_nhac"
                        />
                        Đàn, nhạc
                      </label>
                    </td>
                    <td>
                      <label for="tin_hoc">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Tin học"
                          id="tin_hoc"
                        />
                        Tin học
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="ren_chu_dep">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Rèn chữ đẹp"
                          id="ren_chu_dep"
                        />
                        Rèn chữ đẹp
                      </label>
                    </td>
                    <td>
                      <label for="tieng_trung">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Tiếng Trung"
                          id="tieng_trung"
                        />
                        Tiếng Trung
                      </label>
                    </td>
                    <td>
                      <label for="tieng_anh">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Tiếng Anh"
                          id="tieng_anh"
                        />
                        Tiếng Anh
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="tieng_nga">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Tiếng Nga"
                          id="tieng_nga"
                        />
                        Tiếng Nga
                      </label>
                    </td>
                    <td>
                      <label for="tieng_han">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Tiếng Hàn"
                          id="tieng_han"
                        />
                        Tiếng Hàn
                      </label>
                    </td>
                    <td>
                      <label for="tieng_duc">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Tiếng Đức"
                          id="tieng_duc"
                        />
                        Tiếng Đức
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="mon_khac">
                        <input
                          type="checkbox"
                          name="subject"
                          value="Môn khác"
                          id="mon_khac"
                        />
                        Môn khác
                      </label>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="form-group">
            <div className="left">
              <label>
                Lớp dạy:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <table class="table-box">
                <tbody>
                  <tr>
                    <td>
                      <label for="lop_la">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp lá"
                          id="lop_la"
                        />
                        Lớp lá
                      </label>
                    </td>
                    <td>
                      <label for="lop_1">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 1"
                          id="lop_1"
                        />
                        Lớp 1
                      </label>
                    </td>
                    <td>
                      <label for="lop_2">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 2"
                          id="lop_2"
                        />
                        Lớp 2
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="lop_3">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 3"
                          id="lop_3"
                        />
                        Lớp 3
                      </label>
                    </td>
                    <td>
                      <label for="lop_4">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 4"
                          id="lop_4"
                        />
                        Lớp 4
                      </label>
                    </td>
                    <td>
                      <label for="lop_5">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 5"
                          id="lop_5"
                        />
                        Lớp 5
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="lop_6">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 6"
                          id="lop_6"
                        />
                        Lớp 6
                      </label>
                    </td>
                    <td>
                      <label for="lop_7">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 7"
                          id="lop_7"
                        />
                        Lớp 7
                      </label>
                    </td>
                    <td>
                      <label for="lop_8">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 8"
                          id="lop_8"
                        />
                        Lớp 8
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="lop_9">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 9"
                          id="lop_9"
                        />
                        Lớp 9
                      </label>
                    </td>
                    <td>
                      <label for="lop_10">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 10"
                          id="lop_10"
                        />
                        Lớp 10
                      </label>
                    </td>
                    <td>
                      <label for="lop_11">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 11"
                          id="lop_11"
                        />
                        Lớp 11
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="lop_12">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp 12"
                          id="lop_12"
                        />
                        Lớp 12
                      </label>
                    </td>
                    <td>
                      <label for="luyen_thi_dai_hoc">
                        <input
                          type="checkbox"
                          name="class"
                          value="Luyện thi đại học"
                          id="luyen_thi_dai_hoc"
                        />
                        Luyện thi đại học
                      </label>
                    </td>
                    <td>
                      <label for="lop_nang_khieu">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp năng khiếu"
                          id="lop_nang_khieu"
                        />
                        Lớp năng khiếu
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="lop_ngoai_ngu">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp ngoại ngữ"
                          id="lop_ngoai_ngu"
                        />
                        Lớp ngoại ngữ
                      </label>
                    </td>
                    <td>
                      <label for="he_dai_hoc">
                        <input
                          type="checkbox"
                          name="class"
                          value="Hệ đại học"
                          id="he_dai_hoc"
                        />
                        Hệ đại học
                      </label>
                    </td>
                    <td>
                      <label for="lop_khac">
                        <input
                          type="checkbox"
                          name="class"
                          value="Lớp khác"
                          id="lop_khac"
                        />
                        Lớp khác
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Thời gian dạy:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <table className="table-box">
                <tbody>
                  <tr>
                    <td>
                      <label for="2S">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="2S"
                          id="2S"
                        />
                        Thứ 2 - Sáng
                      </label>
                    </td>
                    <td>
                      <label for="2C">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="2C"
                          id="2C"
                        />
                        Thứ 2 - Chiều
                      </label>
                    </td>
                    <td>
                      <label for="2T">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="2T"
                          id="2T"
                        />
                        Thứ 2 - Tối
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="3S">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="2S"
                          id="2S"
                        />
                        Thứ 3 - Sáng
                      </label>
                    </td>
                    <td>
                      <label for="3C">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="3C"
                          id="3C"
                        />
                        Thứ 3 - Chiều
                      </label>
                    </td>
                    <td>
                      <label for="3T">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="3T"
                          id="3T"
                        />
                        Thứ 3 - Tối
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="4S">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="4S"
                          id="4S"
                        />
                        Thứ 4 - Sáng
                      </label>
                    </td>
                    <td>
                      <label for="4C">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="4C"
                          id="4C"
                        />
                        Thứ 4 - Chiều
                      </label>
                    </td>
                    <td>
                      <label for="4T">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="4T"
                          id="4T"
                        />
                        Thứ 4 - Tối
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="5S">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="5S"
                          id="5S"
                        />
                        Thứ 5 - Sáng
                      </label>
                    </td>
                    <td>
                      <label for="5C">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="5C"
                          id="5C"
                        />
                        Thứ 5 - Chiều
                      </label>
                    </td>
                    <td>
                      <label for="5T">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="5T"
                          id="5T"
                        />
                        Thứ 5 - Tối
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="6S">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="6S"
                          id="6S"
                        />
                        Thứ 6 - Sáng
                      </label>
                    </td>
                    <td>
                      <label for="6C">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="6C"
                          id="6C"
                        />
                        Thứ 6 - Chiều
                      </label>
                    </td>
                    <td>
                      <label for="6T">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="6T"
                          id="6T"
                        />
                        Thứ 6 - Tối
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="7S">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="7S"
                          id="7S"
                        />
                        Thứ 7 - Sáng
                      </label>
                    </td>
                    <td>
                      <label for="7C">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="7C"
                          id="7C"
                        />
                        Thứ 7 - Chiều
                      </label>
                    </td>
                    <td>
                      <label for="7T">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="7T"
                          id="7T"
                        />
                        Thứ 7 - Tối
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="CNS">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="CNS"
                          id="CNS"
                        />
                        CN - Sáng
                      </label>
                    </td>
                    <td>
                      <label for="CNC">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="CNC"
                          id="CNC"
                        />
                        CN - Chiều
                      </label>
                    </td>
                    <td>
                      <label for="CNT">
                        <input
                          type="checkbox"
                          name="thoigianday"
                          value="CNT"
                          id="CNT"
                        />
                        CN - Tối
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Mức lương yêu cầu:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input type="text" className="form-control" name="" id="" />
              <p>đồng/buổi</p>
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Yêu cầu khác:
                {/* <span>*</span> */}

              </label>
            </div>
            <div className="right">
              <textarea name="" id="" rows="3"></textarea>
            </div>
          </div>

          <div className="form-group">
            <div className="left">
            </div>
            <div className="right">
              <button>Đăng kí</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterTutor;
