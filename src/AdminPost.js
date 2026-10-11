import React,{useContext,useState} from 'react'

import { useNavigate } from "react-router-dom";
import {PostContext} from "./contextStore/PostContext";
import "./Components/PostCards/postcards.css"
import Button from 'react-bootstrap/Button';
import Firebase from './firebase/config';
import { doc, deleteDoc ,collection} from "firebase/firestore";

function AdminPost({product,index}) {      // Data is passed as props from posts.js
    let {setPostContent} = useContext(PostContext)//at the time of onClick on post ,the specified post item assigned to postContent by setPostContent function and it will be stored in a global context PostContext
 
    const [captureId,setCaptureId]=useState();



    const deletePost=()=>{
        


        Firebase.firestore().collection("products").doc(
            captureId).delete().then(()=>alert("Item deleted sucsessfully"));
    }

    return (
        <div key={index} onClick={()=>{
            setCaptureId(product.id)
        }}>
      <div className="card" key={index} style={{borderRadius:15}} >
      
        <div className="image">
          <img src={product.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {product.price}</p>
          <span className="category"> {product.category} </span>
          <p className="name"> {product.name}</p>
        </div>
        <div className="date">
          <span>{product.createdAt}</span>
        </div>
        <div className="deleteButton">
        <Button variant="danger" onClick={ deletePost}>Delete</Button>
        </div>
        </div>
        
        
      </div>
       
    )
}

export default AdminPost;