import React, { useState } from 'react';
import './Tutor.css';
import { tutor_list } from "../../assets/assets";
import DetailTutor from '../DetailTutor/DetailTutor';
import BasicTutor from '../BasicTutor/BasicTutor';

const Tutor = () => {
  const [selectedTutor, setSelectedTutor] = useState(null);

  const handleShowDetails = (tutor) => {
    setSelectedTutor(tutor);
  };

  const handleSelectTutor = () => {
    // Xử lý logic khi chọn gia sư
  };

  const handleCancel = () => {
    setSelectedTutor(null);
  };

  return (
    <div>
      {selectedTutor ? (
        <div>
          <DetailTutor
            tutor={selectedTutor}
            onSelectTutor={handleSelectTutor}
            onCancel={handleCancel}
          />
          <div>
            <BasicTutor
              tutorList={tutor_list.filter((tutor) => tutor._id !== selectedTutor._id)}
              onShowDetails={handleShowDetails}
            />
          </div>
        </div>
      ) : (
        <div>
          <BasicTutor
            tutorList={tutor_list}
            onShowDetails={handleShowDetails}
          />
        </div>
      )}
    </div>
  );
};

export default Tutor;