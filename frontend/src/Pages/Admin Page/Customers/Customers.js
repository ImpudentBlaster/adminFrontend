import './Customers.css'
import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import axios from 'axios'

const columns = [
  {
    title: 'firstName',
    dataIndex: "firstName",
    key: 'firstName',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'lastName',
    dataIndex: "lastName",
    key: 'lastName',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'Email',
    render: (text) => <span>{text}</span>
  },

];





function Customers() {
  const [userData, setUserData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get('https://adminbackend-1-fiia.onrender.com/user/show')
        setUserData(response.data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {userData.length !== 0 ?
      <div className='customers-main'>

      <h2>CUSTOMERS</h2>
      <Table columns={columns} dataSource={userData} />
      </div> 
      : <div className='customers-main'><h2 style={{width:"100%" , textAlign:"center" }}>LOADING...</h2></div>}

    </>
  )
}
export default Customers;