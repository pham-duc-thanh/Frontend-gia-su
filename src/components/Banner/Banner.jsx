import React, { useState, useEffect } from 'react';
import './Banner.css';
import images1 from "../../assets/images1.png"
import images2 from "../../assets/images2.png"
import images3 from "../../assets/images3.png"

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [images1, images2, images3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="banner">

      <div className='banner-left'>
        
      </div>
      
      <div className='banner-between'>
        <img src={images[currentImage]} alt="Banner" className="banner-image" />
        <div className="banner-content">
          <h1>Gia sư Anh Hoàng</h1>
          <p>
            Gia sư Anh Hoàng là một trong những gia sư hàng đầu, chuyên về các khóa học đa dạng. Với kinh
            nghiệm lâu năm và phương pháp giảng dạy hiệu quả, Anh Hoàng đã giúp nhiều học sinh đạt được
            thành tích cao.
          </p>
        </div>

        <div className='banner-right'>

        </div>
      </div>
    </div>
  );
}

export default Banner;