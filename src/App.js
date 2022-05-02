import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Components/DataProvider";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Home from './Components/Home.js';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />

          <section>
            <Routes>
              <Route path="/" element={<Home />} />
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
