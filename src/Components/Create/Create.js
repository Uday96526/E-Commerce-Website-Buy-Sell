import React, {  useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { Firebase } from "../../firebase/config";
import {useAuth} from "../../contextStore/AuthContext";
import { useNavigate } from "react-router-dom";
import GoLoading from "../Loading/GoLoading";

const Create = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [sellerName,setsellerName]=useState("");
  let[sellerPhone,setsellerPhone]=useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();
  let [loading,setLoading]=useState(false);
  const handleSubmit = () => {
    setLoading(true);
    let date = new Date().toDateString();
    Firebase.storage()
      .ref(`/image/${image.name}`)            
      .put(image)          
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          Firebase.firestore()
            .collection("products")
            .add({
              name,
              sellerName,
              sellerPhone,
              category,
              price,
              description,
              url,
              userId: user.uid,
              createdAt: date,
            })
            .then(() => {
              navigate("/");
            });
        });
      });
  };
  return (
    <>
      <Header />
    { loading && <GoLoading/> }
   
    

    
      <div className="centerDiv">

      <h1 style={{textAlign:"center",padding:30,margin:10,borderRadius:15}}>Hello Seller!</h1>
        <label>Product Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br/>
         <label >Seller Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={sellerName}
          onChange={(e) => {
            setsellerName(e.target.value);
          }}
        />
        <br/>
        <label>Seller Phone</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={sellerPhone}
          onChange={(e) => {
            setsellerPhone(e.target.value);
          }}
        />

        <br />
        <label>Category:</label>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input"
        > <option >Select Category</option>
          <option value="Cars">Cars</option>
          <option value="Cameras & Lenses">Cameras & Lenses</option>
          <option value="Computers & Laptops">Computers & Laptops</option>
          <option value="Mobile Phones">Mobile Phones</option>
          <option value="Motorcycles">Motorcycles</option>
          <option value="Tablets">Tablets</option>
        </select>
        <br />
        <label>Price</label>
        <br />
        <input
          className="input"
          type="number"
          name="Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />

        
        {/* <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        ></img> */}

        <br />
       
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        <button className="uploadBtn" onClick={handleSubmit}>
          Upload and Submit
        </button>
      </div> 
      
    </>
  );
};

export default Create;
