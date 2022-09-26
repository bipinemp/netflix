import React, { useState, useEffect } from "react";
import "./feature.css";
import { BiPlay } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Feature() {
  // let img_path = "https://image.tmdb.org/t/p/w500";
  let type = "/discover/movie?sort_by=popularity.desc";
  let api_key = "&api_key=c3913f726cde9ba73b0b7211ecfc40b9";
  let base_url = "https://api.themoviedb.org/3";
  let url = base_url + type + api_key;
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setData(data.results[Math.floor(Math.random() * data.results.length)]);
      });
  }, [url_set]);
  return (
    <>
      <div
        className="featured"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movieData?.backdrop_path}"),linear-gradient(to right,rgba(0,0,0,0.9),transparent)`,
          backgroundRepeat: "no-repeat",
          width: "100vw",
          backgroundSize: "cover",
          backgroundBlendMode: "darken",
          objectPosition: "center center",
          filter: "brightness(100%)",
          layout: "fill",
        }}
      >
        {/* <img src={img_path} alt="home" /> */}

        <div className="desc">
          <div className="title">
            <h1>
              {movieData?.title || movieData.name || movieData?.orignal_name}
            </h1>
          </div>

          <div>
            <p>{movieData?.overview}</p>
          </div>
          <div className="release">
            <p>Release Date : {movieData?.release_date}</p>
          </div>
          <div className="buttons">
            <button className="play">
              <BiPlay className="icon" />
              <span>Play</span>
            </button>
            <button className="info">
              <AiOutlineInfoCircle className="iconinfo" />
              <span>More Info</span>
            </button>
          </div>
        </div>
        <div className="verticalsmoke"></div>
      </div>
    </>
  );
}

export default Feature;
