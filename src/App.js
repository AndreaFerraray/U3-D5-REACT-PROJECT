import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import MovieCard from "./component/MovieCard";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <MovieCard imageSrc="" />
      <Footer />
    </div>
  );
}

export default App;
