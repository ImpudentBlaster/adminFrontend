import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ShowProducts.css'
import { useNavigate } from 'react-router-dom';

function ShowProducts() {
    const [productData, setProductData] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await axios.get('https://adminbackend-1-fiia.onrender.com/products/show')
                setProductData(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])

    function handleClick(choice) {
        navigate('/AddProducts')
    }

  async  function handleDeleteProduct(product_id){
       console.log(product_id)
       let response = await axios.post(`https://adminbackend-1-fiia.onrender.com/products/delete/${product_id}`,{
          _id:product_id
       })
       console.log(response)


       let newArr = productData.filter(item => item._id !== product_id)
       console.log(newArr)
       setProductData(newArr)

    }

    return (

        <div className='showproducts-main'>
            <div className='showproducts-grid'>
                <div className='showproducts-header'>
                    <div>Sr No.</div>
                    <div>Img</div>
                    <div>Name</div>
                    <div>Price</div>
                    <div>Original Price</div>
                    <div>Tag</div>
                    <div>Remove</div>
                </div>
                <div className='showproducts-content'>
                    {
                        productData.length === 0 ? "" : productData.map((item, index) => (
                            <>
                                <div>{index + 1}.</div>
                                <div><img src={`https://adminbackend-1-fiia.onrender.com/${item.img}`} /></div>
                                <div>{item.prodName}</div>
                                <div>{item.prodPrice}</div>
                                <div>{item.prodRedPrice ? item.prodRedPrice : "--"}</div>
                                <div>{item.prodBubble ? item.prodBubble : "--"}</div>
                                <button onClick={()=>handleDeleteProduct(item._id)} style={{cursor:"pointer" , border:"0" , backgroundColor:"transparent"}}>❌</button>
                            </>
                        ))
                    }
                </div>
            </div>
            <div>
                <button onClick={() => handleClick("AddProducts")}>Add Products</button>
            </div>
        </div>
    )
}

export default ShowProducts