import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
