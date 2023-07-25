import React, { useState, useEffect } from "react";
import { userRequest } from "../requestMethods";

const tabButtonStyle =
  "bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full m-2";

const RenderUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const getAllUsers = async () => {
    const res = await userRequest.get("/users/");
    setAllUsers(res.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {allUsers.map((user: any) => {
        return (
          <div
            className="flex flex-row justify-between border-2 border-slate-400 p-2 m-2"
            key={user._id}
          >
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.isAdmin ? "Admin" : "User"}</p>
          </div>
        );
      })}
    </div>
  );
};

const RenderProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [animes, setAnimes] = useState([]);
  const getAllAnimes = async () => {
    const res = await userRequest.get("/animes");
    setAnimes(res.data);
  };
  const getAllProducts = async () => {
    const res = await userRequest.get("/products/");
    setAllProducts(res.data);
  };
  useEffect(() => {
    getAllProducts();
    getAllAnimes();
  }, []);
  const inputStyle= "border-slate-500 border-2 mb-1 p-2 rounded-md"
  return (
    <div className="m-2 p-2">
     <div className="flex flex-row justify-between">
      <form className="flex flex-col m-1 mt-2 p-1 w-[500px]">
        <p className="text-xl mb-2 bg-slate-300 w-fit p-1 rounded-md">Add Product</p>
        <input className={inputStyle} type="text" placeholder="title" />
        <input className={inputStyle} type="text" placeholder="desc" />
        <input className={inputStyle} type="text" placeholder="img" />
        <input className={inputStyle} type="text" placeholder="categories" />
        <input className={inputStyle} type="text" placeholder="price" />
        <select className={inputStyle}>
          {/* <option value={0}>Anime</option> */}
          {animes.map((item:any) => {
            return (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            );
          })}
        </select>
        <button className="bg-green-800 rounded-md text-white h-9">Add</button>
      </form>
      <div>
        Preview
      </div>
      </div>
      <p className="text-xl m-2 bg-blue-300 w-fit p-1 rounded-md">All Products</p>
      {allProducts.map((item: any) => {
        return (
          <div
            className="flex flex-row justify-between border-2 border-slate-400 p-2 m-2"
            key={item._id}
          >
            <p>{item.title}</p>
            <p>Rs. {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const Admin = () => {
  const [selectedTab, setSelectedTab] = useState(0); // 0: users, 1: products, 2: orders
  return (
    <div className="m-2 p-2">
    <p className="text-2xl text-center">Admin Panel</p>
      <div >
        <button
          onClick={() => setSelectedTab(0)}
          className={tabButtonStyle}
          style={{ backgroundColor: selectedTab == 0 ? "red" : "blue" }}
        >
          Users
        </button>
        <button
          onClick={() => setSelectedTab(1)}
          className={tabButtonStyle}
          style={{ backgroundColor: selectedTab == 1 ? "red" : "blue" }}
        >
          Products
        </button>
        <button
          onClick={() => setSelectedTab(2)}
          className={tabButtonStyle}
          style={{ backgroundColor: selectedTab == 2 ? "red" : "blue" }}
        >
          Orders
        </button>
      </div>
      {selectedTab == 0 ? (
        <RenderUsers />
      ) : selectedTab == 1 ? (
        <RenderProducts />
      ) : (
        <div>Orders</div>
      )}
    </div>
  );
};
