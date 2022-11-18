import React from 'react'
import { useDispatch } from "react-redux";
import { addProducts, fetchProducts } from '../Redux/Products';
import "./AddProducts.css"

const AddProducts = ({formProducts, products, setformProducts}) => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setformProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      console.log("hello");
    };
    const handleClick = async (e) => {
        e.preventDefault();
        const newProducts = { ...formProducts };
        await dispatch(addProducts(newProducts))
        dispatch(fetchProducts())
        // setOwner(DEFAULT_OWNER_FORM)
      };
      
  
  return (
    <div className='myProductsForm'>
    <form className="product_form">
      <input
        type="text"
        name="produtName"
        placeholder="car"
        value={formProducts.produtName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="hsDJCS"
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
      <input
        type="number"
        name="discountPrice"
        placeholder="20%"
        value={formProducts.discountPrice}
        onChange={handleChange}
      />
      <button className='add_products' onClick={handleClick}>Add Products</button>
    </form>
  </div>
  )
}

export default AddProducts

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
