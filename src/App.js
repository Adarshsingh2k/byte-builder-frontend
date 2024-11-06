import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#111b12]  bg-[radial-gradient(circle_at_center,rgba(85,236,88,0.1),transparent)]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
