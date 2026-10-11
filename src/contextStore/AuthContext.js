import React,{useContext, createContext, useState, useEffect} from 'react'
import { auth } from "../firebase/config";


const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext);
  }

  export function ContextAuth({ children }) {//this is parent context component which provide data to the other child component 
    const [user,setUser] = useState();// it is a state for setting up the current user in it 
    const [loading, setLoading] = useState(true);//here loading is use to the check the user is logged in or not by statechange 
  
    function signup(email, password) {//auth.createuserwithemailandpassword is method of auth to create a new  user in a firebase with email and password 
      return auth.createUserWithEmailAndPassword(email, password);
    }
  
    function login(email, password) {//this function is for the login component 
      return auth.signInWithEmailAndPassword(email, password);
    }
  
    function logout() {//this function doesnt have any parameter because it simplpy logout and use the auth.signout functionality 
      return auth.signOut();
    }
  
    function resetPassword(email) {//this function is for the resetpassword which takes email as a argument
      return auth.sendPasswordResetEmail(email);//here auth functionality send the password reset email 
    }
  
    function updateEmail(email) {
      return currentUser.updateEmail(email);
    }
  
    function updatePassword(password) {
      return currentUser.updatePassword(password);
    }
  
    useEffect(() => {//it is a component unmounting  and runs only once for un- mount the component from functionality , it is like a cleanup 
      //auth.state change is state which check the state of a user in a cache memory and firebase that he/she exist or not or already login or not 
      const unsubscribe = auth.onAuthStateChanged((user) => {//it check the sate of user that he/she login or not 
        setUser(user);
        setLoading(false);//it set the laoding state to false , it check the state of user logged in or not by state changed 
      });
  
      return unsubscribe;//it returns to unmount the component 
    }, []);
  
    const value = {
      //it constains the value that need to accessed by the children component using context api 
      user,
      setUser,
      signup,
      login,
      logout,
      resetPassword,
      updateEmail,
      updatePassword,
    };
    return (//here children is providing value in form of propes destructuring to the childrens component 
    //if the user is loading then only dispatch the data to children components 
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    );
  }
  




// export const AuthContext = createContext(null)

// export function useAuth() {
//     return useContext(AuthContext);
//   }

// function ContextAuth({children}) {
//     const[user,setUser]=useState()
//     return (
//         <AuthContext.Provider value={{user,setUser}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default ContextAuth;
