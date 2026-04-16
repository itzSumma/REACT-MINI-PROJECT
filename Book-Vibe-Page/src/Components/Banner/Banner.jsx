import React from "react";
import bookImg from "../../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="hero bg-base-200 rounded-2xl px-6 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full gap-10">
          
          <img
            src={bookImg}
            alt="Books"
            className="w-full max-w-md rounded-lg"
          />

          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Books to freshen <br />
              up your bookshelf
            </h1>

            <button className="btn btn-success mt-6 px-6">
              View The List
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;