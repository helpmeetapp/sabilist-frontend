import Image from 'next/image';
import { FC } from 'react';

import Link from 'next/link';
import features from '@/data/features';
import testimonials from '@/data/testimonials';

export default function Home() {
  const categories = [
    {
      name: 'Construction',
      icon: '/images/svg/construction.svg',
      link: '',
    },
    {
      name: 'Designs & Craft',
      icon: '/images/svg/crafts.svg',
      link: '',
    },
    {
      name: 'Catering',
      icon: '/images/svg/catering.svg',
      link: '',
    },
    {
      name: 'Photography',
      icon: '/images/svg/photography.svg',
      link: '',
    },
    {
      name: 'Renovation',
      icon: '/images/svg/renovation.svg',
      link: '',
    },
    {
      name: 'Lifestyle & Beauty',
      icon: '/images/svg/beauty.svg',
      link: '',
    },
    {
      name: 'Auto',
      icon: '/images/svg/auto.svg',
      link: '',
    },
  ];

  const catalogues = [
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
    {
      id: 1,
      service: 'Rewire',
      user: {
        name: 'Engine Freak',
        picture: '/images/user/engine-freak.png',
        tierImage: '/images/tier1.svg',
      },
      price: 'From N4,200',
      desc: 'I can fix your car faulty wiring',
      image: '/images/services/rewire.png',
    },
  ];

  return (
    <main>
      {/* Categories */}
      <div className="">
        <ul className="flex flex-wrap bg-[#F8F9FF] justify-center text-sm font-medium text-center text-black dark:text-gray-400 p-4">
          {categories.map((category) => (
            <li className="me-2" key={category.link}>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <div className="flex">
                  <img src={category.icon} className="mr-2" />
                  <p className={'text-base'}>{category.name}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Catalogues */}
      <section className="bg-[#F8F9FF] pb-20">
        <div className="justify-between mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-auto p-2 px-[5%] lg:px-[10%]">
            {catalogues.map((catalogue) => (
              <div
                key={catalogue.id}
                className="w-full md:max-w-sm rounded-lg shadow mt-10"
              >
                <a href="#">
                  <img
                    className="mb-3  w-full mx-auto"
                    src={catalogue.image}
                    alt={catalogue.image}
                  />
                </a>
                <div className="pb-5 px-5">
                  <div className="flex justify-between">
                    <a href="#" className="flex text-black">
                      <img
                        src={catalogue.user.picture}
                        className="h-15 w-15 object-contain"
                      />
                      <div className="ml-2">
                        <p className="font-semibold">{catalogue.service}</p>
                        <p className="">{catalogue.user.name}</p>
                      </div>
                    </a>
                    <img src={catalogue.user.tierImage} alt={'tierImage'} />
                  </div>
                  <div className="py-3">
                    <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
                      {catalogue.price}
                    </h5>
                    <p className="text-gray-900 my-3 dark:text-white">
                      {catalogue.desc}
                    </p>
                    <div className="flex space-x-2">
                      <a href="" className="flex text-black">
                        <img
                          src="/images/svg/like.svg"
                          alt={'Icon'}
                          className="mr-1"
                        />
                        33
                      </a>
                      <a href="" className="flex text-black">
                        <img src="/images/svg/message.svg" alt={'Icon'} />
                      </a>
                      <a href="" className="flex text-black">
                        <img
                          src="/images/svg/star.svg"
                          alt={'Icon'}
                          className="mr-1"
                        />
                        24
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature */}
      <section className="h-full w-full xl:mx-auto py-8 p-2 px-[5%] lg:px-[5%]">
        <div className=" bg-white ">
          <h2 className="text-center text-[26px] md:text-[38px] text-[#2D2D2D] font-bold py-4">
            Everything you need, is right here
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {features.map((feature) => (
              <div
                key={feature.icon}
                className="p-2 md:p-4 bg-[#F8F9FF] w-[48%] md:w-[30%] lg:w-[20%] flex flex-col items-center justify-center gap-2 rounded-2xl"
              >
                <div className="rounded-2xl bg-[#E5F4F2] p-4">
                  <img src={feature.icon} alt={feature.name} />
                </div>
                <p className="text-sm md:text-base xl:text-lg text-[#2D2D2D]">
                  {feature.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#F8F9FF]">
        <div className="w-full h-full xl:mx-auto p-2 px-[5%] lg:px-[6%]">
          <div className="p-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:mx-12">
              <div className="w-full md:w-1/2 flex flex-col justify-center text-[#2D2D2D]">
                <h3 className="text-[23px] lg:text-3xl xl:text-4xl font-bold ">
                  A <span className="text-[#009379]">lasting Solution</span>
                  <br /> to your urgent needs
                </h3>

                <div className="space-y-2">
                  <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                    <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                      Express quality service delivery
                    </h4>
                    <p className="text-xs xl:text-sm">
                      Connect with the right artisan to deliver the services you
                      need within minutes.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                    <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                      Best for your budget
                    </h4>
                    <p className="text-xs xl:text-sm">
                      Services are top rated and top vetted. Prices are best and
                      affordable, project based and competitive.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                    <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                      Secure payments
                    </h4>
                    <p className="text-xs xl:text-sm">
                      All payments are secured. You know what you will pay
                      upfront. No payment is released until you approve the
                      work.
                    </p>
                  </div>

                  <div className="border-l-4 border-l-[#009379] px-2 space-y-1 lg:p-2">
                    <h4 className="text-base xl:text-lg text-[#009379] font-semibold">
                      24/7 support
                    </h4>
                    <p className="text-xs xl:text-sm">
                      Got questions, queries, complaints or need information or
                      help? We are available 24/7 to attend to you, anywhere!
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <img
                  src={'/images/services/smiling-mechanic.png'}
                  alt="Smiling mechanic with arms crossed holding a spanner"
                  className="w-full rounded"
                />

                {/* <Button label="Learn More" primary extraLarge /> */}

                <button className="w-full bg-[#009379] text-[#F8F9FF] rounded py-3 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className=" bg-[#F8F9FF]">
        <div className="h-full w-full xl:mx-auto py-8 p-2 px-[5%] lg:px-[9%]">
          <div className="p-4">
            <h2 className="text-center text-[26px] md:text-[38px] text-[#2D2D2D] font-bold py-4">
              Real Stories from Satisfied Customers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl flex flex-col items-center text-center p-4 lg:p-8 gap-4"
                >
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <p className="text-[20px] text-[#111827] font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-[14px] text-[#374151] font-light">
                      {testimonial.title}
                    </p>
                  </div>
                  <p className="text-[#2D2D2D] text-[16px] font-normal">
                    “{testimonial.message}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="h-full w-full xl:mx-auto ">
        <div className="pt-4 md:pt-0 px-[5%] lg:px-[10%] md:px-12 bg-[#2C1618] flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 py-4 text-center md:text-left md:py-4 xl:py-20 space-y-6 text-[#F8F9FF]">
            <h4 className="text-[26px] lg:text-[38px] font-bold ">
              Tell us what you do, get
              <br /> clients anywhere!
            </h4>
            <p className="text-base md:text-lg">
              Break limits and explore the endless possibilities
            </p>

            <button className="bg-[#009379] text-[#F8F9FF] py-3 px-8 rounded-2xl">
              Join Sabilist
            </button>
          </div>

          <div className="md:w-1/2 h-full">
            <img
              src={'/images/banner-img.png'}
              alt="Lady holding a xesophone"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
