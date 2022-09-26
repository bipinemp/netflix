import React, { useState } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import "../slider.css";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import { BiPlay } from "react-icons/bi";
// import { BiLike, BiDislike } from "react-icons/bi";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { async } from "@firebase/util";
import { useEffect } from "react";
// import { useState } from "react";

function SliderItem({ info, setIsOpen, title, backdrop, handleClicked, idd }) {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const [add, setAdd] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useUserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setAdd(!add);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: idd,
          title: title,
          img: backdrop,
        }),
      });
    } else {
      alert("please sign in to add movies to list");
    }
  };
  const [isHovered, setIsHovered] = useState(false);
  const [mylist, setMyList] = useState(false);

  return (
    <div className="postercomp">
      <div
        onClick={() => handleClicked(info)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={img_path + info.poster_path}
          onClick={() => setIsOpen(true)}
          alt="poster"
          key={idd}
          className="posterimg"
          onError={(e) => (e.target.style.display = "none")}
        />
        {isHovered && (
          <p onClick={saveShow}>
            {add ? (
              <AiOutlineCheck className=" clickmodalicon" />
            ) : (
              <AiOutlinePlus className="modalicon" />
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default SliderItem;
{
  /* <SliderItem
                info={res}
                add={add}
                setIsOpen={setIsOpen}
                handleClicked={handleClicked}
                saveShow={saveShow}
                idd={pos}
              /> */
}
