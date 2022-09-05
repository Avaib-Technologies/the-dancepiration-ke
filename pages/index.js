import About from "../components/About";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contacts />
    </div>
  );
}
