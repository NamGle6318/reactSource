import React from "react";
import BookList from "../components/BookList";
import useCustomMove from "../hooks/useCustomMove";
import { genres } from "../util";

const Home = () => {
  const moveState = useCustomMove();
  // 검색창에서 사용 할 정보를 분해
  const { page, size, genre, keyword, moveToList } = moveState;

  return (
    <div>
      <header className="flex mb-6">
        <h1 className="grow-1 text-[32px]">Book List</h1>
        <div>
          <input
            onChange={(e) => moveToList({ page: 1, genre: genre, keyword: e.target.value })}
            type="text"
            placeholder="Search by title or author"
            className="outline-0 p-2 border-2 border-gray-300 rounded-sm w-[200px] text-[.9em] leading-tight"
          />
          <select
            onChange={(e) => moveToList({ page: 1, genre: e.target.value, keyword: keyword })}
            name="genre"
            id=""
            className="outline-0 p-2 border-2 border-gray-300 rounded-sm ml-2 text-[.9em] leading-tight"
            value={genre}
          >
            <option value="">All Genres</option>
            {genres.map((genre, idx) => {
              return (
                <option key={idx} value={idx + 1}>
                  {genre}
                </option>
              );
            })}
          </select>
        </div>
      </header>
      <BookList moveState={moveState} />
    </div>
  );
};

export default Home;
