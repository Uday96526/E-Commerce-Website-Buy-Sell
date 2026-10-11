import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contextStore/PostContext";      //THIS PAGE SHOWS US THE FULL DESCRIPTION OF A PRODUCT
import { Firebase } from "../../firebase/config";
import { Navigate, useNavigate } from "react-router-dom";
import "./View.css";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function View() {
  let { postContent } = useContext(PostContext);//from the global store PostContext we can get information about desired product post that we want to show (the user is clicked item on the card)

  const [userDetails, setUserDetails] = useState();//we want show the details of who is posted the add and we dont know,so we want retreive user data from firebase who is posted this add
  const navigate= useNavigate();//if user click the refresh of the page then PostContext data will be erased so it will throws an error so that time we want redirect this page to home page
  useEffect(() => {
    let { userId } = postContent;
    if (userId === undefined) {
      navigate("/");
    } else {
      Firebase.firestore()
        .collection("users")
        .where("id", "==", userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        });
    }
  }, [navigate, postContent]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img  src={postContent.url} alt="" />
      </div>{" "}
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postContent.price} </p>
          <span>{postContent.name}</span>
          <p>{postContent.category}</p>
          <span>{postContent.createdAt}</span>
        </div>
        <div className="productDescription">
            <p className="p-bold">Product Description</p>
            <p>{postContent.description}</p>
            
          </div>
        {userDetails &&
          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : {userDetails.name}</p>
            <p>Phone : {userDetails.phone}</p>
          </div>
        }
       <Link to="/checkout"><Button style={{marginLeft:200,padding:10,marginTop:30}}variant="dark">Buy Now</Button> </Link> 
      </div>
     
    </div>
    
  );
}
export default View;
