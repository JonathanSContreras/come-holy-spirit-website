import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/hero'
import Products from "./components/products/Products"
import MostRecentDrops from './components/mostRecentDrops/MostRecentDrops'
import UnderConstructionPage from './components/under-construction-page/UnderConstructionPage'
import Homepage from './components/homepage/Homepage'
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Products /> */}
      {/* <MostRecentDrops /> */}
      {/* <Homepage /> */}
      {/* <Hero /> */}
      <UnderConstructionPage />
    </div>
  )
}

export default App