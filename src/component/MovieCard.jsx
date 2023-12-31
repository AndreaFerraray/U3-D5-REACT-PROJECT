import React from "react";
import "../App.css";
function MovieCard(props) {
  console.log(props);
  return (
    <div className="container-fluid px-4" style={{ backgroundColor: "#221f1f" }}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-white">TV Shows</h2>
          <div className="dropdown ml-4 mt-1">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </button>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item text-white bg-dark" href="#">
                Comedy
              </a>
              <a className="dropdown-item text-white bg-dark" href="#">
                Drama
              </a>
              <a className="dropdown-item text-white bg-dark" href="#">
                Thriller
              </a>
            </div>
          </div>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
      <h4 className="text-white">Trending Now</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie className" />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
      </div>
      <h4 className="text-white">Watch it Again</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
      </div>
      <h4 className="text-white">New Releases</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-0 no-gutters text-center">
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
        <div className="col mb-2 px-1">
          <img className="img-fluid" src={props.imageSrc} alt="movie " />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
