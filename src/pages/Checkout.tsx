import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/cartRedux";

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  const products = cart.products;
  console.log(cart)
  const total = cart.total;
  const dispatch = useDispatch();
  const deleteFromCart = (id: any) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="p-2">
      <h1 className="text-center text-2xl">Checkout</h1>
      <div className="flex justify-center relative p-10">
        <div className="w-[700px]">
          {products.map((product: any) => {
            return (
              <div className="bg-slate-200 p-5 shadow-lg mb-5 flex justify-start relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="min-w-[200px] h-[200px]"
                />
                <div className="ml-10 relative w-full">
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
        <div className="bg-slate-200 p-5 shadow-lg w-[200px] h-[200px] grid place-items-center absolute right-10 top-10">
          <p>
            <strong>Total:</strong> Rs {total}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
