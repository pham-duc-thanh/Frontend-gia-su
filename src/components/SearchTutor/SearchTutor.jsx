import React, { useEffect, useState } from "react";
import "./SearchTutor.css";
import TuitionPriceList from "../TuitionPriceList/TuitionPriceList";

const SearchTutor = () => {
  const [data, setData] = useState({
    fullname: "",
    address: "",
    phone: "",
    email: "",
    additional_requirements: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log("data...", data);
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-tutor">
      <div className="search-tutor-title">
        <h3>Tìm kiếm gia sư</h3>
      </div>

      <div className="search-tutor-info">
        <form onSubmit={onSubmit} className="form-container">
          <div className="form-group">
            <div className="left">
              <label>
                Họ và tên phụ huynh:
                <span>*</span>
              </label>
            </div>
            
            <div className="right">
              <input
                onChange={onChangeHandler}
                value={data.fullname}
                type="text"
                name="fullname"
                required
                placeholder=""
              />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Địa chỉ:
                <span>*</span>
              </label>
            </div>
            <div className="right">
              <input
                onChange={onChangeHandler}
                value={data.address}
                type="text"
                name="address"
                required
                placeholder=""
              />
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
              <input
                onChange={onChangeHandler}
                value={data.phone}
                type="tel"
                name="phone"
                required
                placeholder=""
              />
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
              <input
                onChange={onChangeHandler}
                value={data.email}
                type="email"
                name="email"
                required
                placeholder=""
              />
            </div>
          </div>
          <div className="form-group">
            <div className="left">
              <label>
                Yêu cầu khác:
                <span></span>
              </label>
            </div>
            <div className="right">
              <textarea
                onChange={onChangeHandler}
                value={data.additional_requirements}
                type="text"
                rows={3}
                name="additional_requirements"
                required
                placeholder=""
              />
            </div>
          </div>

          <div className="form-group">
            <div className="left">

            </div>
            <div className="right">
              <button type="submit">Đăng kí</button>
            </div>
          </div>
        </form>
      </div>

      <TuitionPriceList />
    </div>
  );
};

export default SearchTutor;
