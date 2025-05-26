import axios from "axios";

// 서버 요청 보내기 (ajax => fetch()사용
// or jQuery 라이브러리 사용
// or axios 라이브러리 사용 )

// 기본 방식 --------------------------------
// fetch("경로", {method:"post", body: , headers: {}})
// .then(도착한 데이터 확인, 데이터 적절한 타입으로 변환)
// .then(응답 받을 시 실행);

// fetch("경로", {method:"post", body: JSON.stringify, headers: {"Content-Type" : "application/json",}})
// .then( res => {
//     if (!res.ok) throw new Error("에러");
//     return resizeBy.json();
// }
// )
// .then(data => {
//     // 화면에 보여주기
// });
// -------------------------------- 기본 방식

// async await 사용 = 비동기 요청 => 동기식으로 요청 가능
// const fetchData = async () => {
// const res = await fetch("경로")
// const data = await res.json();
// }

// axios
// axios.get("경로").then();

// 요청 서버 주소
export const API_SERVER_HOST = "http://localhost:8080/todos";

// get
export const getList = async () => {
  const res = await axios.get(API_SERVER_HOST + "/list");
  return res.data;
};

export const postTodo = async (todo) => {
  const res = await axios.post(API_SERVER_HOST + "/add", todo);
  return res.data;
};
export const putTodo = async (todo) => {
  const res = await axios.put(API_SERVER_HOST + `/${todo.id}`, todo);
  return res.data;
};
export const deleteTodo = async (id) => {
  const res = await axios.delete(API_SERVER_HOST + `/delete/${id}`);
  return res.data;
};
