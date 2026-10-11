import React from 'react'
import "./ShowProfile.css";
import  {useAuth} from '../../contextStore/AuthContext';
import { Firebase } from "../../firebase/config";
import {useState,useContext} from 'react';
import {AllPostContext} from '../../contextStore/AllPostContext';
import PostCards from '../PostCards/PostCards';



function ShowProfile() {
    const [sellerDetails, setsellerDetails] = useState()
    const {allPost}=useContext(AllPostContext);

    const{user} =  useAuth ();
    console.log(user.uid);


  return(<>
    <div className="yourproducts" >
        <h1 style={{fontFamily:"montserrat",textAlign:"center",padding:80,fontSize:80,fontWeight:"bold"}}>
           YOUR PRODUCTS
        </h1>
         
   
   { allPost.map((product,index)=>{
        if(product.userId==user.uid)
        {
            return (
             
                    <div style={{display:'inline-block',margin:100}} key={index}> <PostCards product={product} index={index} /> </div>
               
            )
        }
    })}
     </div>
    </>
  )

}

export default ShowProfile