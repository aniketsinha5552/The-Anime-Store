import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/cartRedux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  const user= useSelector((state:any)=>state.user)
  const products = cart.products;
  const total = cart.total;

  const navigate= useNavigate()
  const dispatch = useDispatch();
  const deleteFromCart = (id: any) => {
    dispatch(deleteProduct(id));
  };
  const proceedToCheckout=()=>{
    if(!user.currentUser){
      alert('Login to proceed')
      navigate('/login')
    }
  }
  return (
    <div className="p-2 min-h-[70vh]">
      <h1 className="text-center text-2xl">Checkout</h1>
      <div className="flex justify-center relative p-10 flex-col md:flex-row gap-10">
        <div className="flex-auto">
          {products.map((product: any) => {
            return (
              <div key={product._id} className="bg-slate-200 p-5 shadow-lg mb-5 flex flex-col justify-start relative md:flex-row">
                <img
                  src={product.img}
                  alt={product.name}
                  className="md:min-w-[200px] md:h-[200px] w-[250px] h-[250px]"
                />
                <div className="relative w-full md:ml-8 mt:2">
                  <p className="text-xl mb-2">{product.title}</p>
                  <p className="text-xl mb-2">
                    <strong>Rs.</strong> {product.price}
                  </p>
                  {product.color && (
                    <p className="text-lg mb-2">
                      <strong>Color:</strong>{" "}
                      <span
                      >
                        {product.color}
                      </span>
                    </p>
                  )}
                  {product.size && (
                    <p className="text-lg mb-2">
                      <strong>Size:</strong> {product.size}
                    </p>
                  )}
                  <p className="text-sm bg-red-500 rounded-md w-fit p-2 mb-5 text-white">
                    {product.anime}
                  </p>
                  <button
                    onClick={() => deleteFromCart(product._id)}
                    className="absolute right-0 bottom-0"
                  >
                    <Icon
                      style={{ fontSize: "20px" }}
                      icon="ic:baseline-delete"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-slate-200 p-5 shadow-lg md:w-[200px] md:h-[200px] grid place-items-center flex-1">
          <p>
            <strong>Total:</strong> Rs {total}
          </p>
          <button onClick={proceedToCheckout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
