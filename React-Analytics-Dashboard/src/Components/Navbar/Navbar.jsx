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
    <li key={route.id} className="lg:mr-10 px-4 hover:bg-amber-400">
      <a href={route.path}>{route.name}</a>
    </li>
  ));
  return (
    <nav className="flex justify-between px-15 text-black">
      <span className="flex md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X></X> : <Menu></Menu>}
       
       <ul className= {`md:hidden absolute duration-700
        ${open? 'top-8': '-top-40'} bg-amber-300`}>
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
