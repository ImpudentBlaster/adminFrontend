import React, { useState } from 'react';
import './AddProducts.css'
import { useNavigate } from 'react-router-dom';

function AddProducts() {

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.entries)
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const response = await fetch('https://adminbackend-1-fiia.onrender.com/products/add', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Product has been added')
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }

    for (let index = 0; index < 6; index++) {
      document.getElementsByTagName('input')[index].value = ""

    }
  };

   function handleClick(){
    navigate('/ShowProducts')
   } 

  return (
    <div className='showProducts-main'>
      <form onSubmit={handleSubmit} id="uploadform" encType="multipart/form-data">
        <div>
          <p>File : </p>
          <input type="file" name="img" required />
        </div>
        <div>
          <p>Product Name</p>
          <input type="text" name="prodName" placeholder="Enter product name" required /></div>

        <div>
          <p>Product Description</p>
          <input type="text" name="prodDesc" placeholder="Enter product description" required /></div>

        <div>
          <p>Product Price</p>
          <input type="text" name="prodPrice" placeholder="Enter product price" required /></div>

        <div>
          <p>Product Original Price (If Any Otherwise leave Empty)</p>
          <input type='text' name='prodRedPrice' placeholder='Enter the original price'></input></div>

        <div>
          <p>Product Tag (New or Discounted or Leave Empty)</p>
          <input type='text' name='prodBubble' placeholder='Enter the product Tag'></input></div>

        <input type="submit" value="Upload File" style={{width:"fit-content"}} />
      </form>
      <button onClick={()=>handleClick()}>View Products</button>
    </div>
  );
}

export default AddProducts;
