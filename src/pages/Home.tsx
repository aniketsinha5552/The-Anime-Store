import React from "react";
import Header from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Slider } from "../components/Slider";


const demon = require("../assets/demon.jpg");
const aot = require("../assets/aot.jpg");
const death = require("../assets/deathnote.jpg");
const one = require("../assets/onepiece.jpg");

export const animes = [
  {
    id: 1,
    name: "Demon Slayer",
    image: demon,
  },
  {
    id: 2,
    name: "Attack On Titan",
    image: aot,
  },
  {
    id: 3,
    name: "Death Note",
    image: death,
  },
  {
    id: 4,
    name: "One Piece",
    image: one,
  },
]

export const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-row justify-evenly p-2" id="nav">
          <select >
           <option value={0}>Shop By Anime</option>
            {animes.map((item) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
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
        <Carousel anime={animes} />
        <Slider/>
      </div>
      <h4>Footer</h4>
    </div>
  );
};
