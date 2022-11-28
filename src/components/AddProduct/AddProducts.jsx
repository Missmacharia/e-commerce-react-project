import React from "react";
import { useDispatch } from "react-redux";
import { addProducts, fetchProducts } from "../Redux/Products";
import "./AddProducts.css";
// import { BsCamera } from "react-icons/bs";
import { increment } from "firebase/firestore";
import { Link } from "react-router-dom";

const AddProducts = ({ formProducts,  setformProducts }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setformProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("hello");
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const newProducts = { ...formProducts };
    await dispatch(addProducts(newProducts));
    dispatch(fetchProducts());
    dispatch(increment())
    // setOwner(DEFAULT_OWNER_FORM)
  };


  return (
    <div className="myProductsForm">
      <form className="product_form">
          {/* <input type="file" onChange={(e)=>
            {setImagesUpload(e.target.files[0])}} />
          <p onClick={()=>{
            console.log('uploading');
            dispatch(upLoadImagesAction(imagesUpload))
          }} className="icon">
            <BsCamera />
          </p> */}
         
        <input
          type="text"
          name="produtImage"
          placeholder="produtImage"
          value={formProducts.produtImage}
          onChange={handleChange}
        />
        <input
          type="text"
          name="produtName"
          placeholder="Clothing"
          value={formProducts.produtName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Made by the house of designers"
          value={formProducts.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="100"
          value={formProducts.price}
          onChange={handleChange}
        />
        <input type="number" name="price" placeholder="100" value="3232" />
        <inputnnn
          type="number"
          name="discountPrice"
          placeholder="20%"
          value={formProducts.discountPrice}
          onChange={handleChange}
        />
        <button className="add_products" onClick={handleClick} > 
        <Link to="/home" >Add Products</Link>
        </button>
      </form>
    </div>
  );
};

export default AddProducts;

// import React, { useState } from "react";

// function App() {
// 	const [file, setFile] = useState();
// 	function handleChange(e) {
// 		console.log(e.target.files);
// 		setFile(URL.createObjectURL(e.target.files[0]));
// 	}

// 	return (
// 		<div className="App">
// 			<h2>Add Image:</h2>
// 			<input type="file" onChange={handleChange} />
// 			<img src={file} />

// 		</div>

// 	);
// }

// export default App;
