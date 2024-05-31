import React, { useState } from 'react';
import './BasicTutor.css';

const BasicTutor = ({ tutorList, onShowDetails }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentItems = tutorList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(tutorList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div>
      <div>
        <h3>GIA SƯ HIỆN CÓ</h3>
      </div>

      <div className="basic-tutor">
        {currentItems.map((tutor, index) => (
          <div className="basic-tutor-list" key={index}>
            <div className="img-container">
              <img src={tutor.image} alt={tutor.name} />
            </div>
            <div className="tutor-item-info">
              <div className="info-row">
                <strong>Tên gia sư: </strong>
                <span>{tutor.name}</span>
              </div>

              <div className="info-row">
                <strong>Ngày sinh: </strong>
                <span>{tutor.year_Of_Birth}</span>
              </div>

              <div className="info-row">
                <strong>Công việc hiện tại: </strong>
                <span>{tutor.current_Job}</span>
              </div>
            </div>

            <div className="btn-container">
              <button onClick={() => onShowDetails(tutor)}>Xem chi tiết</button>
            </div>
          </div>
        ))}
      </div>
      
      <nav className="pagination-container">
        <ul className="pagination-container-list">
          <li className="pagination-container-item">
            <button className="pagination-container-link" onClick={prePage}>
              Prev
            </button>
          </li>
          {numbers.map((n, i) => {
            const pageItemClass = `pagination-container-item ${
              currentPage === n ? "active" : ""
            }`;

            return (
              <li className={pageItemClass} key={i}>
                <button
                  className="pagination-container-link"
                  onClick={() => changePage(n)}
                >
                  {n}
                </button>
              </li>
            );
          })}
          <li className="pagination-container-item">
            <button className="pagination-container-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default BasicTutor;