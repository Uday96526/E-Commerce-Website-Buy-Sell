// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { Firebase } from "../../firebase/config";
// import Logo from "../../olx-logo.png";
// import RoundLoading from "../Loading/RoundLoading";
// import "./Login.css";

// function Login() {
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let [loading,setLoading]=useState(false)
//   const navigate = useNavigate()
//   const handleSubmit = (e) => {
//     setLoading(true)
//     e.preventDefault();
//     Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
//       navigate("/")
//     }).catch((error)=>{
//       alert(error.message)
//     })

//   };

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contextStore/AuthContext"
import { Link, useNavigate } from "react-router-dom";
//import "../Login/Login.css"

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");//after login it directly redirects to the dashboard page 
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (<>
    
    
    <div className="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Buy&<span>Sell</span></div>
      {error && <Alert variant="danger">{error}</Alert>}</div>
		<br/>
		<div className="login">
				<input type="email" placeholder="Email" name="user" ref={emailRef} required /*onChange={(e) => setEmail(e.target.value)}*//><br/>
				<input type="password" placeholder="password" name="password"  ref={passwordRef} required  /*onChange={(e) => setPassword(e.target.value)}*//><br/>
				<input type="button" value="Login"  disabled={loading} onClick={handleSubmit}/>
       <div className="loginsignup">
        
       <Link to="/signup" style={{color:"white",marginLeft:120,fontSize:20}}>Signup</Link>
       </div>
       <div className="forgetpassword">
        
       <Link to="/forgetpassword" style={{color:"white",fontSize:20,marginLeft:70}} >Forgot Password ?</Link>
       </div>
        
		</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {/* {loading }
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="https://thumbs.dreamstime.com/b/shopping-basket-buy-sell-logo-vector-red-101315335.jpg" style={{height:250,width:250,borderRadius:100}} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label style={{color:"white"}}>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label style={{color:"white"}}>Password</label>
          <br />
          <input
          
            className="input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="/signup" style={{color:"white"}}>Signup</Link>
      </div> 
    </div> */}
    </>
  );
}

export default Login;
