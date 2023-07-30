import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import Card from "./Card";

export const Slider = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<any>(null);
  const dispatch= useDispatch()

  const [products, setProducts] = useState<any>([]);

  const getProducts = async () => {
    try {
      const res = await publicRequest.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

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
    <div className="ml-3 mr-3 mt-5">
      <div className="flex flex-row justify-between ml-5 mr-5">
        {/* <p className="text-2xl font-bold">Trending</p> */}
        {/* <button>View all</button> */}
      </div>
      <div className="flex flex-row relative w-full bg-slate-100">
        <button
          className="absolute left-0 bottom-1/2 z-20"
          onClick={scrollLeft}
        >
          <Icon
            style={{ fontSize: "30px", color: "gray" }}
            icon="icon-park-outline:left-c"
          />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row pl-1 pr-1 overflow-x-scroll relative ml-5 mr-5"
          id="slider"
        >
          {products.map((item: any, idx: any) => {
            return <Card key={idx} item={item} />;
          })}
        </div>
        <button
          className="absolute right-0 bottom-1/2 z-20"
          onClick={scrollRight}
        >
          <Icon
            style={{ fontSize: "30px", color: "gray" }}
            icon="icon-park-outline:right-c"
          />
        </button>
      </div>
    </div>
  );
};
