import React from "react";

import Link from "next/link";

import {
  UilInstagram,
  UilYoutube,
  UilFacebookF,
  UilTwitter,
} from "@iconscout/react-unicons";

const contacts = () => {
  return (
    <div id='contacts' className='max-w-[1240px] mx-auto p-4 md:h-screen mt-24'>
      <h1 className='text-5xl text-primary text-center'>Get In Touch</h1>
      <h3 className='text-lg text-center mt-16 '>
        Thank you for showing interest, you can inquire if we can work on
        something amazing together. I’d really love to hear from you!
      </h3>
      <div className='text-center'>
        <h2 className='text-center text-2xl mt-4 text-primary mb-4 font-semibold '>
          Fill the form Let&apos;s Talk!
        </h2>
      </div>
      <div className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 border-dashed border-t-2'>
        <div className='w-full bg-background2 py-7 rounded-xl'>
          <form
            action='https://formsubmit.co/81ff1134b1766463562f5c094fbb1455@gmail.com'
            method='POST'
            className=' w-full flex flex-col items-left justify-evenly space-y-5
              text-left mx-auto px-3   font-bold'
          >
            <label className='text-secondary' htmlFor='Name'>
              Name
            </label>
            <input
              className='outline-none h-9 rounded-md text-black'
              type='text'
              id='first'
              name='name'
              required
            />
            <label className='text-secondary' htmlFor='email'>
              Email
            </label>
            <input
              className='outline-none h-9 rounded-md text-black'
              type='email'
              id='last'
              name='email'
              required
            />
            <label className='text-secondary' htmlFor='message'>
              Message
            </label>
            <textarea
              className='outline-none rounded-md text-black'
              name='message'
              id=''
              cols='30'
              rows='5'
              required
            ></textarea>
            <button
              className='p-4 bg-secondary text-bgColor rounded-md'
              type='submit'
            >
              Send Message
            </button>
          </form>
        </div>
        <div className=''>
          <p className='text-xl text-center mt-9 mx-3 md:mx-0'>
            Feeling social? Find us on these online spaces too!
          </p>
          <div className='flex flex-row justify-center items-center space-x-4  content-center mt-4 p-5'>
            <Link href='https://www.youtube.com/channel/UCgZ_PqSA8W5t_26DW1Dt7gw'>
              <a>
                <UilYoutube className='h-11 w-11 hover:fill-red-600' />
              </a>
            </Link>
            {/* <Link href=''>
              <a>
                <UilFacebookF className='h-11 w-11 hover:fill-blue-600' />
              </a>
            </Link> */}
            <Link href='https://instagram.com/thedancepirationke/'>
              <a>
                <UilInstagram className='h-11 w-11 hover:fill-pink-600' />
              </a>
            </Link>
            {/* <Link href=''>
              <a>
                <UilTwitter className='h-11 w-11 hover:fill-brightRose' />
              </a>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contacts;
