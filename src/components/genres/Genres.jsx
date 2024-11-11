import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const Genres = ({ data }) => {
  // console.log(data);
  const { genres } = useSelector((state) => state.home);
  console.log(genres);
  return (
    <div className="genres">
      {data?.map((genre) => {
        // This is used when there is not a value in the store, 
        // which in that case we have to stop the iteration
        if (!genres[genre]?.name) return;
        return (
          <div key={genre} className="genre">
            {genres[genre]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
