import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
   
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
           
           
          <DropdownButton
          style={{margin:5}}
      align="end"
      title="Categories"
      id="dropdown-menu-align-end"
      onSelect={(e)=>{setCategory(e);
        
      }}
    >
      <Dropdown.Item eventKey="null">All Categories</Dropdown.Item>
      <Dropdown.Item eventKey="Cars">Cars</Dropdown.Item>
      <Dropdown.Item eventKey="Cameras & Lenses">Cameras & Lenses</Dropdown.Item>
   
      <Dropdown.Item eventKey="Computers & Laptops">Computers & Laptops</Dropdown.Item>
      <Dropdown.Item eventKey="Mobile Phones">Mobile Phones</Dropdown.Item>
      <Dropdown.Item eventKey="Motorcycles">Motorcycles</Dropdown.Item>
      <Dropdown.Item eventKey="Tablets">Tablets</Dropdown.Item>
    </DropdownButton>
           
           
           
            {/* <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
            </select> */}
          </div>
          <div className="otherQuickOptions">

          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Cars")}>Cars</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Cameras & Lenses")}>Cameras & Lenses</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Computers & Laptops")}>Computers & Laptops</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Mobile Phones")}>Mobile Phones</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Motorcycles")}>Motorcycles</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Tablets")}>Tablets</Button>{' '}




            {/* <span onClick={()=>setCategory("Cars")} >Cars</span>   
            <span onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Motorcycles")} >Motorcycles</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span> */}
          </div>
        </div>
        
        <div >

        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://in.canon/media/image/2022/06/16/6780225531d14e4993c1fbeba30c2090_R7-Web_1920x750.jpg"
          // src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="First slide"
          height={600}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://image01-in.oneplus.net/ebp/202208/02/1-M00-3E-8C-CpgM7mLoxECAHln6AAbOvk9KJCs847.jpg"
          // src="https://images.pexels.com/photos/7621142/pexels-photo-7621142.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Second slide"
          height={600}
        />
       
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/interceptor-homepage.jpg"
          alt="Third slide"
          height={600}
        />
       
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2022/08_22_monterey/cover.jpg"
          alt="Third slide"
          height={600}
        />
       
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://static.acer.com/up/Resource/Acer/Predator_Minisite/Product_Series/Predator_Helios_500/rev-may-2021/20210628/Predator-HELIOS_500_KSP_1.jpg"
          alt="Third slide"
          height={600}
        />
       
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/royal-enfield-himalayan-motorcycle.jpg"
          alt="Third slide"
          height={600}
        />
       
      </Carousel.Item>
    </Carousel>








          {/* <img src="../../../Images/banner copy.png" alt="" /> */}
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
