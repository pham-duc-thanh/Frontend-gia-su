import React from 'react'
import './RecommendedTutors.css'

const RecommendedTutors = () => {
  const tutors = [
    { id: 1, name: 'Gia sư 1' },
    { id: 2, name: 'Gia sư 2' },
    { id: 3, name: 'Gia sư 3' },
  ];

  return (
    <div className="recommended-tutors">
      <h2>Danh sách gia sư hàng đầu</h2>
      <ul>
        {tutors.map(tutor => (
          <li key={tutor.id}>{tutor.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecommendedTutors
