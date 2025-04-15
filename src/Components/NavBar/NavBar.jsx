import React from "react";

const navbarItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "About Us", url: "/about" },
  { id: 5, name: "Contact", url: "/contact" },
];

const NavBar = () => {
  return (
    <nav>
        <ul className="flex justify-center">
        {navbarItems.map((route) => (
        <li key={route.id} className="mr-10">
          <a href={route.url}>{route.name}</a>
        </li>
      ))}
        </ul>
      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
