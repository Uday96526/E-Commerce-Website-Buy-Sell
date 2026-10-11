import React from 'react'
import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import CreatePost from '../Pages/CreatePost'
import ViewPost from '../Pages/ViewPost'
import ViewMore from '../Pages/ViewMore'
import Admin from "../Admin"
import PrivateRoute from "../Routes/PrivateRoute"
import ForgotPassword from '../Components/Forgetpassword/forgetpassword'
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile"
import Checkout from '../Components/checkout/Checkout'
import ShowProfile from '../Components/Sellerprofile/ShowProfile'






function MainRoutes() {
    return (
       <Router>
        <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/signup" element={<Signup/>}/>
           <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/create" element={<CreatePost/>}/>
           <Route exact path="/view" element={<ViewPost/>}/>
           <Route exact path="/viewmore" element={<ViewMore/>}/>
           <Route exact path="/forgetpassword" element={<ForgotPassword/>}/>
           <Route exact path="/updateProfile" element={<UpdateProfile/>}/>
           <Route exact path="/checkout" element={<Checkout/>}/>
           <Route  path="/admin" element={ <PrivateRoute><Admin/></PrivateRoute>}/>  
           <Route path="/sellerprofile" element={<ShowProfile/>}/>
          
           
           </Routes>
           
           </Router>
           
           
          
          
           
           
         
           

           
       
    )
}

export default MainRoutes
