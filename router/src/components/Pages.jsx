import React from "react";
import { useEffect } from "react";
import { Link, Outlet, Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

function Home() {
  // useLocation() => 현재 경로를 들고 올 수 있음
  const location = useLocation();

  useEffect(() => {
    console.log("current path : ", location.pathname);
  }, [location]);
  return <h1>Home Page</h1>;
}

function User() {
  // http://localhost:5173/user/1 입력 시 1 가져오기
  // :id 가져오는 중
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    console.log("current path : ", location.pathname);
  }, [location, id]);

  return <h1>User ID :{id} </h1>;
}

function Search() {
  // http://localhost:5173/search?keyword=test test 가져오기

  //   const location = useLocation();
  //   // new URLSearchParams : 브라우저 API 이용하여 ?뒤에 키=값 가져오기
  //   const queryParams = new URLSearchParams(location.search);
  //   const keyword = queryParams.get("keyword");

  //   useEffect(() => {
  //     console.log("current path : ", location.search);
  //     console.log("keyword : ", keyword);
  //   }, [location, keyword]);

  const [queryParams] = useSearchParams();
  const keyword = queryParams.get("keyword");

  return <h1>Search keyword : {keyword}</h1>;
}

function Articles() {
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to={"/articles/1"}>게시글 1 </Link>
        </li>
        <li>
          <Link to={"/articles/2"}>게시글 2 </Link>
        </li>
        <li>
          <Link to={"/articles/3"}>게시글 3 </Link>
        </li>
      </ul>
    </>
  );
}

function Article() {
  const { id } = useParams();

  return <h2>게시글 : {id}</h2>;
}

function Error() {
  return <h2> 404 4040404040404040404</h2>;
}

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="/articles" element={<Articles />}>
          <Route path="/articles/:id" element={<Article />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Pages;
