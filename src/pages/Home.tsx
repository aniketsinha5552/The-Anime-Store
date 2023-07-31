import React from "react";
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
  const [apparel, setApparel] = useState<any>([])
  const [nonApparel, setNonApparel] = useState<any>([])
  const getApparel = async() => {
    try {
      const res = await publicRequest.get("/products?category=apparel")
      const res2 = await publicRequest.get("/products?category=non apparel")
      setNonApparel(res2.data)
      setApparel(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAmineList()
    getApparel()
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

          {/* <select >
           <option value={0}>Shop By Category</option>
            <option value={1}>Apparel</option>
            <option value={2}>Key Chains</option>
            <option value={3}>Posters</option>
          </select> */}
      </div>
      <div>
        <Carousel anime={animeList} />
        <Slider products={apparel} name="Apparel"/>
        <Slider products={nonApparel} name="Non Apparel"/>
      </div>
    </div>
  );
};
