import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./container/About";
import FactsDiv from "./container/Facts";
import Feature from "./container/Feature";
import Newsletter from "./container/Newsletter";
import Projects from "./container/Projects";
import Start from "./container/Start";
function App() {
  return (
    <div>
      <Header />
      <Feature />
      <About />
      <FactsDiv />
      <Services />
      <Newsletter />
      <Projects />
      <Start />
    </div>
  );
}
export default App;
