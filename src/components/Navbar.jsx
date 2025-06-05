"use client";  // Ensure it's a Client Component

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLink } from './NavLink'
import { Button } from './Button'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()
  const burgerRef = useRef(null)

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !burgerRef.current.contains(event.target)) {
        setIsMenuOpen(false)  // Close menu if clicked outside
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <nav className="flex items-center justify-between p-4 text-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logos/LongLogo.jpeg"  // Referencing the new logo
          alt="Logo"
          className="h-11 w-auto"
          width={350}  // Set the same width as the old logo
          height={80}  // Set the same height as the old logo
        />
      </Link>

      {/* Centered Links for Desktop */}
      <div className="hidden md:flex flex-grow justify-center space-x-8">
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/trainings">Trainings</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </div>

      {/* Enroll Now button for Desktop */}
      <Button href="/trainings" className="hidden md:block ml-4 rounded-lg">
        Enroll Now
      </Button>

      {/* Burger Menu Icon for Mobile (appears after the Enroll Now button) */}
      <div ref={burgerRef} className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`${isMenuOpen ? 'inline-flex' : 'hidden'} absolute top-0 left-0 w-full justify-center bg-white p-4 space-y-4 md:hidden`}
      >
        <NavLink href="/about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          About Us
        </NavLink>
        <NavLink href="/trainings" onClick={() => setIsMenuOpen(false)}>
          Trainings
        </NavLink>
        <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  )
}









// *********************************************************


// "use client";  


// import { useState } from 'react';

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-blue-900 text-white p-4">
//       <div className="max-w-screen-xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold">

//           {/* <span className="text-white">GENESIS TRAININGS</span> */}
//         </div>
//         <Link href="/" className="flex items-center">
//           <Image src={longLogo} alt="Logo" className="h-11 w-auto" />
//         </Link>

//         {/* Links for Desktop */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <a href="#" className="hover:text-gray-300">About Us</a>
//           <a href="#" className="hover:text-gray-300">Trainings</a>
//           <a href="#" className="hover:text-gray-300">Contact Us</a>
//           <button className="bg-blue-700 py-2 px-6 rounded hover:bg-blue-600 transition">Enroll Now</button>
//         </div>

//         {/* Burger Menu Icon for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button
//             className="text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-900 p-4`}>
//         <a href="#" className="block py-2 px-4 text-white hover:bg-blue-700">About Us</a>
//         <a href="#" className="block py-2 px-4 text-white hover:bg-blue-700">Trainings</a>
//         <a href="#" className="block py-2 px-4 text-white hover:bg-blue-700">Contact Us</a>
//         <button className="block w-full py-2 px-4 text-center bg-blue-700 rounded hover:bg-blue-600">
//           Enroll Now
//         </button>
//       </div>
//     </nav>
//   );
// }
