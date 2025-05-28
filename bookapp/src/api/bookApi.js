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
export const postBook = () => {};
export const putBook = () => {};
export const removeBook = () => {};
