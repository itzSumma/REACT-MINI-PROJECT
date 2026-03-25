import React from 'react';

const navData = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    return (
        <nav>
            {/* <ul className='flex '>
<li className='mr-10'><a href="/home">Home</a></li>
<li className='mr-10'><a href="/about">About Us</a></li>
<li className='mr-10'><a href="/contact">Contact</a></li>
<li className='mr-10'><a href="/blog">Blog</a></li>

            </ul> */}

            <ul className='flex'>
                {
                    navData.map(route =><li key={route.id} className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;