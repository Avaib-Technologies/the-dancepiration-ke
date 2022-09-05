import React from "react";
import Typed from "react-typed";
import Link from "next/Link";

const Hero = () => {
  return (
    <div className='h-screen bg-heroImg bg-top bg-contain bg-no-repeat bg-fixed text-center flex flex-col items-center justify-center '>
      <div className='bg-bgColor/80 max-w-[1240px] p-4 backdrop-blur-md mx-auto mt-24 md:mt-48'>
        <h2 className='text-xl pb-2'>
          Hi? I'm <span className='text-primary font-bold'>Tee</span> Founder of
        </h2>
        <h1 className='text-4xl font-bold text-primary pb-2'>
          The DancepirationKE
        </h1>
        <h3 className='text-lg'>Simply Dance-Inspiration</h3>
        <p className='text-xl'>
          A dance movement with a purpose of inspiring and impacting young
          talents through dancing.
        </p>
        <h2 className='text-lg mt-4 md:mt-2'>Interested in any of these?</h2>
        <span className='text-2xl mt-2'>
          <span className='text-secondary font-bold'>
            <Typed
              strings={[
                "Dance Classes",
                "Aerobics/Zumba Dance Fitness",
                "Video Shoots",
                "Event Hyping",
                "Gigs",
                "Rigs",
                "Kids/Drama Festivals",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </span>
        <div className='mt-8 md:mt-3 md:mb-12'>
          <Link href='#services'>
            <button className=' px-3 py-2 border-2 border-primary text-primary mr-4'>
              More Details
            </button>
          </Link>
          <Link href='#contacts'>
            <button className=' px-4 py-2  bg-primary '>Let's Work</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
