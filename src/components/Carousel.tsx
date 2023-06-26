import React from "react";
import { useNavigate } from "react-router-dom";

export const Carousel = (props: any) => {
  const anime = props.anime;
  const navigate= useNavigate()
  return (
    <div
      id="carousel"
      className="min-w-full h-screen-4/5 flex flex-row relative p-1 justify-center"
    >
      {anime.map((item: any,idx:any) => {
        return (
          <div key={idx} className="relative p-1 bg-slate-200">
            <img
              src={item.image}
              alt="anime_poster"
              className="w-[340px] h-full rounded-lg "
            />
            <button onClick={()=>navigate(`/anime/${item.id}`)} className="absolute left-20 bottom-5 bg-blue-950 rounded-sm p-2 text-yellow-50 hover:bg-blue-700">
              Shop {item.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};
