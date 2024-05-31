import React from 'react'
import './Content.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import MainContentDefault from '../MainContentDefault/MainContentDefault'
import SearchTutor from '../SearchTutor/SearchTutor'
import RegisterTutor from '../RegisterTutor/RegisterTutor'
import BasicTutor from '../BasicTutor/BasicTutor'
import Tutor from '../Tutor/Tutor'
import LoginUser from '../LoginUser/LoginUser'


const Content = () => {
  return (

    <div className='content'>
  
        <Routes>
          <Route path='/' element={<MainContentDefault/>}/>
          <Route path='/seachtutor' element={<SearchTutor/>}/>
          <Route path='/registertutor' element={<RegisterTutor/>}/>
          <Route path='/tutor' element={<Tutor/>}/>
          <Route path='/loginuser' element={<LoginUser/>}/>



        </Routes>

    </div>
  )
}

export default Content
