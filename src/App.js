import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutimage from './images/about.png';
import aboutimage1 from './images/download.png';
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Easy to Maintain Track' button='Know More'/>
      <About image={aboutimage1} title='Easily Fet Details' button='Know More'/>
      <Contact/>
    </div>
  );
}

export default App;
