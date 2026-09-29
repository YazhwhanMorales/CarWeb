import React from "react";

export const Catalog = ({ products }) => {
  return (
    <div className=" flex bg-amber-50 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex gap-1 shadow shadow-gray-700 border border-s-gray-800 w-1/3 p-2 m-2  justify-center items-center  bg-white"
        >
          <div className=" flex flex-col ">
            <h3 className=" font-bold">{product.name}</h3>
            <span>disponibles: {product.quantity}</span>
            <span>{product.description}</span>
            <button className=" bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-md transition-colors">
              agregar al carrito
            </button>
          </div>
          <div>
            <img src={product.src} alt="producto" className=" max-w-50" />
          </div>
        </div>
      ))}
    </div>
  );
};
