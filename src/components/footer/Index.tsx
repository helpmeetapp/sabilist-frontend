import React from 'react';

function Footer() {
  return (
    <footer className="h-full w-xcreen bg-[#2D2D2D] text-[#F8F9FF]">
      <div className="max-w-7xl mx-auto py-4 md:py-16 px-4 flex flex-col md:flex-row">
        <div className="md:w-[30%] py-8">Footer</div>

        <div className="md:w-[70%] flex flex-wrap gap-4 md:gap-12 lg:gap-16 md:justify-end md:mr-12">
          <div className="space-y-2">
            <h5 className="text-sm md:text-lg lg:text-xl font-bold">Product</h5>
            <ul className="text-[9px] md:text-sm lg:text-base font-normal space-y-2">
              <li>Overview</li>
              <li>Features</li>
              <li>Consultancy</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="text-sm md:text-lg lg:text-xl font-bold">Company</h5>
            <ul className="text-[9px] md:text-sm  lg:text-base font-normal space-y-2">
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="text-sm md:text-lg lg:text-xl font-bold">Support</h5>
            <ul className="text-[9px] md:text-sm  lg:text-base font-normal space-y-2">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="text-sm md:text-lg lg:text-xl font-bold">
              Follow us
            </h5>
            <ul className="text-[9px] md:text-sm  lg:text-base font-normal space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Thread</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
