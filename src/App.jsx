import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Products from "./pages/Products";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import "./index.css";
import bgImage from "./assets/Group.png";




const App = () => {
  return (
    <div 
      className="min-h-screen text-white bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    
    >
      <Navbar />
      <Home />
      <Products />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;

