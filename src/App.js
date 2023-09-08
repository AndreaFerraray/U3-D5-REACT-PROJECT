import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import MovieCard from "./component/MovieCard";
import Card from "./component/Card";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <MovieCard
        imageSrc="https://www.metropolitano.it/wp-content/uploads/2023/06/Cala-Goloritze-a-Baunei-Sardegna-@Valerio-Mei.jpg"
        title="bkjbiub"
        description="sncjhab"
      ></MovieCard>
      <Footer />
      {/* <Card
        imageSrc="https://www.metropolitano.it/wp-content/uploads/2023/06/Cala-Goloritze-a-Baunei-Sardegna-@Valerio-Mei.jpg"
        title="Card Title 1"
        description="This is the description for Card 1."
      ></Card> */}
    </div>
  );
}

export default App;
