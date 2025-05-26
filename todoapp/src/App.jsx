import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";

import TodoList from "./components/TodoList";
import { getList, postTodo, putTodo, deleteTodo } from "./common/todoApi";

// DB와 연동
function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // todoList 요청
  useEffect(() => {
    getList().then((data) => {
      console.log(data);
      setTodos(data);
      setLoading(false);
    });
  }, []);

  // todo 추가 동작
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        content: text,
        completed: false,
      };

      postTodo(newTodo).then((data) => {
        setTodos(todos.concat(data));
      });
    },
    [todos]
  );

  // todo 제거 동작
  const onRemove = useCallback(
    (id) => {
      console.log(id);
      deleteTodo(id).then((data) => {
        // ㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣㅣ
        console.log(data);
      });

      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );

  // 할일 체크 동작
  const onToggle = useCallback(
    (id) => {
      // 업데이트할 할 일 탐색
      const oriTodo = todos.find((todo) => todo.id === id);
      const updateTodo = { ...oriTodo, completed: !oriTodo.completed };
      putTodo(updateTodo).then((data) => console.log(data));
      setTodos(todos.map((todo) => (todo.id === id ? { updateTodo } : { ...todo })));
    },
    [todos]
  );

  if (loading) {
    return <div className="text-4xl font-extrabold text-orange-400 m-20">Loading ...</div>;
  }

  if (!todos) {
    return null;
  }

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;
