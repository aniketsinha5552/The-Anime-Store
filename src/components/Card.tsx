import React from 'react'
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Card = (props:any) => {
    const {item} = props
    const dispatch= useDispatch()
    const navigate = useNavigate();
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
         <div
                className="h-[320px] min-w-[230px] max-w-[230px] bg-slate-100 m-2 rounded-lg border-2 border-slate-400 hover:scale-105 transition duration-500 ease-in-out"
              >
                <img
                  onClick={() => navigate(`/product/${item._id}`)}
                  className="h-[210px] w-full rounded-t-lg"
                  src={item.img}
                />
                <p className="text-center mt-1">{item.title}</p>
                <div className="flex flex-row justify-between mt-1 pr-1 pl-1">
                  <p>Rs. {item.price}</p>
                  <button className="p-2" onClick={()=>addToCart(item)}>
                    <Icon icon="mdi:cart" />
                  </button>
                </div>
              </div>
  )
}

export default Card