import './App.css';
import React from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import WhyMe from './components/WhyMe';
import Hizmetler from './components/Hizmetler';

const App = () => {
  return (
    <>
    <div className='background'>
    <div className='background-image'>
      <div className='bgimg'></div>
    </div>
    <Header />
    <Banner />
    <WhyMe />
    <Hizmetler />
    </div>

    </>

  )
}

export default App