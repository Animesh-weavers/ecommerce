import React from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Components/DataProvider";
import Details from "./Components/Details";
import Cart from "./Components/Cart";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Details />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
