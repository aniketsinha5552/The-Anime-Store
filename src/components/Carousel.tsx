import React from "react";
import { useNavigate } from "react-router-dom";

const carouselStyle = {
  // backgroundImage: "url(https://images8.alphacoders.com/131/1318148.png)",
 backgroundColor: "#4a5568",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  // filter: "blur(8px)",
  // webkitFilter: "blur(8px)",
}

export const Carousel = (props: any) => {
  const anime = props.anime.slice(0, 4);
  const navigate= useNavigate()
  return (
    <div
      id="carousel"
      style={carouselStyle}
      className="min-w-full h-screen-4/5 flex flex-row relative p-5 pl-10 pr-10 justify-center"
    >
      {anime.map((item: any,idx:any) => {
        return (
          <div key={idx} className="relative p-1 bg-transparent m-2" onClick={()=>navigate(`/anime/${item._id}`)}>
            <img
              src={item.poster}
              alt="anime_poster"
              className="w-[300px] h-full rounded-lg border-4 border-slate-900 hover:scale-105 transition duration-500 ease-in-out"
            />
            {/* <button onClick={()=>navigate(`/anime/${item.id}`)} className="absolute left-20 bottom-5 bg-blue-950 rounded-sm p-2 text-yellow-50 hover:bg-blue-700">
              Shop {item.title}
            </button> */}
          </div>
        );
      })}
    </div>
  );
};
