import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Slider from '../../components/slider/slider';
import Banner from '../../components/banner/banner';
import Arrivals from '../../components/arrivals/arrivals';
import Footer from '../../components/footer/footer';

const home = () => {
  return (
    <>
    <Topbar/>
    <Slider/>
    <Banner/>
    <Arrivals/>
    <Footer/>
    </>
  )
}

export default home