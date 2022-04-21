import React from "react";
import Close from "./Component/svg/bars-solid.svg";
import Menu from "./Component/svg/xmark-solid.svg";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>
            <a href="/">Citizen</a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Login / Register</a>
          </li>
          <li>
            <img src={Close} alt="close_icon" width="30" />
          </li>
        </ul>
        <div className="menu">
          <img src={Menu} alt="menu_icon" width="30" />
        </div>
      </header>
      <section>
        <div className="products">
          <div className="card">
            <a href="/">
              <img
                src="https://picsum.photos/200/300"
                alt=""
              />
            </a>
            <div className="box">
              <h3 className="watch product 01">
                <a href="/">Watch Product 01</a>
              </h3>
              <p>Description</p>
              <h4>$100</h4>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
