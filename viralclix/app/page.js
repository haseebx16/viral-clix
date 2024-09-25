import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
       <section>
        <Nav/>
      </section>
      <section>
        <Hero/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Portfolio/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  );
}
