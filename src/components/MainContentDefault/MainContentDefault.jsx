import React from 'react'
import './MainContentDefault.css'
import Introduction from '../Introduction/Introduction'
import TuitionPriceList from '../TuitionPriceList/TuitionPriceList'
import Tutor from '../Tutor/Tutor'

const MainContentDefault = () => {
  return (
    <div className='content-default'>
      <div className='content-default-item'>
        <h3>GIỚI THIỆU</h3>
        <Introduction/>
      </div>

      <div className='content-default-item'>
        <Tutor/>
      </div>
      
      <div className='content-default-item'>
        <h3>BẢNG HỌC PHÍ THAM KHẢO</h3>
        <TuitionPriceList/>
      </div>
    </div>
  )
}

export default MainContentDefault
