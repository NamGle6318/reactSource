import { useCallback, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";

import TodoList from "./components/TodoList";

// 화면단에서 더미 데이터 생성 후 수정, 삭제, 입력, 작성
function App2() {
  const [count, setCount] = useState(0);

  // 임의로 todoList 생성
  const todoList = [
    {
      id: 1,
      title: "react 기초 알아보기",
      completed: true,
    },
    {
      id: 2,
      title: "오운완",
      completed: false,
    },
    {
      id: 3,
      title: "공부하기",
      completed: false,
    },
    {
      id: 4,
      title: "산책하기",
      completed: true,
    },
  ];

  const [todos, setTodos] = useState(todoList);
  const nextId = useRef(5);

  // todo 추가 동작
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        title: text,
        completed: false,
      };

      setTodos(todos.concat(newTodo));
      nextId.current++;
    },
    { todos }
  );

  // todo 제거 동작
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  // 할일 체크 동작
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : { ...todo }
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App2;
