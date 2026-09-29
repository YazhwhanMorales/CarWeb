import React from "react";

export const Navbar = () => {
  return (
    <div className=" flex justify-center w-screen bg-blue-800 text-white">
      <ul className=" list-none flex gap-4 font-bold cursor-pointer">
        <li>
          <a> catalogo</a>
        </li>
        <li>
          <a> carrito</a>
        </li>
      </ul>
    </div>
  );
};
