import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./Cafeteria.css";
import Parser from "html-react-parser";

const Cafeteria = () => {
  const [datas, setData] = useState([]);
  const [value, setValue] = useState("비아고등학교");

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        `https://open.neis.go.kr/hub/schoolInfo?Key=813eb00ac6ae4e4b9bf6cc5254404138&Type=json&pIndex=1&pSize=10&SCHUL_NM=${value}`
      );
      console.log(response1.data);
      const response = await axios.get(
        "https://open.neis.go.kr/hub/mealServiceDietInfo?Key=813eb00ac6ae4e4b9bf6cc5254404138&Type=json&pIndex=1&pSize=1000&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292"
      );
      console.log(response);
      setData(response.data.mealServiceDietInfo[1].row);
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = () => {
    setValue(value);
  };

  const onSubmit = (e) => {
    fetchData();
  };
  return (
    <div className="Cafeteria">
      <div className="Cafeteria_cont">
        <form onSubmit={onSubmit}>
          <input value={value} onChange={onChange} />
        </form>
        <h2>{Parser(datas[0].DDISH_NM)}</h2>
      </div>
    </div>
  );
};

export default Cafeteria;
