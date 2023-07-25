import React from "react";
import Header from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Slider } from "../components/Slider";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";


export const Home = () => {
  const [animeList, setAnimeList] = useState<any>([])
  const getAmineList = async() => {
    try {
      const res = await publicRequest.get("/animes")
      setAnimeList(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAmineList()
  }, [])
  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-row justify-evenly p-2" id="nav">
          <select >
           <option value={0}>Shop By Anime</option>
            {animeList.map((item:any) => {
              return (
                <option key={item.id} value={item.id}>{item.title}</option>
              )
            })}
          </select>

          <select >
           <option value={0}>Shop By Category</option>
            <option value={1}>Apparel</option>
            <option value={2}>Key Chains</option>
            <option value={3}>Posters</option>
          </select>
      </div>
      <div>
        <Carousel anime={animeList} />
        <Slider/>
      </div>
      <h4>Footer</h4>
    </div>
  );
};
