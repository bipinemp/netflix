import React from "react";
import "./slider.css";
import { useState, useEffect } from "react";
import Modal from "../../Modal";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

import SliderItem from "./slideritem/SliderItem";

function Slider({ rowtitle, type }) {
  let img_path = "https://image.tmdb.org/t/p/w500";
  let base_url = "https://api.themoviedb.org/3";
  let url = base_url + type;
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url_set]);

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState();
  const [overview, setOverview] = useState();
  const [release, setRelease] = useState();
  const [poster, setPoster] = useState();
  const [backdrop, setBackdrop] = useState();
  const [idd, setIDD] = useState();

  const handleClicked = (movie) => {
    setTitle(movie?.name || movie?.original_title);
    setOverview(movie?.overview);
    setRelease(movie?.release_date || movie?.first_air_date);
    setPoster(movie?.poster_path);
    setBackdrop(movie?.backdrop_path);
    setIDD(movie?.id);
  };

  const [like, setLike] = useState(false);
  const [DisLike, setDisLike] = useState(false);
  const togglelike = () => {
    if (DisLike) {
      setDisLike(false);
      setLike(true);
    } else {
      setLike(!like);
    }
  };
  const toggledislike = () => {
    if (like) {
      setLike(false);
      setDisLike(true);
    } else {
      setDisLike(!DisLike);
    }
  };

  // const handleADD = () => {
  //   saveShow();
  // };

  return (
    <div className="slidermain">
      <div className="slidertitle">{rowtitle}</div>

      <div className="slider">
        <Modal className="popup" open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="modalinside">
            <div className="modalcontent">
              <div className="modaltitle">
                <h1>{title}</h1>
              </div>
              <div className="modaldesc">{overview}</div>
              <div className="modalicons">
                <span className="playdiv">
                  <BiPlay className="modalicon iconplay" />
                  Play
                </span>

                <BiLike
                  className={like ? " modaliconclick" : "modalicon"}
                  onClick={togglelike}
                />
                <BiDislike
                  className={DisLike ? " modaliconclick" : "modalicon"}
                  onClick={toggledislike}
                />
              </div>
              <div className="modalrelease">&nbsp;Release&nbsp;: {release}</div>
            </div>
            <div className="modalimg">
              <img src={img_path + poster || backdrop} alt="poster" />
            </div>
          </div>
        </Modal>
        <div className="mainslider">
          {movieData.map((res, pos) => {
            return (
              <SliderItem
                info={res}
                setIsOpen={setIsOpen}
                handleClicked={handleClicked}
                idd={pos}
                title={title}
                backdrop={backdrop}
                isOpen={isOpen}
                overview={overview}
                like={like}
                togglelike={togglelike}
                DisLike={DisLike}
                toggledislike={toggledislike}
                release={release}
                poster={poster}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;
