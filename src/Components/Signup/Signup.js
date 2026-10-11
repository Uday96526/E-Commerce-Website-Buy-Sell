// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../olx-logo.png";
// import "./Signup.css";
// import { Firebase } from "../../firebase/config";
// import { useNavigate } from "react-router-dom";
// import SignUpLoading from "../Loading/SignUpLoading";

import React ,{useRef, useState,usecontext } from 'react';
import {Alert} from "react-bootstrap"  //these are the prebuild components from bootstrap site 
import { useAuth } from "../../contextStore/AuthContext"; //useAuth imported from the AuthContext file 
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { Firebase } from "../../firebase/config";
import SignUpLoading from "../Loading/SignUpLoading";
import Logo from "../../olx-logo.png";
import { auth } from "../../firebase/config";

function Signup() {
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const { signup,user } = useAuth();//this signup function is imported   from the authContext file using context api 
  const [error, setError] = useState("");
 // const [name, setName] = useState("");
  //const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);//this loading state prevent from loading 
  //or sending the user data request again and again to firebase by clicking the button multiple by user 
  const navigate = useNavigate();
//const authe= usecontext(auth);
  async function handleSubmit(e) {
    e.preventDefault();
    //it prevent the page from reloading and lost data by reloading , it stay the page with the data
   
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }//it checks that password and confirm password need to be match and if they don't match, then it set the state to error message (Passwords do not match)
   
    
      
    //.createUserWithEmailAndPassword(email, password)
    
    try {
      setError("");//it set the intial state to empty 
      setLoading(true);//it set the loading state to true 
      //here loading state is used to prevent from sending multiple request by user to firebase by clicking the submit button multiple times
      //it is a async/await function 
     //it providing the signup value the current value of email and password 
     await  signup(emailRef.current.value, passwordRef.current.value); 
    //  auth.((result) => {
    //   result.user.updateProfile({ displayName: name }).then(() => {
    //     Firebase.firestore().collection("users").doc(result.user.uid).set({
    //       id: result.user.uid,
    //       name: name,
    //       phone: phone,
    //     });
    //   });
    // })
      // .then(() => {
      //   navigate("/login");
      // });

      navigate("/");//after signup it directly redirects us to dashboard page 
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);// it replies the loading state to false 
  }
//here try and catch is used to catch the error if any occur by setting the seterror the error message 
//try observe the condition and catch  catches the error if any occur 

//<></> these are fragments 




// export default function Signup() {
//   const navigate= useNavigate();
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [phone, setPhone] = useState("");
//   let [password, setPassword] = useState("");
//   let [loading,setLoading]=useState(false)
//   const handleSubmit = (e) => {
//     setLoading(true)
//     e.preventDefault();
  //   Firebase.auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       result.user.updateProfile({ displayName: name }).then(() => {
  //         Firebase.firestore().collection("users").doc(result.user.uid).set({
  //           id: result.user.uid,
  //           name: name,
  //           phone: phone,
  //         });
  //       });
  //     })
  //     .then(() => {
  //       navigate("/login");
  //     });
  //  };
  return (<>
    
    
    
    
    
    
    
    
    
    
    <div className="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Buy&<span>Sell</span></div>
      {error && <Alert variant="danger">{error}</Alert>}</div>
		<br/>
		<div className="login">
				{/* <input type="text" placeholder="Full Name" name="user" value={name} onChange={(e) => setName(e.target.value)}/><br/> */}
				<input type="email" placeholder="Email" name="password" ref={emailRef} required /*onChange={(e) => setEmail(e.target.value)}/*//><br/>
        {/* <input type="number" placeholder="Mobile number" name="password" value={phone} onChange={(e) => setPhone(e.target.value)}/><br/> */}
        <input type="password" placeholder="Password" name="password"  ref={passwordRef} required /*onChange={(e) => setPassword(e.target.value)}*//><br/>
				<input type="password" placeholder="Confirm Password" name="password"  ref={passwordConfirmRef} required /*onChange={(e) => setPassword(e.target.value)}*//><br/>
        <input type="button" disabled={loading} value="Signup" onClick={handleSubmit}/>
       <div className="signup">
        
       <Link to="/login" style={{color:"white",fontSize:20,marginLeft:25}}>Login</Link>
       </div> 
		</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* {loading && <SignUpLoading/> } <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src="https://thumbs.dreamstime.com/b/shopping-basket-buy-sell-logo-vector-red-101315335.jpg" style={{height:250,width:250,borderRadius:100}} alt=""></img>
        <form onSubmit={handleSubmit} style={{color:"white"}}>
          <label>Full Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>  */}
    </>
  );
}

export default Signup;