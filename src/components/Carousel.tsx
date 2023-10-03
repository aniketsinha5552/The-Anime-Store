import React from "react";
import { useNavigate } from "react-router-dom";


export const Carousel = (props: any) => {
  const anime = props.anime.slice();
  const navigate= useNavigate()
  return (
    <div
      id="carousel"
      className="h-screen-4/5 flex flex-row relative overflow-x-scroll bg-slate-200 lg:justify-center md:overflow-x-hidden"
    >
      {anime.map((item: any,idx:any) => {
        return (
          <div key={idx} className="relative bg-transparent h-full min-w-[350px] max-w-[350px]" onClick={()=>navigate(`/anime/${item._id}`)}>
            <img
              src={item.poster}
              alt="anime_poster"
              className="h-full min-w-[380px] max-w-[350px] border-2 border-slate-800 hover:cursor-pointer"
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
