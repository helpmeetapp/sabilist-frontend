import React from 'react';

function Footer() {
  return (
    <footer className="h-full w-xcreen bg-[#2D2D2D] text-[#F8F9FF]">
      <div className="max-w-7xl mx-auto pt-10 md:pt-16 px-4 flex flex-col md:flex-row">
        <div className="md:w-[30%]">
          <h5 className="text-2xl">Sabilist</h5>
        </div>

        <div className="md:w-[70%] w-full grid grid-cols-2 lg:grid-cols-4 text-xl mt-10 md:mt-0">
          <div className="space-y-2 mb-10">
            <h5 className="text-xl font-bold">Product</h5>
            <ul className="text-base font-normal space-y-2">
              <li>Overview</li>
              <li>Features</li>
              <li>Consultancy</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          <div className="space-y-2 mb-10">
            <h5 className="text-xl font-bold">Company</h5>
            <ul className="text-base font-normal space-y-2">
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>

          <div className="space-y-2 mb-10">
            <h5 className="text-xl font-bold">Support</h5>
            <ul className="text-base font-normal space-y-2">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="space-y-2 mb-10">
            <h5 className="text-xl font-bold">Follow us</h5>
            <ul className="text-base font-normal space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Thread</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="py-10">
          Copyright &copy; Sabilist 2024 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
