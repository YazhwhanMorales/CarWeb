import React from "react";
import { useState } from "react";
import { Catalog } from "./Catalog";
import { Cart } from "./Cart";
import foto1 from "../assets/camara.jpg";
import foto2 from "../assets/tripie.jpg";
import foto3 from "../assets/lente.jpg";
import foto4 from "../assets/micro.jpg";
export const CatCar = () => {
  const [products, setProducts] = useState([
    {
      name: "cámara",
      id: 1,
      quantity: 3,
      src: foto1,
      description: "cámara ultima generación",
    },
    {
      name: "tripie",
      id: 2,
      quantity: 5,
      src: foto2,
      description: "tripie para cámara profecional",
    },
    {
      name: "lente",
      id: 3,
      quantity: 7,
      src: foto3,
      description: "lente alta resolución",
    },
    {
      name: "microfono",
      id: 4,
      quantity: 2,
      src: foto4,
      description: "microfono inalambrico",
    },
  ]);
  const [productCart, setProductsCart] = useState([]);

  const addToCart = (id) => {};

  const removeFromCart = (id, quantity) => {};

  return (
    <div>
      <Catalog products={products} addToCart={addToCart}></Catalog>
      <Cart productsCart={productCart} removeFromCart={removeFromCart}></Cart>
    </div>
  );
};
