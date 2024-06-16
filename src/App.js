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
    <Header />
    <Banner />
    <WhyMe />
    <Hizmetler />

    </div>

    </>

  )
}

export default App