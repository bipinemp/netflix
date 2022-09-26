import React from "react";
import Feature from "../components/featured/Feature";
import Navbar from "../components/Navbar";
import Slider from "../components/slider/Slider";
import Row from "../components/row/Row";
import "./home.css";
import Footer from "../components/footer/Footer";

function Home() {
  const API_KEY = "c3913f726cde9ba73b0b7211ecfc40b9";
  return (
    <div className="home">
      <Navbar />
      <Feature />
      <Slider
        rowtitle={"Continue Watching"}
        type={`/discover/tv?api_key=${API_KEY}&with_networks=213`}
      />
      <Slider
        rowtitle={"Trending"}
        type={`/trending/all/week?api_key=${API_KEY}&language=en-US`}
      />
      <Slider
        rowtitle={"Top Rated"}
        type={`/movie/top_rated?api_key=${API_KEY}&language=en-US`}
      />
      <Slider
        rowtitle={"Action Movies"}
        type={`/discover/movie?api_key=${API_KEY}&with_genres=28`}
      />
      <Slider
        rowtitle={"Comedy Movies"}
        type={`/discover/movie?api_key=${API_KEY}&with_genres=35`}
      />
      <Slider
        rowtitle={"Horror Movies"}
        type={`/discover/movie?api_key=${API_KEY}&with_genres=27`}
      />
      <Slider
        rowtitle={"Romance Movies"}
        type={`/discover/movie?api_key=${API_KEY}&with_genres=10749`}
      />
      <Slider
        rowtitle={"Documentaries"}
        type={`/discover/movie?api_key=${API_KEY}&with_genres=99`}
      />
      <Footer />
    </div>
  );
}

export default Home;
