import React from "react";

export default function Home(props) {
  console.log("Home", props);
  return (
    <div>
      {" "}
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://rukminim1.flixcart.com/image/416/416/ko0d6kw0/mobile/d/h/5/iphone-12-mini-mjqh3hn-a-apple-original-imag2k2xuuyfyusd.jpeg?q=70" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 15489, name: "i phone 12" })
            }
          >
            Add To Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
