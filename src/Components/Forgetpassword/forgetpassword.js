import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contextStore/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../Forgetpassword/forget.css";

function ForgotPassword() {
  const emailRef = useRef();
 
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");//this state show the message after successful password reset
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    

    try {
      setMessage("");//initial message state is null
      setError("");
      setLoading(true);
      
      await resetPassword(emailRef.current.value);//it takes the email value from the emailRef of user 
      setMessage("Check your inbox for further instructions");//it display this message after entering the emailid 
    } catch {
      setError("Failed to reset password");//if the email is not a authenticated then this error message display 
    }

    setLoading(false);
    navigate("/login");
  }

  return (
    <>
    <div className="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Buy&<span>Sell</span></div>
      
            {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}</div>
		<br/>
		<div className="login">
				<input type="email" placeholder="Email" name="user" ref={emailRef} required  /*onChange={(e) => setEmail(e.target.value)}*//><br/>
				
				<input type="button" value="Reset Passowrd" onClick={handleSubmit}/>
       <div className="signup">
        
       <Link to="/login" style={{color:"white",fontSize:20}}>Login</Link>
       </div>

       <div className="needanaccount">
        
       <Link to="/Signup" style={{color:"white",fontSize:20,marginLeft:30}}>Need an account? Signup</Link>
        </div> 
        
		</div>
    
      
    </>
  );
}

export default ForgotPassword;



{/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>} 
          {/* it display this alert message after successful entering of authenticated user  email id  */}
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group id="email">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control type="email" ref={emailRef} required />
    //         </Form.Group>
       
    //         <Button disabled={loading} className="w-100" type="submit">
    //           Reset Passowrd
    //         </Button>
    //       </Form>
    //       <div className="w-100 text-center mt-3">
    //         <Link to="/login">Login</Link>
    //       </div>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     Need an account? <Link to="/signup">Sign Up</Link>
    //     {/* it display the link to sing up if the user doesnt have any authenicated email id and want new emailid   */}
    //   </div> */}