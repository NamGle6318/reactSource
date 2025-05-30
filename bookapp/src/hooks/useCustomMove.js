// 페이지 나누기 이동

import { useState } from "react";

import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const useCustomMove = () => {
  // < Link to=[{}]/> 와 같은 역할
  const navigate = useNavigate();

  // 쿼리 스트림 가져오기
  const [queryParams] = useSearchParams();

  // 타입 변환 함수
  const getNum = (param, defaultValue) => {
    if (!param) return defaultValue;

    return parseInt(param);
  };

  const [refresh, setFresh] = useState(false);

  // ?page=1&size=10&genre=&keyword= 가져오기

  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);
  const genre = getNum(queryParams.get("genre"), 0);
  const keyword = queryParams.get("keyword") || "";

  const queryDefault = createSearchParams({ page, size, genre, keyword }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";

    setFresh(!refresh);

    if (pageParam) {
      const page = getNum(pageParam.page, 1);
      const size = getNum(pageParam.size, 10);
      const genre = getNum(pageParam.genre, 0);
      const keyword = pageParam.keyword || "";

      queryStr = createSearchParams({ page, size, genre, keyword }).toString();
    } else {
      queryStr = queryDefault;
    }
    navigate({
      pathname: `/`,
      search: queryStr,
    });
  };

  const moveToEdit = (id) => {
    navigate({
      pathname: `/edit/${id}`,
      search: queryDefault,
    });
  };
  const moveToDetail = (id) => {
    navigate({
      pathname: `/books/${id}`,
      search: queryDefault,
    });
  };
  return { moveToList, moveToEdit, moveToDetail, page, size, genre, keyword, refresh };
};
export default useCustomMove;
