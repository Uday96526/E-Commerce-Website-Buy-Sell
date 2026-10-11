import React, { useContext,useState } from "react";                            //FOR SEARCH BAR ON LEFT
import { useNavigate } from "react-router-dom";
import { AllPostContext } from "../../contextStore/AllPostContext";
import { PostContext } from "../../contextStore/PostContext";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import SearchIcon from "../../assets/SearchIcon"
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link } from "react-router-dom";
import {useAuth} from "../../contextStore/AuthContext";
import { Firebase } from "../../firebase/config";
import Search from "../Search/Search";
import Button from 'react-bootstrap/Button';
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Login from "../Login/Login";
import Badge from 'react-bootstrap/Badge';
import ShowProfile from "../Sellerprofile/ShowProfile";
function Header() {
  var name;

  const{allPost}=useContext(AllPostContext)
  const{setPostContent}=useContext(PostContext)
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allPost.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {                                                                      
      setFilteredData(newFilter);                                                 
    }
  };                                                                              //Searches the product entered
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleSelectedSearch=(value)=>{
       setPostContent(value)
       navigate("/view")

  }
  const handleEmptyClick=()=>{
     alert("No items found.., please search by product name");
  }
  const { user } = useAuth();
  
  const logoutHandler = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        navigate("/login");
      });
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
         <Link to="/" ><OlxLogo></OlxLogo></Link>
        </div>
        <div className="placeSearch" >
           <input type="text" 
          placeholder="Search specific product..."
          value={wordEntered}
          onChange={handleFilter}
        /> 
        {filteredData.length === 0 ? (
          <div onClick={handleEmptyClick}> <SearchIcon /> </div>
         ) : (
           <div id="clearBtn"  onClick={clearInput} > <Arrow></Arrow></div>
         )}
          {filteredData.length !== 0 && (
        <div className="dataResult-header">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="dataItem-header" onClick={()=>handleSelectedSearch(value)}>
                <p>{value.name} </p>
              </div>
            );
          })}
        </div>
      )}
         
        </div>
        <div className="productSearch">
          <Search />
        </div>
        
        
        <div className="loginPage">
          {user ? (
            <Link to="/sellerprofile">{allPost.map((product)=>{

              if(product.userId==user.uid)
              {
                  {name=product.sellerName}
                     
                  
              }

            })}{name}</Link> 
          ) : (
            <Link to="/login">
              <Button variant="outline-primary">Login</Button>
            </Link>
          )}
          
        </div>
        <div className="language">
     <Link to="/updateprofile" > <Button variant="outline-primary"  >Update Profile</Button> </Link>                     
         {/* <Link to="/updateprofile"> <span> Update Profile</span></Link>
          */}
        </div>

       
       <Link to='/Admin'>
       <Button variant="outline-primary">Admin</Button>
        </Link> 
        {user && (
          // <span onClick={logoutHandler} className="logout-span">
          //   Logout
          // </span>
          <Button onClick={logoutHandler} variant="outline-danger">Logout</Button>
        )}
        
        <Link to="/create">
          {" "}
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
