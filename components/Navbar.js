import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='sticky top-0 z-40  bg-bgColor flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  lg:bg-gradient-to-b lg:from-bgColor lg:to-transparent'>
      <Image src='/logo.png' width={270} height={125} />
      <ul className='hidden lg:flex font-thin items-center'>
        <li className='p-4'>
          <Link href='/'>Home</Link>
        </li>
        <li className='p-4'>
          <Link href='#about'>About</Link>
        </li>
        <li className='p-4'>
          <Link href='#services'>Services</Link>
        </li>
        <li className='p-4'>
          <Link href='/gallery'>Gallery</Link>
        </li>

        <li className='p-4'>
          <Link href='#contacts'>Contacts</Link>
        </li>
        <li>
          <Link href='#contacts'>
            <button className='bg-secondary py-2 px-4 text-bgColor font-bold rounded-md'>
              Let's Work Together
            </button>
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? (
          <UilMultiply className='h-8 w-8' />
        ) : (
          <UilBars className='h-8 w-8' />
        )}
      </div>
      <div
        className={
          nav
            ? "z-50 fixed left-0 top-0 w-full h-full text-left px-4 py-8 mt-24 bg-bgColor ease-in-out duration-500"
            : "z-50 fixed mt-24 left-[-100%] "
        }
      >
        <ul onClick={handleNav} className='w-full text-center text-lg'>
          <li className='px-4 py-6 border-b border-gray-600'>
            <Link href='/'>Home</Link>
          </li>
          <li className='px-4 py-6 border-b border-gray-600'>
            <Link href='#about'>About</Link>
          </li>
          <li className='px-4 py-6 border-b border-gray-600'>
            <Link href='#services'>Services</Link>
          </li>
          <li className='px-4 py-6 border-b border-gray-600'>
            <Link href='/gallery'>Gallery</Link>
          </li>

          <li className='px-4 py-6 border-b border-gray-600'>
            <Link href='#contacts'>Contacts</Link>
          </li>
          <li>
            <Link href='#contacts'>
              <button className='bg-secondary py-2 px-4 mt-6 text-bgColor font-bold rounded-md'>
                Let's Work Together
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
