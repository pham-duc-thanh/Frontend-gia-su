import React, { useState } from "react";
import "./Introduction.css";

const Introduction = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="introduction">

      {/* <div className="introduction-title">
        <h2>Giới thiệu</h2>
      </div> */}
      
      <div className="introduction-paragh">
        <p className={expanded ? 'expanded' : ''}>
          Gia sư Thành Được thành lập với sự trăn trở của những người là phụ huynh
          - học viên, đã rất gian nan trong việc tìm gia sư về dạy kèm tại nhà.
          {expanded ? (
            <>
              Nhằm đáp ứng gia sư cho các em học viên để có thành tích cao trong học
              tập và đạt kết quả cao nhất trong các kỳ thi quan trọng. Với đội ngũ
              thạc sỹ, giáo viên, sinh viên khá, giỏi từ các trường nổi tiếng, giỏi
              chuyên môn - giàu kinh nghiệm - có kỹ năng truyền đạt và tác phong sư
              phạm rất tốt, hiện đang học tập công tác trên địa bàn TPHCM, Hà Nội, Đà
              Nẵng, Bình Dương, Đồng Nai, Hải Phòng, Vũng Tàu, Long An v..v... gia sư
              Thành Được cung cấp giới thiệu gia sư chất lượng cao tại nhà cho mọi
              trình độ, mọi môn học và mọi nơi... Gia sư Thành Được thành lập với sự
              trăn trở của những người là phụ huynh - học viên, đã rất gian nan trong
              việc tìm gia sư về dạy kèm tại nhà. Nhằm đáp ứng gia sư cho các em học
              viên để có thành tích cao trong học tập và đạt kết quả cao nhất trong
              các kỳ thi quan trọng. Với đội ngũ thạc sỹ, giáo viên, sinh viên khá,
              giỏi từ các trường nổi tiếng, giỏi chuyên môn - giàu kinh nghiệm - có kỹ
              năng truyền đạt và tác phong sư phạm rất tốt, hiện đang học tập công tác
              trên địa bàn TPHCM, Hà Nội, Đà Nẵng, Bình Dương, Đồng Nai, Hải Phòng,
              Vũng Tàu, Long An v..v... gia sư Thành Được cung cấp giới thiệu gia sư
              chất lượng cao tại nhà cho mọi trình độ, mọi môn học và mọi nơi... Gia
              sư Thành Được thành lập với sự trăn trở của những người là phụ huynh -
              học viên, đã rất gian nan trong việc tìm gia sư về dạy kèm tại nhà. Nhằm
              đáp ứng gia sư cho các em học viên để có thành tích cao trong học tập và
              đạt kết quả cao nhất trong các kỳ thi quan trọng. Với đội ngũ thạc sỹ,
              giáo viên, sinh viên khá, giỏi từ các trường nổi tiếng, giỏi chuyên môn
              - giàu kinh nghiệm - có kỹ năng truyền đạt và tác phong sư phạm rất tốt,
              hiện đang học tập công tác trên địa bàn TPHCM, Hà Nội, Đà Nẵng, Bình
              Dương, Đồng Nai, Hải Phòng, Vũng Tàu, Long An v..v... gia sư Thành Được
              cung cấp giới thiệu gia sư chất lượng cao tại nhà cho mọi trình độ, mọi
              môn học và mọi nơi...
            </>
          ) : null}
        </p>
      </div>

      <button onClick={toggleExpand}>{expanded ? 'Thu gọn' : 'Xem thêm'}</button>
    </div>
  );
};

export default Introduction;