import React from "react";
import Header from "./Component/Header";
import Products from "./Component/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataProvider from "./Component/DataProvider";
import Details from "./Component/Details";

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <section>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<Details />} />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
};

export default App;
