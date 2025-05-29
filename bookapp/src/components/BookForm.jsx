import React, { useState } from "react";
import { genres } from "../util";
import { useNavigate } from "react-router-dom";

const BookForm = ({ initalData = {}, onSubmit }) => {
  const [formData, setFormData] = useState(initalData);
  console.log("inital", initalData);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("hiyo", formData);

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="flex flex-col gap-2.5 mt-6" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={formData.title}
        placeholder="Title"
        required
        className="border-2 border-stone-300 p-2 rounded-b-xs"
        name="title"
      />
      <input
        onChange={handleChange}
        type="text"
        name="author"
        value={formData.author}
        placeholder="Author"
        required
        className="border-2 border-stone-300 p-2 rounded-b-xs"
      />
      <select name="gid" className="border-2 border-stone-300 p-2 rounded-b-xs" onChange={handleChange}>
        <option value={formData.gid}>Select Genre</option>
        {genres.map((genre, idx) => {
          return (
            <option key={idx} value={idx + 1}>
              {genre}
            </option>
          );
        })}
      </select>
      <input
        onChange={handleChange}
        type="date"
        name="publishedDate"
        value={formData.publishedDate}
        placeholder="Published Date"
        required={formData.publishedDate}
        className="border-2 border-stone-300 p-2 rounded-b-xs"
      />
      <label>
        <input
          onChange={handleChange}
          type="checkbox"
          name="available"
          checked={!!formData?.available}
          required
          className="border-2 border-stone-300 p-2 rounded-b-xs mr-1.5"
        />
        Available
      </label>
      <div className="text-center p-2">
        <button
          onClick={handleSubmit}
          type="button"
          className="m-1 my-6 py-3 px-4.5 text-[1.2em] bg-sky-500 text-white text-center hover:bg-sky-700"
        >
          {formData.id ? "Update" : "Add"}
        </button>
        <button
          onClick={() => navigate("/")}
          type="button"
          className="m-1 my-6 py-3 px-4.5 text-[1.2em] bg-red-500 text-white text-center hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BookForm;
