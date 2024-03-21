import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Nabvar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="what we offer"></Title>
        <Programs></Programs>
        <About></About>
        <Title subTitle="Gallery" title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subTitle="Testimonial" title="what our student say"></Title>
        <Testimonials></Testimonials>
        <Title subTitle="Contact us" title="get in touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
