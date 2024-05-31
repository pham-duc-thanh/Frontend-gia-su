import React from "react";
import "./TuitionPriceList.css";

const TuitionPriceList = () => {
  const tuitionData = [
    {
      title: "BẢNG HỌC PHÍ 2 BUỔI 1 TUẦN VÀ 3 BUỔI 1 TUẦN",
      rows: [
        { class: "Lớp 1,2,3,4,5", student: "1.000-1.200", teacher: "1.800-2.000" },
        { class: "Lớp 6,7,8,9", student: "1.200-1.400", teacher: "2.000-2.200" },
        { class: "Lớp 10,11,12", student: "1.400-1.600", teacher: "2.200-2.400" },
        { class: "LTĐH-NGOẠI NGỮ", student: "1.600-1.800", teacher: "2.400-2.600" },
      ],
    },
    {
      title: "BẢNG HỌC PHÍ 4 BUỔI 1 TUẦN VÀ 5 BUỔI 1 TUẦN",
      rows: [
        { class: "Lớp 1,2,3,4,5", student: "2.000-2.200", teacher: "3.400-3.600" },
        { class: "Lớp 6,7,8,9", student: "2.400-2.600", teacher: "4.000-4.400" },
        { class: "Lớp 10,11,12", student: "2.800-3.200", teacher: "4.600-4.800" },
        { class: "LTĐH-NGOẠI NGỮ", student: "3.000-3.200", teacher: "4.800-5000" },
      ],
    },
  ];

  return (
    <div className="tuition-price-list">
      {/* <div className="tuition-price-list-title">
        <h2>Bảng học phí tham khảo</h2>
      </div> */}

      <div className="tuition-price-list-body">
        {tuitionData.map((item, index) => (
          <div className="table-list" key={index}>
            <p>{item.title}</p>
            <table>
              <tbody>
                <tr style={{ backgroundColor: "rgb(234, 249, 255)" }}>
                  <td rowspan="2">Khối lớp</td>
                  <td colspan="2">2 buổi 1 tuần</td>
                  <td colspan="2">3 buổi 1 tuần</td>
                </tr>
                <tr>
                  <td>Sinh viên</td>
                  <td>Giáo viên</td>
                  <td>Sinh viên</td>
                  <td>Giáo viên</td>
                </tr>
                {item.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.class}</td>
                    <td>{row.student}</td>
                    <td>{row.teacher}</td>
                    <td>{row.student}</td>
                    <td>{row.teacher}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionPriceList;