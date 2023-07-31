import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Card from "./Card";

export const Slider = ({products,name}:any) => {
  const navigate = useNavigate();
  const scrollRef = useRef<any>(null);
  const dispatch= useDispatch()

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 200;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft += 200;
  };

  const addToCart = (product:any) => {
    const cartProduct:any= {
      product: product,
      quantity:1,
      price:product.price
    }
    dispatch(
      addProduct(cartProduct)
    )
    alert("Product Added")
  }
  return (
    <div className="ml-5 mr-5 mt-5">
      <div className="flex flex-row justify-between ml-5 mr-5">
        <p className="text-2xl font-bold text-slate-800 ml-5 mb-2">{name}</p>
        {/* <button>View all</button> */}
      </div>
       <div className="flex flex-row relative w-full bg-slate-200 rounded-md">
        <button
          className="absolute left-1 bottom-1/2 z-20"
          onClick={scrollLeft}
        >
          <Icon
            style={{ fontSize: "30px", color: "gray" }}
            icon="ps:left"
          />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row pl-1 pr-1 overflow-x-scroll relative ml-5 mr-5"
          id="slider"
        >
          {products?.map((item: any, idx: any) => {
            return <Card key={idx} item={item} />;
          })}
        </div>
        <button
          className="absolute right-1 bottom-1/2 z-20"
          onClick={scrollRight}
        >
          <Icon
            style={{ fontSize: "30px", color: "gray" }}
            icon="ps:right"
          />
        </button>
      </div>
    </div>
  );
};
