import indravLogo from "../assets/indravLogo.png";
const Footer = () => {
  return (
    <footer className="relative text-white px-6 pt-20 pb-10">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-row justify-between items-start gap-10">
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <img
            src={indravLogo}
            alt="Indrav Logo"
            className="h-32 w-auto object-contain" 
          />
        </div>

        {/* Links Right */}
        <div className="flex flex-row justify-between gap-20 flex-wrap">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">Product</li>
              <li className="cursor-pointer hover:text-white">Our Story</li>
              <li className="cursor-pointer hover:text-white">Testimonials</li>
              <li className="cursor-pointer hover:text-white">QNA</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-white mb-3">Help</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white">Contact Us</li>
              <li className="cursor-pointer hover:text-white">Our Policies</li>
              <li className="cursor-pointer hover:text-white">Account</li>
              <li className="cursor-pointer hover:text-white">Terms & Conditions</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-3">Social</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="cursor-pointer hover:text-white">Facebook</li>
              <li className="cursor-pointer hover:text-white">Instagram</li>
              <li className="cursor-pointer hover:text-white">Twitter</li>
              <li className="cursor-pointer hover:text-white">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-600 relative z-10" />

      {/* Bottom Row */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-100 gap-4">
        <div>© 2023 Fiance Move All rights reserved</div>
        <div className="flex gap-2 flex-wrap justify-center md:justify-end">
          <span className="hover:underline cursor-pointer">Terms & Conditions</span>|
          <span className="hover:underline cursor-pointer">Sitemap</span>|
          <span className="hover:underline cursor-pointer">Privacy Policy</span>|
          <span className="hover:underline cursor-pointer">Cookies Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
