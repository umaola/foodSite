import { useState } from 'react'
import './App.css'
import Appbar from './assets/components/appbar/Appbar';
import Secondnav from './assets/components/secondnav/Secondnav';
import Banner from './assets/components/banner/Banner';
import Aboutus from './assets/components/aboutus/Aboutus';
import Thumbnailsection from './assets/components/thumbnailsection/Thumbnailsection';
import Menu from './assets/components/menub/Menu';
import Card from './assets/components/card/Card';
import Footer from './assets/components/footer/Footer';
// import Blog from './assets/components/blog/Blog';

import Menuimage from './assets/components/menub/chicken.jpg';
import secondImage from './assets/components/menub/second.jpg';
import thirdImage from './assets/components/menub/third.jpg';

import firstBannerImage from './assets/components/banner/images/banner.jpg';

function App() {

    const firstMenuTitle = 'Peanut butter';
    const secondMenuTitle = 'Pumpkin pie';
    const thirdMenuTitle = 'Jambalaya';

    const firstPrice = 45;
    const secondPrice =35;
    const thirdPrice = 50;
  
    //BETTER WAY USING ARRAY
    const pictures =[Menuimage, secondImage, thirdImage];
    const packageName = ['Basic', 'Standard', 'Premium'];
    const foodPrice = [35, 50, 45]
    const imageForBanners = [firstBannerImage];

    const aboutSectionB = ['ABOUT US', 'SERVICE', 'BLOG'];
    const aboutHeading = ['ABOUT US', 'SERVICE', 'BLOG'];

    return (
    <div style={{overflow:'hidden'}}>
      <Appbar/>
      <Secondnav/>
      <Banner bannerImage = {imageForBanners[0]}/>
      <Aboutus backgroundText ={aboutSectionB[0]} heading={aboutHeading[0]}/>
      <Thumbnailsection/>
      <Aboutus backgroundText ={aboutSectionB[1]} heading={aboutHeading[1]}/>
      <Menu foodAvailable ={firstMenuTitle} foodPrice= {firstPrice} foodImage ={pictures[0]}/>
      <Menu foodAvailable ={secondMenuTitle}foodPrice= {secondPrice} foodImage ={pictures[1]}/>
      <Menu foodAvailable ={thirdMenuTitle} foodPrice= {thirdPrice} foodImage ={pictures[2]}/>

      <div className='package-section'>
        <Card package ={packageName[0]} packagePrice ={foodPrice[0]}/>
        <Card package ={packageName[1]} packagePrice ={foodPrice[1]}/>
        <Card package ={packageName[2]} packagePrice ={foodPrice[2]}/>
      </div>
      <Aboutus backgroundText ={aboutSectionB[2]} heading={aboutHeading[2]}/>
      {/* <Blog/> */}
      <Footer/>
    </div>
    
   )
}


export default App
