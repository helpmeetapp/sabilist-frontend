import Image from 'next/image';

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
        <ul className="flex flex-wrap bg-[#D8D8D8] justify-center text-sm font-medium text-center text-black dark:text-gray-400 p-4">
          {categories.map((category) => (
            <li className="me-2" key={category.link}>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <div className="flex">
                  <img src={category.icon} className="mr-2" />
                  {category.name}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Catalogues */}

      <section className="bg-white">
        <div className=" flex flex-wrap justify-between mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto mb-10">
            {catalogues.map((catalogue) => (
              <div
                key={catalogue.id}
                className="w-full max-w-sm rounded-lg shadow mt-10"
              >
                <a href="#">
                  <img
                    className="mb-3 mx-auto"
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
                    <img src={catalogue.user.tierImage} />
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
                        <img src="/images/svg/like.svg" className="mr-1" />
                        33
                      </a>
                      <a href="" className="flex text-black">
                        <img src="/images/svg/message.svg" />
                      </a>
                      <a href="" className="flex text-black">
                        <img src="/images/svg/star.svg" className="mr-1" />
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
    </main>
  );
}
