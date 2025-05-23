import React, { useMemo, useState } from "react";

// useMemo() : 특정 연산의 불필요한 재실행을 방지
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState([0]);

  const getAverage = (numbers) => {
    if (numbers.length == 0) return;
    console.log("평균 계산 중...");
    // let sum = 0
    // list.forEach(element => {
    //   sum += element;
    // })
    // const avg = sum / numbers.length;

    // return avg;

    // reduce
    const sum = numbers.reduce((a, b) => a + b);
    const avg = sum / numbers.length;

    return avg;
  };

  const handleClick = (number) => {
    // list에 추가
    // list.push(number) <- 원본 보존해야함
    const nextList = list.concat(parseInt(number));

    // setList 호출
    setList(nextList);
    setNumber("");
    document.querySelector("input").focus();
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => handleClick(number)}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>number : {number}</div>
      <div>평균 : {avg}</div>
    </div>
  );
};

export default Average;
