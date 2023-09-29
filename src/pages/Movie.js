import axios from "axios";
import React, { useEffect, useState } from "react";
import { RenderList } from "../assets/components/RenderList";

export const Movie = () => {
  const [DataAwal, setDataAwal] = useState([]);
  const [LoadData, setLoadData] = useState([]);
  const [DataSearch, setDataSearch] = useState("");

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjQ0OWZjODcyZjdkNzZlNzAzOGUxMDZkYzU2NDllOSIsInN1YiI6IjY1MTQxZGIzY2FkYjZiMDJiZGViYmRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ErTup2CN2x3BfNg7FLQgI2fdwL36UsMUy1d37oODCGY",
    },
  };

  const getDataPokemon = async () => {
    // ambil data pokemon
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.results);

        setLoadData(response.data.results);
        setDataAwal(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // component did mount = dimana function akan di jalankan ketika page tersebut di pertama kali buka
  useEffect(() => {
    getDataPokemon();
  }, []);

  // siapkan kunci
  return (
    <div className="w-full flex flex-col bg-no-repeat bg-left bg-cover " style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original/53z2fXEKfnNg2uSOPss2unPBGX1.jpg')`,
    }}>
      
      <div className=" ml-[10rem] flex flex-col mt-[10rem] content-center  text-white space-y-[0.5rem] w-[40rem] ">
      <p className="  text-lg  ">Horror | Mystery | Exciting story</p>
      <p className=" text-[3rem] font-bold ">The Nun II</p>
      <p className="text-lg">2023-09-06</p>
      <p className="text-sm font-light ">In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.</p>
      <div className=" space-x-3 text-sm ">
        <button className="rounded-sm mt-[1rem] px-[3rem] py-1 bg-red-600">Play</button>
        <button className="rounded-sm px-[3rem] py-1 outline outline-1 outline-white">More Info</button>
      </div>
      </div>
      
      
    <div className="flex  justify-center overflow-x-auto " 
    >
      {LoadData.map((movie) => (
        
        <div key={movie.id} className="mt-[10rem] mx-[1rem] ">
          <div className="flex flex-wrap w-[20rem]  content-end  ">
          <img className=" " src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} ></img>
          </div>
          <h2 className="text-white text-xl font-bold mt-4 w-[20rem] text-start ">{movie.title}</h2>
          <p className="text-white text-lg font-light ">{movie.release_date}</p>
        </div> 
      ))}
      </div>
      </div>
  
  );
};
