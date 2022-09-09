import React from "react";
import { UilCheck } from "@iconscout/react-unicons";
import Link from "next/link";

const Priceplan = () => {
  const pricingPlans = [
    {
      title: "Light",
      price: "30",
      currency: "USD",
      period: "/Week",
      description:
        "Warm ups(Zumba 20mins), Couple Dances(Salsa, Kizomba, Bachata(20mins))",
      features: ["max 2 people ", "limited Dance Style"],
      cta: "Start Your Trial",
      mostPopular: false,
    },
    {
      title: "Standard",
      price: "45",
      currency: "USD",
      period: "/Week",
      description: "Warm ups(Zumba), Couple Dances(Salsa, Kizomba, Bachata)",
      features: [
        "Maximum 4 people",
        "limited Dance Styles",
        "Paid Weekly",
        "3 hours per day",
      ],
      cta: "Start Your Trial",
      mostPopular: true,
    },
    {
      title: "Premium",
      price: "70",
      currency: "USD",
      period: "/Week",
      description:
        "Zumba Dance Fitness, Aerobics Session, Couple Dances(Salsa,Kizomba,Bachata) e.t.c",
      features: [
        "Group Package",
        "Minimum 7 people",
        "4 Hours per Day",
        "Paid Weekly",
        "Unlimited Dance Styles",
      ],
      cta: "Start Your Trial",
      mostPopular: false,
    },
  ];
  return (
    <div className='relative px-3 md:px-6 pb-3 md:pb-6'>
      <div className='absolute  flex flex-col inset-0'>
        <div className='flex-1'></div>
        <div className='bg-[#011c31] flex-1'></div>
      </div>
      <div className='grid md:grid-cols-3 md:place-items-start gap-12 md:gap-8 mt-16 '>
        {pricingPlans?.map((plan) => (
          <div
            className='bg-bgColor flex flex-col relative  border-2 border-secondary p-8 rounded-2xl'
            key={plan.title}
          >
            <h3 className='text-center text-lg font-semibold leading-5 text-secondary'>
              {plan.title}
            </h3>
            {plan.mostPopular && (
              <h4 className='absolute top-0 left-1/3 -translate-y-1/2 text-sm bg-secondary text-bgColor font-semibold tracking-wide shadow-sm rounded-full px-3 py-0.8 '>
                Most Popular
              </h4>
            )}
            <span className='mt-4 font-light text-sm leading-6'>
              {plan.description}
            </span>
            <div className='mt-4 bg-[#011c31] p-4 rounded-md -mx-3'>
              <span className='flex items-center justify-between text-md font-semibold text-slate-500'>
                <span>{plan.currency}</span>
                <span className='text-3xl text-slate-100'> ${plan.price}</span>
                <span> {plan.period}</span>
              </span>
            </div>
            <ul className='flex-1 mt-6 space-y-4'>
              {plan.features.map((feature) => (
                <li
                  className='flex items-center text-slate-400 text-md leading-6'
                  key={feature}
                >
                  <UilCheck className='h-5 w-5 mr-2 shrink-0 text-secondary' />
                  {feature}
                </li>
              ))}
            </ul>
            <Link className='mx-auto' href='/#contacts'>
              <button
                className={`  font-semibold mt-8 w-full px-6 py-4 rounded-lg text-center shadow-md 
            ${
              plan.mostPopular
                ? "bg-secondary text-bgColor hover:bg-gradient-to-r from-secondary to-primary ease-in-out duration-500"
                : "border-2 border-secondary text-secondary hover:bg-gradient-to-r from-secondary to-primary hover:text-bgColor"
            }`}
              >
                {plan.cta}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

//   const data = await fetch(url);
//   const pricingPlans = await data.json();

//   console.log(pricingPlans);
//   return { props: { pricingPlans } };
// }

export default Priceplan;
