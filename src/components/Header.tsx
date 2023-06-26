import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state: any) => state.cart);
  const quantity = cart.quantity;
  console.log(cart);
  const user= true
  return (
    <div className="bg-slate-200 flex flex-row justify-between p-2 align-middle">
      <p
        onClick={() => navigate(`/`)}
        className="text-2xl ml-5 hover:cursor-pointer"
      >
        The Anime Store.
      </p>
      <div className="flex flex-row mt-1 pr-4">
        <p>
          <input
            className="p-1 w-[250px] mr-5 rounded-md border-0"
            type="text"
            placeholder="Search"
          />
        </p>
        <button onClick={() => navigate(`/checkout`)} className="p-2 relative">
          <div className="absolute top-0 right-0 text-[10px] bg-red-600 text-white rounded-lg p-0 w-4 h-4">{quantity}</div>
          <Icon icon="mdi:cart" />
        </button>
        <button className="p-2">
          <Icon icon="mdi:user" />
        </button>
        <button onClick={() => navigate(`/login`)} className="p-2">
          {user ? <Icon icon="mdi:logout" /> : <Icon icon="mdi:login" />}
        </button>
      </div>
    </div>
  );
};

export default Header;
