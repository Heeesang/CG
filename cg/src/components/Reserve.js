import React, { useState } from "react";
import "./Reserve.css";
import axios from "axios";

const Reserve = () => {
  const [value, setValue] = useState(0);
  const [isrLoading, setrIsLoading] = useState(false);
  const [islLoading, setlIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Purpose, setPurpose] = useState("");
  const [Name, setName] = useState("");
  const [Start_time, setStart_time] = useState("");
  const [End_time, setEnd_time] = useState("");
  const [Room_num, setRoom_num] = useState(4);
  const [data, setData] = useState([]);
  const [pwd, setPwd] = useState([]);

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const start_timeHandler = (e) => {
    e.preventDefault();
    setStart_time(e.target.value);
  };
  const end_timeHandler = (e) => {
    e.preventDefault();
    setEnd_time(e.target.value);
  };
  const room_numHandler = (e) => {
    e.preventDefault();
    setRoom_num(e.target.value);
  };
  const purposeHandler = (e) => {
    e.preventDefault();
    setPurpose(e.target.value);
  };
  const pwdHandler = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {
      purpose: Purpose,
      name: Name,
      start_time: Start_time,
      end_time: End_time,
      room_num: Room_num,
      pwd: pwd,
    };

    console.log(body);
    axios.post("/book", body).then((res) => console.log(res));
    alert("예약 완료");
  };

  const book_check = (e) => {
    e.preventDefault();

    const id = {
      num: Room_num,
    };
    console.log(id);
    axios.post("/book_check", id).then((res) => setData(res));
    console.log(data);
  };

  const rLoading = (e) => {
    setRoom_num(e.target.value);

    if (data.data === 0) {
      setrIsLoading(true);
    } else if (data.data !== 0) {
      setrIsLoading(false);
      alert("이미 예약된 Room 입니다.");
    }
  };
  const lLoading = (e) => {
    setRoom_num(e.target.value);

    if (data.data === 0) {
      setlIsLoading(true);
    }
    if (data.data !== 0) {
      setlIsLoading(false);
      alert("이미 예약된 Room 입니다.");
    }
  };

  return (
    <div className="Reserve">
      <div className="Reserve_HB">
        {islLoading === true ? (
          <>
            <form action="/book" onSubmit={submitHandler} className="input">
              <input
                placeholder="이름"
                id="Name"
                value={Name}
                onChange={nameHandler}
              />
              <div className="time">
                <input
                  placeholder="시작시간"
                  id="Start_time"
                  value={Start_time}
                  onChange={start_timeHandler}
                />
                <input
                  placeholder="종료시간"
                  id="End_time"
                  value={End_time}
                  onChange={end_timeHandler}
                />
              </div>
              <input
                placeholder="목적"
                id="Purpose"
                value={Purpose}
                onChange={purposeHandler}
              />
              <input
                placeholder="고유번호"
                id="Room_num"
                value={Room_num}
                onChange={room_numHandler}
              />
              <input
                placeholder="비밀번호"
                id="Pwd"
                value={pwd}
                onChange={pwdHandler}
              />
              <button>확인</button>
            </form>
          </>
        ) : (
          <>
            <h2>홈베</h2>
            <div className="Reserve_btn">
              <form
                action="/book_check"
                onSubmit={book_check}
                className="btn_form"
              >
                <button onClick={rLoading} value={4}>
                  4층
                </button>
                <button onClick={rLoading} value={3}>
                  3층
                </button>
                <button onClick={rLoading} value={2}>
                  2층
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <div className="Reserve_P">
        {isrLoading === true ? (
          <>
            <form action="/book" onSubmit={submitHandler} className="input">
              <input
                placeholder="이름"
                id="Name"
                value={Name}
                onChange={nameHandler}
              />
              <div className="time">
                <input
                  placeholder="시작시간"
                  id="Start_time"
                  value={Start_time}
                  onChange={start_timeHandler}
                />
                <input
                  placeholder="종료시간"
                  id="End_time"
                  value={End_time}
                  onChange={end_timeHandler}
                />
              </div>
              <input
                placeholder="목적"
                id="Purpose"
                value={Purpose}
                onChange={purposeHandler}
              />
              <input
                placeholder="실 번호"
                id="Room_num"
                value={Room_num}
                onChange={room_numHandler}
              />
              <input
                placeholder="비밀번호"
                id="Pwd"
                value={pwd}
                onChange={pwdHandler}
              />
              <button className="check">확인</button>
            </form>
          </>
        ) : (
          <>
            <h2>프밍실</h2>
            <div className="Reserve_btn">
              <form
                action="/book_check"
                onSubmit={book_check}
                className="btn_form"
              >
                <button onClick={lLoading} value={14}>
                  4층
                </button>
                <button onClick={lLoading} value={13}>
                  3층
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reserve;
