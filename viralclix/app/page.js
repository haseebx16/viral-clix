import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

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
    </>
  );
}
