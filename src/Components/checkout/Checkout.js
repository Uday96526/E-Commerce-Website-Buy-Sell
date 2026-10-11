import React from 'react'
import "./checkout.css";
import {useContext} from "react"
import { PostContext } from "../../contextStore/PostContext";

import {Link} from "react-router-dom";


function Checkout() {
  let { postContent } = useContext(PostContext)
  return (


  <div className="page">
   
   <div class="mainscreen">
    {/* <!-- <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt="">-->  */}
      <div class="mainpage">
        <div class="leftpage">
          <img
            src={postContent.url}
            class="photo"
            alt="Shoes"
          />
        </div>
        <div class="rightpage">
          <form action="">
            <h1>CheckOut</h1>
            <h4> Full Address</h4>
            
            <input type="text" class="inputbox" name="name" required />
            <p>Mobile number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p>Payment Mode</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a payment mode--</option>
              <option value="Visa">COD</option>
              <option value="RuPay">UPI</option>
              <option value="MasterCard">Card</option>
            </select>
<div class="sellerinfo">

            {/* <p class="expcvv_text">Expiry</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required /> */}
       
       <h4>
       Seller Info-    
       <span>
      <pre>
           Name:   {postContent.sellerName}
      </pre>  
       </span>
       <pre>Mobile number:  {postContent.sellerPhone}</pre>
       <br/>

               
       </h4>
          
                  
       
       
        </div>
            <p></p>
            <button type="submit" class="button" >CheckOut</button>  
          </form>
        </div>
      </div>
    </div>
  

</div>

 
  )
}

export default Checkout