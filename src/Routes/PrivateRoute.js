import React from 'react'
import {useNavigate} from "react-router-dom";
import  { useAuth } from "../contextStore/AuthContext";
import Login from '../Components/Login/Login';
import Admin from '../Admin';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function PrivateRoute({children}) {
  const Navigate = useNavigate();
  const{user} =  useAuth ();

 
  
  //const [userDetails, setUserDetails] = useState(false);

 //  useEffect(() => {
 //    const{user} =  useAuth ();// here it accessing the userId of that particular post from the  postContent
 //    if (user.name === undefined) {// here undefined comparsion is use to know that the current user is present or not 
 //       Navigate("/login");
 //    } else {
 //       Firebase.firestore()
 //       .collection("Admin")
 //       .where("Email", "==", user.name)//Creates and returns a new Query with the additional filter that documents must contain the specified field and the value should satisfy the relation constraint provided.
 //       .get()//Executes the query and returns the results as a QuerySnapshot
       
 //       .then(function () {
 //          setUserDetails(true);
 //          //return children;// it provides the data only from the users  according to current post by using his userid from postcontent and matching it with the id in users in firebase 
 //       });// it fetch the data from users category in firebase 
 //        }},[]);
        
        return (
          <>
          {

     (user?   (  (user.uid==="FWJq8b8Irqd7TvIFBMWimcDRlUj2")? (<Admin /> ) : ( <>{alert("You must Login First")} <Login /> </> )):(<>{alert("You must login first to access the admin ")}<Login/></>))


          }
        </>
          
          
          
          
          
          // <>
          //   {(user ? ((user.uid==="2mQrBsuUBjdCZXSfwFETGd9KvDG2")? (
          //    <Admin /> 
          //     //children
          //   ) : (
          //     <>          
          //       {alert("You must login first with Admin ")} <Login />
          //     </>
          //   )):<Login/>)}
          // </>
        );//Navigate("/admin");
       }
     
      
   

// useEffect(() => {
//    const{user} =  useAuth ();// here it accessing the userId of that particular post from the  postContent
//     if (user.name === undefined) {// here undefined comparsion is use to know that the current user is present or not 
//       Navigate("/");
//     } else {
//       Firebase.firestore()
//         .collection("Admin")
//         .where("Email", "==", user.name)//Creates and returns a new Query with the additional filter that documents must contain the specified field and the value should satisfy the relation constraint provided.
//         .get()//Executes the query and returns the results as a QuerySnapshot
//         .then((res) => {
//          children;
//          //  res.forEach((doc) => {
//          //    setUserDetails(doc.data());// it provides the data only from the users  according to current post by using his userid from postcontent and matching it with the id in users in firebase 
//           });// it fetch the data from users category in firebase 
//          });
//      }
//    }, [);
   






 //      {user ? (
 //        children
 //      ) : (
 //        <>          
 //          {alert("You must login first to access the Admin Portal")} <Login/>
 //        </>
 //      )}
    
 //  );


 //   if(!user){
 //     return  <Navigate to="/login"/>; 
 //   }
 //   return children
  
export default PrivateRoute;


 // if(!user){
  //     return (
  //         alert("You must login first") 
          
  //     <Navigate to="/login"/>)
  // }
  
  //     return children
  

//  useEffect(() => {
//    const{user} =  useAuth ();// here it accessing the userId of that particular post from the  postContent
//    if (user.name === undefined) {// here undefined comparsion is use to know that the current user is present or not 
//       Navigate("/");
//    } else {
//       Firebase.firestore()
//       .collection("Admin")
//       .where("Email", "==", user.name)//Creates and returns a new Query with the additional filter that documents must contain the specified field and the value should satisfy the relation constraint provided.
//       .get()//Executes the query and returns the results as a QuerySnapshot
//       .then((res) => {
//        children;// it provides the data only from the users  according to current post by using his userid from postcontent and matching it with the id in users in firebase 
//          });// it fetch the data from users category in firebase 
//        });
//    }
//  }, [history, postContent]);

  