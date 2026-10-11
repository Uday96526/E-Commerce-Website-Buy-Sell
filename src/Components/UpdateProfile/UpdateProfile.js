import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contextStore/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../UpdateProfile/update.css"
function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { user, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
//we use promise here because we need to have a multiple call 
    if (emailRef.current.value !== user.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
//if current email and new email id different then only it push the new email in firebase for current user 
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)//here we have a chain of promise implementstion , implementing all promise at once 
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });

    
  }

  return (
    <>
      <div className="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Buy&<span>Sell</span></div>
      {error && <Alert variant="danger">{error}</Alert>}</div>
		<br/>
		<div className="login">
				<input type="email" defaultValue={user.email} ref={emailRef} required /*onChange={(e) => setEmail(e.target.value)}*//><br/>
				<input  placeholder="Leave it blank to keep the same" type="password" ref={passwordRef} required /*onChange={(e) => setPassword(e.target.value)}*//><br/>
                <input  placeholder="Leave it blank to keep the same" type="password" ref={passwordConfirmRef} required /*onChange={(e) => setPassword(e.target.value)}*//><br/>
				<input type="button" value="Update Profile"  disabled={loading} onClick={handleSubmit}/>
       </div>
       <div className="signup">
        
       <Link to="/login" style={{color:"white"}}>Login</Link>
       </div>
    
   <div/>
       </>







   
  );
}


export default UpdateProfile;


// return (
//     <>
//     <div className="body"></div>
// 		<div className="grad"></div>
// 		<div className="header">
// 			<div>Buy&<span>Sell</span></div>Password Reset
//             {error && <Alert variant="danger">{error}</Alert>}
//           {message && <Alert variant="success">{message}</Alert>}</div>
// 		<br/>
// 		<div className="login">
// 				<input type="email" placeholder="Email" name="user" ref={emailRef} required  /*onChange={(e) => setEmail(e.target.value)}*//><br/>
				
// 				<input type="button" value="Reset Passowrd" onClick={handleSubmit}/>
//        <div className="signup">
        
//        <Link to="/login" style={{color:"white"}}>login</Link>
//        </div>

//        <div className="signup">
        
//        <Link to="/Signup" style={{color:"white"}}>Need an account? Signup</Link>
//         </div> 
        
// 		</div>
    
      
//     </>
//   );
// }