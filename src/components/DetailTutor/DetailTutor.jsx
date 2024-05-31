import React from 'react';
import './DetailTutor.css';

const DetailTutor = ({ tutor, onSelectTutor, onCancel }) => {
  return (
    <div>
      <div>
        <h3>THÔNG TIN CHI TIẾT GIA SƯ</h3>
      </div>
 

      <div className="detail-tutor">
        <div className="detail-tutor-list">
          <div className="img-container">
            <img src={tutor.image} alt={tutor.name} />
          </div>

          <div className="tutor-item-info">
          <div className="info-row">
            <strong>Tên gia sư : </strong>
            <span>{tutor.name}</span>
          </div>

          <div className="info-row">
            <strong>Trường đại học : </strong>
            <span>{tutor.university}</span>
          </div>

          <div className="info-row">
            <strong>Ngành học : </strong>
            <span>{tutor.major}</span>
          </div>

          <div className="info-row">
            <strong>Năm tốt nghiệp : </strong>
            <span>{tutor.year_Of_Graduation}</span>
          </div>

          <div className="info-row">
            <strong>Nhận dạy : </strong>
            <span>{tutor.availability}</span>
          </div>

          <div className="info-row">
            <strong>Các môn học : </strong>
            <span>{tutor.subjects}</span>
          </div>

          <div className="info-row">
            <strong>Khu vực dạy : </strong>
            <span>{tutor.area}</span>
          </div>

          <div className="info-row">
            <strong>Giá dạy : </strong>
            <span>{tutor.price}</span>
          </div>

          <div className="info-row">
            <strong>Mô tả : </strong>
            <span>{tutor.description}</span>
          </div>
        </div>

          <div className="btn-container">
            <button className="select" onClick={onSelectTutor}>
              Chọn gia sư
            </button>
            <button className="cancel" onClick={onCancel}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTutor;