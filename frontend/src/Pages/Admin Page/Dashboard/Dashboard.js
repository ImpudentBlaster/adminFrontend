import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import axios from 'axios'
import { ImUsers } from "react-icons/im";
import { BsFillArchiveFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa6";


function Dashboard() {
  
  const [userCount , setUserCount] = useState(0)
  const [productCount , setProductCount] = useState(0)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let response = await axios.get('https://adminbackend-1-fiia.onrender.com/user/show')
        setUserCount(response.data.length)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchUserData()
  }, [])

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        let response = await axios.get('https://adminbackend-1-fiia.onrender.com/products/show')
        setProductCount(response.data.length)

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProductData()
  }, [])

  return (
    <div className='dashboard-main'>
      <h2>OVERVIEW</h2>
      <div className='dashboard-cards-container'>
        <div className='dashboard-card-1'>
          <h3 className='dashboard-h3'>Users <ImUsers /></h3>
          {userCount === 0 ? <h1>...</h1> : <h1>{userCount}</h1>}
        </div>
        <div className='dashboard-card-2'>
          <h3 className='dashboard-h3'>Products <BsFillArchiveFill /></h3>
          {productCount === 0?<h1>...</h1>:<h1>{productCount}</h1>}
        </div>
        <div className='dashboard-card-3'>
          <h3 className='dashboard-h3'>Orders <FaTruck /></h3>
          <h1>Count</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard