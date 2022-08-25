import { useStateValue } from "./StateProvider";
import React from "react";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";

const Subtotal = ({ props }) => {
  const [state, reducer] = useStateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({state.basket.length} items):
        <strong>$ {getBasketTotal(state.basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains Gift
      </small>
      <button
        onClick={(e) => props.history.push("/payment")}
        className="subtotal__button"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default Subtotal;
