import React, { useState } from "react";
import "./Cafeteria.css";

const today = () => {
  let now = new Date();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  if (todayMonth == 13) {
    todayMonth = 1;
  }
  return todayMonth + "월" + todayDate + "일";
};

const Cafeteria = () => {
  const [day, setDay] = useState(today());

  return (
    <div className="Cafeteria">
      <div className="Cafeteria_cont">
        <h1>{day}</h1>
      </div>
    </div>
  );
};

export default Cafeteria;
