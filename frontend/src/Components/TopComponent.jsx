import React, { useState } from 'react';
const TopComponent=()=>{
      const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return(
            <div >
           <div className=" text-white lg:text-lg text-sm flex pb-2 bg-black pt-5 pr-8 justify-between scroll-smooth lg:hidden">
            <img src={require("../Assets/klogo4.png")} className="lg:h-10 h-8 lg:ml-20 ml-8 mr-10" alt=""/>
      <button
        className="text-white hover:text-white focus:outline-none focus:text-white h-8"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
          <a
            href="/#home"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="/details"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Portifolio
          </a>
          <a
            href="/ourteam"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Our Team
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
      </div >
        <div className="text-white lg:text-lg text-sm bg-black h-20 pt-5 pr-20 justify-between scroll-smooth hidden lg:flex ">
             <img src={require("../Assets/klogo4.png")} className="lg:h-12 h-8 lg:ml-20 ml-8 lg:mr-0 mr-10" alt=""/>
            <div className=" text-white lg:text-lg text-sm flex ">
                 <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="/#home">Home</a></p>
                 <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="/details">About</a></p>
                 <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="/portfolio">Portfolio</a></p>
                                  <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="/ourteam">Our Team</a></p>
                 <p className="mr-3 lg:mr-8 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-red "><a href="#contact">Contact</a></p>
             </div>
         </div>
    
    </div>

    )
}
 
export default TopComponent 