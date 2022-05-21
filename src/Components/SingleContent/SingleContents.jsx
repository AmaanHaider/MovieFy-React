import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../Config/Config";
import "./SingleContent.css"
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="singleCard">
        <Badge badgeContent ={vote_average} color={vote_average>6? "primary" :"secondary"}/>
      {
        <div>
          <img className="poster"
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
          />
          <b className="title">{title}</b>
          <span className="subTitle">{media_type === "tv" ? "Tv Series" : "Movie"}</span>
          <span className="subTitle">{date}</span>
        </div>
      }
    </div>
  );
};

export default SingleContent;
