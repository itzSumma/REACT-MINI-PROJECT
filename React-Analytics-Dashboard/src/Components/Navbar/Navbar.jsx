import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navData = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navData.map((route) => (
    <li key={route.id} className="mr-10">
      <a href={route.path}>{route.name}</a>
    </li>
  ));
  return (
    <nav className="flex justify-between px-15">
      <span className="flex md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X></X> : <Menu></Menu>}
       
       <ul className="md:hidden">
            {links}
            </ul>
        <h3 className="ml-5">My Navbar</h3>
      </span>
      
      <ul className="md:flex hidden">{links}</ul>
      <button>Sign In</button>
      {/* <ul className='flex '>
<li className='mr-10'><a href="/home">Home</a></li>
<li className='mr-10'><a href="/about">About Us</a></li>
<li className='mr-10'><a href="/contact">Contact</a></li>
<li className='mr-10'><a href="/blog">Blog</a></li>

            </ul> */}
    </nav>
  );
};

export default Navbar;
