import React from 'react'
import './RecommendedCourses.css'

const RecommendedCourses = () => {
  const courses = [
    { id: 1, name: 'Khóa học đề xuất 1' },
    { id: 2, name: 'Khóa học đề xuất 2' },
    { id: 3, name: 'Khóa học đề xuất 3' },
  ];

  return (
    <div className="recommended-courses">
      <h2>Các khóa học đề xuất</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RecommendedCourses
