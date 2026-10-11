
import React, { useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AllPostContext } from "./contextStore/AllPostContext";
//import Pagination from "../Components/Pagination/Pagination";
import PostCards from "./Components/PostCards/PostCards"
import "./Components/PostCards/postcards.css"
import AdminPost from "./AdminPost";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Admin() {
const {allPost}=useContext(AllPostContext);
 let length = allPost.length; //if user refresh the whole page context will be empty so we want to redirect the user to the home page
    //const Navigate = useNavigate();
    const navigate=useNavigate();
  
    //pagination logic and implementation will start here
    let [currentPage,setCurrentPage]=useState(1)
    let itemsPerPage=8
    let indexOfLastDish=currentPage*itemsPerPage
    let indexOfFirstDish=indexOfLastDish-itemsPerPage
    let showTheseItems=allPost.slice(indexOfFirstDish,indexOfLastDish)
  
    let displayThesePosts = showTheseItems.map((product, index) => {
      return (
        <div className="all-post-card" key={index}>
          {" "}
          <AdminPost product={product} index={index} />{" "}
        </div>
      );
    });
         



    return (
        <>
        <div style={{backgroundColor:"black"}}> <img style={{paddingLeft:750,paddingRight:750}} src="data:image/png;base64,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" /></div>
         
        
          {length !== 0 ? (
            <div className="display-all-parent">
              <div className="container-allpost">{displayThesePosts}</div>
              {/* <Pagination setCurrentPage={setCurrentPage}/> */}
            </div>
          ) : (
            navigate("/")
          )}
          
        </>
        
       );
    }

export default Admin;


