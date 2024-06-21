import React, {createContext, useReducer} from "react";
import CartReducer from "./CartReducer";

const CartContext = createContent()

const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, [])
    return ( 
      <CartContext.Provider value ={{cart, dispatch}}>
        {children}
      </CartContext.Provider>
     )
}
export default ContextProvider