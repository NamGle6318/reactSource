import React, { useState } from "react";

const Movie = () => {
  const img1 = "/public/image/crime1.jpg";
  const img2 = "/public/image/crime2.jpg";

  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState(img1);

  const handleToggle = () => {
    setBtn(btn ? false : true);
    setSrc(btn ? img2 : img1);
  };

  return (
    <div>
      <img src={src} alt="" width="300" height="500" />
      <button onClick={handleToggle}>change</button>
    </div>
  );
};

export default Movie;
