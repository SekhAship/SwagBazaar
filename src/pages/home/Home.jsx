import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import Category from '../../components/catagory/catagory';
import HomePageProductCard from '../../components/HomePageProductCard/HomePageProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
// import Layout from '../../components/layout/Layout'

const Home = () => {
  const context=useContext(MyContext);
  console.log(context)
  const {name,roll}=context;

  return (
    <div>
       <Layout>
        <HeroSection/>
        <Category/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
        <Filter/>
       </Layout>
    </div>
  )
}

export default Home
