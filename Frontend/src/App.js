import React, { useState, useEffect } from "react";
//import { commerce } from "./lib/commerce";

import Products from "./component/Products";
import Navbar from "./component/Navbar/Navbar";

//import { Products, Navbar } from "./component";

const App = () => {
  const [products, setProducts] = useState([]);
  //const [cart, setCart] = useState({});

  const [fetchcomplete, setFetchcomplete] = useState(false);

  const getProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/items?format=json&indent=true&pagination=false"
      );

      const data = await response.json();
      console.log("fetch", data);

      setProducts(data);
      setFetchcomplete(true);
    } catch (error) {
      console.log("my error is " + error);
    }
  };
  // const fetchCart = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8060/cart");

  //     const data = await response.json();
  //     console.log("fetch", data);

  //     setCart(data);
  //     setFetchcomplete(true);
  //   } catch (error) {
  //     console.log("my error is " + error);
  //   }
  // };

  useEffect(() => {
    getProducts();
    //fetchCart();
  }, []);
  //  console.log(product)
  //console.log(cart);

  if (!fetchcomplete) return <p>loading </p>;
  return (
    <div>
      <Products products={products} />
      <Navbar />
    </div>
  );
};

export default App;
