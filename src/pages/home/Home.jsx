import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext';
// import Layout from '../../components/layout/Layout'

const Home = () => {
  const context=useContext(MyContext);
  console.log(context)
  const {name,roll}=context;

  return (
    <div>
       <Layout>
        <h1>Welcome: {name}</h1>
        <p>Roll No: {roll}</p>
       </Layout>
    </div>
  )
}

export default Home
