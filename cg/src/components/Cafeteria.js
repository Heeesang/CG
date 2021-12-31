import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./Cafeteria.css";
import Parser from "html-react-parser";

const Cafeteria = () => {
  const [datas, setData] = useState([]);
  const [value, setValue] = useState("비아고등학교");
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState([]);

  const fetchData = async () => {
    try {
      const response2 = await axios.get(
        `https://open.neis.go.kr/hub/schoolInfo?Key=813eb00ac6ae4e4b9bf6cc5254404138&Type=json&pIndex=1&pSize=100&SCHUL_NM=${value}`
      );
      console.log(response2.data.schoolInfo[1].row[0]);
      setCode(response2.data.schoolInfo[1].row);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData2 = async (code) => {
    try {
      const response = await axios.get(
        `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=813eb00ac6ae4e4b9bf6cc5254404138&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=${code}`
      );
      console.log(response);
      setData(response.data.mealServiceDietInfo[1].row);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    fetchData2(code[0].SD_SCHUL_CODE);
  };
  const list = code.map((name) => <li key={name.SCHUL_NM}>{name.SCHUL_NM}</li>);

  if (isLoading) {
    return (
      <div className="Cafeteria_cont">
        <h2>학교 입력</h2>
        <input placeholder="학교입력.." value={value} onChange={onChange} />
        <button onClick={fetchData}>확인</button>
        {code.length !== 0 ? <ul onClick={onClick}>{list}</ul> : <></>}
      </div>
    );
  }

  return (
    <div className="Cafeteria">
      <div className="Cafeteria_cont">
        <h2>{Parser(datas[0].DDISH_NM)}</h2>
      </div>
    </div>
  );
};

export default Cafeteria;
