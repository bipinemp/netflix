// import React, { useState, useRef } from "react";
// import "./row.css";

// function Row() {
//   const rowRef = useRef();
//   const [rowNo, setRowNo] = useState(0);

//   const handleClick = (direction) => {
//     let distance = rowRef.current.getBoundingClientRect().x - 50;
//     if (direction === "left" && rowNo > 0) {
//       setRowNo(rowNo - 1);
//       rowRef.current.style.transform = `translate(${1160 + distance}px)`;
//     }
//     if (direction === "right" && rowNo < 2) {
//       setRowNo(rowNo + 1);
//       rowRef.current.style.transform = `translate(${-1160 + distance}px)`;
//     }

//     console.log(rowNo);
//   };

//   return (
//     <div className="row">
//       <div className="rowtitle">Continue Watching</div>
//       <div className="mainrowslider">
//         <span className="arrbtn arrleft" onClick={() => handleClick("left")}>
//           left
//         </span>

//         <div className="rowslider" ref={rowRef}>
//           <div className="rowitems">1</div>
//           <div className="rowitems">2</div>
//           <div className="rowitems">3</div>
//           <div className="rowitems">4</div>
//           <div className="rowitems">5</div>
//           <div className="rowitems">6</div>
//           <div className="rowitems">7</div>
//           <div className="rowitems">8</div>
//           <div className="rowitems">9</div>
//           <div className="rowitems">10</div>
//           <div className="rowitems">11</div>
//           <div className="rowitems">12</div>
//           <div className="rowitems">13</div>
//           <div className="rowitems">14</div>
//           <div className="rowitems">15</div>
//         </div>
//         <span className="arrbtn arrright" onClick={() => handleClick("right")}>
//           right
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Row;
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";

import "./row.css";
// import "./slideritem.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Modal from "../../Modal";

export default function App({ rowtitle, type }) {
  let img_path = "https://image.tmdb.org/t/p/original";
  let api_key = "&api_key=c3913f726cde9ba73b0b7211ecfc40b9";
  let base_url = "https://api.themoviedb.org/3";
  let url = base_url + type + api_key;
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].results);
        setData(data.results);
      });
  }, [url_set]);
  const handleCLick = (rowdata) => {
    console.log(rowdata.title);
  };
  const [isOpen, setIsOpen] = useState(false);

  const brokenimg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z";

  return (
    <>
      <div className="row">
        <div className="rowtitle">
          {rowtitle}
          <IoIosArrowForward className="arrowrt" />
        </div>
        <Modal className="popup" open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="modalinside">
            <div></div>
          </div>
        </Modal>
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {movieData.length === 0 ? (
            <p
              className="notfound"
              // style={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   alignSelf: "flex-start",
              // }}
            >
              Not Found !!!
            </p>
          ) : (
            movieData.map((res, pos) => {
              return (
                <SwiperSlide onClick={() => setIsOpen(true)}>
                  <img
                    src={img_path + res.poster_path}
                    alt="poster"
                    onClick={handleCLick(res)}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  {/* <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum eos suscipit animi, ullam dignissimos ex.
                    </p>
                  </div> */}
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </>
  );
}
