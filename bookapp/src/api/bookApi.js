import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080/api/books";

export const getList = async () => {
  const res = await axios.get(API_SERVER_HOST);

  return res.data;
};
export const getBook = async (id) => {
  console.log(`${API_SERVER_HOST}/${id}`);
  const res = await axios.get(`${API_SERVER_HOST}/${id}`);
  console.log(res);
  return res.data;
};
export const postBook = async (bookObj) => {
  console.log("bookObj", bookObj);
  const res = await axios.post(`${API_SERVER_HOST}/add`, bookObj);
  console.log(res);
};
export const putAvailableBook = async (bookObj) => {
  const res = await axios.put(`${API_SERVER_HOST}/${bookObj.id}`, bookObj);
  return res.data;
};

export const putPublishedDateBook = async (bookObj) => {
  console.log(bookObj);
  const res = await axios.put(`${API_SERVER_HOST}/edit/${bookObj.id}`, bookObj);
  return res.data;
};
export const removeBook = async (id) => {
  // 삭제
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);
  return res.data;
};
