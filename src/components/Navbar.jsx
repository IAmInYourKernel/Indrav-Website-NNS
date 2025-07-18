
import indravLogo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center ">
      {/* Left: Logo */}
      <div className="w-[130px] h-auto -mt-2">
        <img src={indravLogo} alt="Indrav Logo" className="w-full h-auto" />
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex space-x-6 text-l font-semibold text-white">
        <li>
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
        </li>
        <li>
          <a href="#products" className="hover:text-yellow-400 transition">Products</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-yellow-400 transition">QNA</a>
        </li>
      </ul>

      {/* Right: Contact Us button */}
      <a
        href="#contact"
        className="ml-4 bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
      >
        Contact Us
      </a>
    </nav>
  );
};

export default Navbar;
