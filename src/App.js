import './App.css';
import Hero from './Section/Hero';
import Navbar from "./Section/Navbar"
import { useState } from 'react';
import WhiteSection from './Section/WhiteSection';
import DarkSection from './Section/DarkSection';

function App() {

  const [isLoggedin, setisLoggedin] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 font-inter">
      <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin} />
      <Hero/>
      <WhiteSection/>
      <DarkSection/>
    </div>
  );
}

export default App;