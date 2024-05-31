import React from 'react'
import './CourseList.css'

const CourseList = () => {

  const courses = [
    { id: 1, name: 'Khóa học 1' },
    { id: 2, name: 'Khóa học 2' },
    { id: 3, name: 'Khóa học 3' },
  ];

  return (
    <div className="course-list">
      <h2>Khóa học nổi bật</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseList
