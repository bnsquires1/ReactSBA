import React, { useContext } from "react";
import { CartContext } from "../ContextProvider";

const Product = ({ product }) => {
    const {dispatch} = useContext(CartContext)
    return (
        <div className="card" style="width: 20rem;">
            <img src={product.thumbnail} class="card-img-top" alt=".." />
             <div class="card-body">
                <h4 class="card-title">{product.title}</h4>
                <button class="btn btn-primary"
                onClick={() => dispatch({ type: "Add", product: product})}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default Product