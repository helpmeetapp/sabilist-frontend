'use client';
import 'flowbite';

export default function LandingNavigation() {
  const navlinks = [
    {
      name: 'Guide',
      url: '/guide',
      className: 'block sm:hidden lg:block',
    },
    {
      name: 'Apprenticeship',
      url: '/apprenticeship',
      className: 'block sm:hidden lg:block',
    },
    {
      name: 'Discover',
      url: '/discover',
      className: 'block sm:hidden lg:block',
    },
    {
      name: 'Hire',
      url: '/hire',
      className: 'block sm:block',
    },
    {
      name: 'Best Picks',
      url: '/best-picks',
      className: 'block sm:block',
    },
    {
      name: 'Sell your skills',
      url: '/sell-your-skills',
      className: 'block sm:block',
    },
  ];

  return (
    <div className="bg-[url('/images/b1.png')] bg-no-repeat bg-center bg-cover">
      <div className=" bg-[rgba(0,0,0,0.5)]">
        <nav className="bg-transparent border-gray-200 dark:bg-transparent">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
              <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
                Sabilist
              </span>
            </a>

            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-white dark:focus:ring-white"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                {navlinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href="#"
                      className={`py-2 md:py-3 mb-2 md:mb-0 px-1 md:p-0 text-black md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#009379] md:dark:hover:text-[#009379] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${link.className}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="block md:hidden">
                  <button
                    type="button"
                    className="text-black hover:text-white border border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  py-2 px-2 w-full text-center dark:border-white dark:text-white dark:hover:text-gray-900 dark:hover:bg-white dark:focus:ring-white"
                  >
                    Sign in
                  </button>
                </li>
              </ul>
              <div className="hidden md:flex p-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="text-white hover:text-white border border-white hover:bg-gray-900 focus:ring-4 hover:border-black focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 ml-5 text-center  dark:border-white dark:text-white dark:hover:text-gray-900 dark:hover:bg-white dark:hover:border-black dark:focus:ring-white"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>

          <div className="p-20 text-center bg-transparent rounded-lg shadow sm:pt-[400px] dark:bg-transparent">
            <h5 className="mb-2 text-3xl md:text-4xl md:mx-[10%] lg:mx-[25%] font-bold text-white dark:text-white">
              Let the right{' '}
              <span className="text-[#009379]">Artisans help</span>, we sabi!
            </h5>
            <p className="mb-5 mt-5 text-base text-white sm:text-lg dark:text-white md:mx-[10%] lg:mx-[20%] xl:mx-[30%]">
              Excellent services and products delivery by the best, highly
              skilled artisans and professionals tailored to your needs.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0  rtl:space-x-reverse">
              <form className="flex max-w-lg w-[80%] mx-auto">
                <input
                  type="search"
                  id="search"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50  border-gray-300 text-black text-sm focus:ring-[#009379] focus:border-[#009379] block w-full p-2.5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#009379] dark:focus:border-[#009379] rounded-l-lg"
                  placeholder="Search for anything"
                />
                <button
                  type="submit"
                  className="text-white bg-[#009379] hover:bg-[#009379] rounded-r-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded- text-sm px-5 py-2.5 text-center dark:bg-[#009379] dark:hover:bg-[#009379] dark:focus:ring-[#009379]"
                >
                  <img src={'/images/svg/search.svg'} />
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
