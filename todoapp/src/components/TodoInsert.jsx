import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  // 할 일 입력시 내용 받기
  const handleChange = useCallback((e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);

  // 할 일 추가
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="flex bg-black" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일 입력"
        className="grow p-2 text-gray-400 focus:outline-none"
        onChange={handleChange}
      />
      <button type="submit" className="p-2 bg-gray-300 cursor-pointer hover:bg-gray-500" value={value}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
