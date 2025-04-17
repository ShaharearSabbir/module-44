import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navbarItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "About Us", url: "/about" },
  { id: 5, name: "Contact", url: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navbarItems.map((route) => (
    <li  key={route.id} className="px-10 mr-10">
      <a href={route.url}>{route.name}</a>
    </li>
  ));
  return (
    <nav className="flex justify-between mx-10 mt-4">
      <div onClick={() => setOpen(!open)} className="flex">
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
          <ul className={`bg-amber-300 md:hidden absolute duration-1000
            ${open ? "top-12" : "-top-40"}
            `}>{links}</ul>
        <h1 className="ml-4">MY Nav</h1>
      </div>
      <ul className="hidden md:flex justify-center">{links}</ul>
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
      <button>Sign in</button>
    </nav>
  );
};

export default NavBar;
