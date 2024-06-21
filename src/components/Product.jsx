import React, { useContext } from "react";
import { CartContext } from "../ContextProvider";

const Product = ({ product }) => {
    const {dispatch} = useContext(CartContext)
    return (
        <div className="card" style="width: 20rem;">
             <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <button className="btn btn-primary"
                onClick={() => dispatch({ type: "Add", product: product})}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product