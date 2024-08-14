import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'

const Order = () => {
  const context=useContext(MyContext);
  const {name,roll,color}=context;
  return (
    <Layout>
      Order
      <h1>Welcome: {name}</h1>
      <p>Roll No: {roll}</p>
      <h1>color: {color}  </h1>
    </Layout>
  )
}

export default Order
