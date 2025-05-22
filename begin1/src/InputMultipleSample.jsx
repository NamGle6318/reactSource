import React, { useState } from "react";

const InputMultipleSample = () => {
  //     const { name, setName } = useState("");
  //   const { nickname, setNickname } = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const handleChanged = (e) => {
    const { name, value } = e.target;

    setInputs({
      // 먼저 수정된 값 복제
      ...inputs,
      // 변경된 값 변화
      [name]: value,
    });
  };

  const handleReseted = (e) => {
    setInputs({
      name: "",
      nickname: "",
    });
    console.log(inputs);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="이름" name="name" onChange={handleChanged} value={name} />
      </div>

      <div>
        <input type="text" placeholder="별명" name="nickname" onChange={handleChanged} value={nickname} />
      </div>
      <button onClick={handleReseted}>초기화</button>
      <div>
        <h4>
          입력값 : {name} {nickname}
        </h4>
      </div>
    </div>
  );
};

export default InputMultipleSample;
