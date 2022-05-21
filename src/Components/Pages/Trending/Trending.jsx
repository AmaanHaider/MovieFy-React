import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../SIngleContent/SingleContent";

const key = "291df45e949726307a272895099ae98b";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
    );

    setContent(data.results);
  };
  console.log(content)

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending</span>

      <div className="trending">
        {content &&
          content.map((e) => (
            <SingleContent
              key={e.id}
              id={e.id}
              poster={e.poster_path}
              title={e.title || e.name}
              date={e.first_air_data || e.release_date}
              media_type={e.media_type}
              vote_average={e.vote_average}

            />
          ))}
      </div>
    </div>
  );
};

export default Trending;
