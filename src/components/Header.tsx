import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/userRedux";
import { emptyCart } from "../redux/cartRedux";

const Header = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantity = cart.quantity;
  console.log(cart);

  const logout = () => {
    if(user){
      let confirmLogout = window.confirm("Are you sure you want to logout?");
      if (!confirmLogout) return;
      dispatch(logoutUser());
      dispatch(emptyCart());
    } 
    navigate(`/login`);
  };

  const navigateToUser = () => {
    navigate(`/user`);
  };

  return (
    <div className="bg-slate-400 flex flex-col md:flex-row justify-between p-3 align-middle overflow-hidden w-full">
      <p
        onClick={() => navigate(`/`)}
        className="text-2xl ml-5 hover:cursor-pointer"
      >
        The Anime Store.
      </p>
      <div className="flex flex-row">
          <input
            className="pl-1 w-[300px] rounded-s-lg border-0 h-10"
            type="text"
            placeholder="Search"
          />
          <button className=" bg-slate-800 pl-2 pr-2 mb-1 text-white text-center align-middle rounded-e-lg h-10">
            <Icon icon="basil:search-outline" />
          </button>
        </div>
      <div className="flex flex-row mt-1 pr-4">    
        <button onClick={() => navigate(`/checkout`)} className="p-2 relative">
          <div className="absolute top-0 right-0 text-[10px] bg-red-600 text-white rounded-lg p-0 w-4 h-4">
            {quantity}
          </div>
          <Icon icon="mdi:cart" />
        </button>
        <button className="p-2" onClick={navigateToUser}>
          <Icon icon="mdi:user" />
        </button>
        <button onClick={logout} className="p-2">
          {user ? <Icon icon="mdi:logout" /> : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
