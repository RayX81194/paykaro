import styles from './style'; 
import NavBar from "./components/NavBar";
import Billing from './components/Billing'
import CardDeal from "./components/CardDeal";
import Business from "./components/Business";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>  

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats  />
        <Business />
        <Billing />
        <CardDeal /> 
        <Footer /> 
      </div>
    </div>
  </div>
  )
};

export default App;
