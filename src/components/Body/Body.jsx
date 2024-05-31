import React from 'react'
import './Body.css'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'

const Body = () => {
  return (
    <div className='body'>
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default Body