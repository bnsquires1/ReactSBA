import React, { useContext } from "react";
import { CartContext } from "../../ContextProvider";
import CartProduct from '../components/CartProduct';
import { totalItem } from '../CartReducer'

export const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p}></CartProduct>
          ))}
        </div>
        <div className="col-4">
          <div className="bg-secondary p-3 text-white">
            <h5>Total Items: {totalItem(cart)}</h5>
            <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
