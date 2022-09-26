import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footercontainer">
      <div className="footer-wrapper">
        <div className="footer-contact">
          <p className="pointer">Questions? Call 1-844-903-4443</p>
        </div>
        <div className="footer-rows">
          <div className="col1">
            <a>FAQ</a>
            <a>Investor Relations</a>
            <a>Ways to Watch</a>
            <a>Corporate Information</a>
            <a>Netflix Originals</a>
          </div>
          <div className="col2">
            <a>Help Center</a>
            <a>Jobs</a>
            <a>Terms of Use</a>
            <a>Contact Us</a>
          </div>
          <div className="col3">
            <a>Account</a>
            <a>Redeem Gift Cards</a>
            <a>Privacy</a>
            <a>Speed Test</a>
          </div>
        </div>
        <div className="pointer">Netflix( United States )</div>
      </div>
    </div>
  );
}

export default Footer;
// import React, { useState } from "react";

// import "../slider.css";
// import { useUserAuth } from "../../context/UserAuthContext";
// import { db } from "../../../Firebase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";

// import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

// function SliderItem({ info, setIsOpen, title, backdrop, idd }) {
//   let img_path = "https://image.tmdb.org/t/p/w500";
//   const [add, setAdd] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const { user } = useUserAuth();

//   const movieID = doc(db, "users", `${user?.email}`);

//   const saveShow = async () => {
//     if (user?.email) {
//       setAdd(!add);
//       setSaved(true);
//       await updateDoc(movieID, {
//         savedShows: arrayUnion({
//           id: idd,
//           title: title,
//           img: backdrop,
//         }),
//       });
//     } else {
//       alert("please sign in to add movies to list");
//     }
//   };

//   return (
//     <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
//       <img
//         className="w-full h-auto block"
//         src={img_path + info.poster_path}
//         onClick={() => setIsOpen(true)}
//         alt="poster"
//         key={idd}
//         onError={(e) => (e.target.style.display = "none")}
//       />
//       <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
//         <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
//           {info?.title}
//         </p>
//         <p onClick={saveShow}>
//           {add ? (
//             <AiOutlineCheck className="absolute top-4 left-4 text-gray-300" />
//           ) : (
//             <AiOutlinePlus className="absolute top-4 left-4 text-gray-300" />
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SliderItem;
// {
//   <SliderItem
//                 info={res}
//                 add={add}
//                 setIsOpen={setIsOpen}
//                 handleClicked={handleClicked}
//                 saveShow={saveShow}
//                 idd={pos}
//               />
// }
