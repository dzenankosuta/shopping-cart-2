import React, { useContext } from "react";
import "./CartCards.css";
import DeleteButton from "../Button/DeleteButton";
import { AppContext } from "../../context/AppContext";

export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  quantity,
}) {
  const { deleteFromCart, increase, decrease } = useContext(AppContext);

  return (
    <div className="cart-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-details">
        <div className="product-name-div">
          <h2 className="productName">{productName}</h2>
        </div>

        <div className="product-adder">
          <button
            className="btn"
            onClick={() => {
              decrease(id);
            }}
            style={{ width: 30 }}
          >
            -
          </button>
          <div className="product-display">
            <p className="productPrice">Price: {productPrice * quantity}$</p>
            <p className="product-quantity">Quantity: {quantity}</p>
          </div>
          <button
            className="btn"
            onClick={() => {
              increase(id);
            }}
            style={{ width: 30 }}
          >
            +
          </button>
          <div></div>
        </div>

        <DeleteButton
          className="delete-btn"
          onDelete={() => {
            deleteFromCart(id);
          }}
        />
      </div>
    </div>
  );
}
