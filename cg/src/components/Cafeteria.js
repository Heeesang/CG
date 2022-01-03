import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./Cafeteria.css";
import Parser from "html-react-parser";

const Cafeteria = () => {
  const [datas, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState([]);
  const [mname, setMname] = useState("");

  const today = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();

    if (todayMonth == 13) {
      todayMonth = 1;
    }
    return `${todayYear}` + 0 + `${todayMonth}` + 0 + `${todayDate}`;
  };

  const fetchData = async () => {
    try {
      const response2 = await axios.get(
        `https://open.neis.go.kr/hub/schoolInfo?Key=813eb00ac6ae4e4b9bf6cc5254404138&Type=json&pIndex=1&pSize=100&SCHUL_NM=${value}`
      );
      console.log(response2.data.schoolInfo[1].row);
      setCode(response2.data.schoolInfo[1].row);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData2 = async (code, date) => {
    try {
      const response = await axios.get(
        `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=813eb00ac6ae4e4b9bf6cc5254404138&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=${code}&MLSV_YMD=${today()}`
      );
      console.log(response.data.mealServiceDietInfo[1].row);
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
    const shul_code = code.map((num) => num.SD_SCHUL_CODE);
    fetchData2(shul_code);
  };

  const list = code.map((name) => <li key={name.SCHUL_NM}>{name.SCHUL_NM}</li>);

  if (isLoading) {
    return (
      <div className="Cafeteria">
        <div className="Cafeteria_cont">
          <h2>학교 입력</h2>
          <input placeholder="학교입력.." value={value} onChange={onChange} />
          <button onClick={fetchData}>확인</button>
          {code.length !== 0 ? (
            <div className="list">
              <ul onClick={onClick}>{list}</ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="Cafeteria">
      <div className="Cafeteria_cont">
        <div className="btn">
          <button value={mname}>아침</button>
          <button>점심</button>
          <button>저녁</button>
        </div>
        <div className="menu">
          <h2>{Parser(datas[0].DDISH_NM)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cafeteria;
