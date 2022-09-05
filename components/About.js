import Image from "next/image";
import React from "react";
import { UilFacebookF, UilEnvelope } from "@iconscout/react-unicons";

const About = () => {
  return (
    <div
      id='about'
      className='max-w-[1240px] mt-24 md:mt-0 mx-auto p-4 flex flex-col items-center justify-center md:h-screen ease-in duration-500'
    >
      <h1 className='text-5xl font-bold text-primary'>About Us</h1>
      <div className='flex  flex-col items-center justify-center mt-8 lg:flex-row lg:justify-around'>
        <div className='text-center '>
          <div className='bg-heroImg bg-top bg-contain bg-no-repeat rounded-full h-56 w-56 border-2 border-secondary mx-auto lg:flex-1'></div>
          <div className='border-2 border-secondary rounded-md py-2 px-4'>
            <h2 className='text-secondary text-xl font-bold'>Emmy Tianna</h2>
            <p>Choreographer / Influencer / Actor / Poet / Musician</p>
            <p>C . E . O The DancepirationKE</p>
            <div className='mt-3'>
              <UilEnvelope className='mx-auto h-8 w-8' />
              <p className=''>emmytiana3933@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='text-center p-4 md:p-8 lg:w-1/2 lg:border-l-2 border-secondary'>
          <span className='text-lg'>
            <span className='text-primary font-bold'>The Dancepiration KE</span>{" "}
            is a dance movement started on 29
            <sup>th</sup> September 2020 in Nyeri by Emmy Tianna. It started as
            a dance crew known as TIANA DANCE HUB consisting of four ladies
            Tiana, Nelius Faith and Mitchelle who joined later. Tianna and her
            friend Alvin came up with an idea of starting dance classes which
            commenced on 1<sup>st</sup> November 2020 and the dance crew changed
            to become a movement all over Kenya. Tianna and the crew started
            working in Public Events, School Events, Gyms, Roadshows and other
            related jobs. It&apos;s purpose was and still is to inspire young
            talents mainly through dancing thus the name{" "}
            <span className='text-secondary font-bold'>Dance-Inspiration</span>.
            Right now The DancepirationKE, consist of dancers in Thika and
            Nyeri. The Team is looking forward in perticipating in local TV
            Programmes like 10/10, Teen republik, one love and in International
            events.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
