import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UilInstagram,
  UilYoutube,
  UilFacebookF,
  UilEnvelope,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className=' z-45 mt-24 mx-auto w-full flex flex-col items-center justify-center border-t border-slate-700'>
      <div className='upper grid grid-cols-1 lg:grid-cols-3 gap-4 text-center place-items-center bg-bgColor my-8'>
        <Image src='/logo.png' width={250} height={105} />
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
          <Link href='/'>Home</Link>
          <Link href='#about'>About</Link>
          <Link href='#services'>Services</Link>
          <Link href='/gallery'>Gallery</Link>
          <Link href='#contacts'>Contacts</Link>
        </div>
        <div className='flex items-center justify-evenly w-1/2 mx-auto'>
          <Link href='https://www.youtube.com/channel/UCgZ_PqSA8W5t_26DW1Dt7gw'>
            <a>
              <UilYoutube className='h-8 w-8 hover:fill-red-600' />
            </a>
          </Link>
          {/* <Link href=''>
            <a>
              <UilFacebookF className='h-8 w-8 hover:fill-blue-600' />
            </a>
          </Link> */}
          <Link href='https://www.instagram.com/thedancepirationke/'>
            <a>
              <UilInstagram className='h-8 w-8 hover:fill-pink-600' />
            </a>
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-2 place-items-center'>
        <p>Developed by devHinga @ bitNET Technologies</p>
        <div className='text-center grid grid-cols-1 gap-4'>
          <Link href='https://www.instagram.com/bitnet_technologies/'>
            <a>
              <UilInstagram className='h-8 w-8 hover:fill-pink-600' />
            </a>
          </Link>
          {/* <Link href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHNVcrpRCGhZWKmQQGvwHBNhnlPGSDVVRFrshjgzRsMCssMglZqLNzhllnCjdGmgMgZg'>
            <a>
              <UilEnvelope className='h-8 w-8 hover:fill-pink-600' />
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
