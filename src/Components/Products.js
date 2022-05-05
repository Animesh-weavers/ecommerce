import React, { useContext } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product._id}>
          <Link to={`/products/${product._id}`}>
            <img src={product.images[0]} alt="" />
          </Link>
          <div className="box">
            <h3 title={product.title}>
              <Link to={`/${product._id}`}>{product.title}</Link>
            </h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
            <div style={{ display: 'flex', 'justifyContent': 'space-around' }}>
              {product.key === false ? (
                <button
                  onClick={() => {
                    product.key = true;
                    addCart(product._id);
                  }}
                  style={{ 'marginRight': '1rem' }}
                >
                  Add to cart
                </button>
              ) : (
                <Link to='/cart'>
                  <button style={{ 'width':'90%' }}>Go To Cart</button>
                </Link>
              )}
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
