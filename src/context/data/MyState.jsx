import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import toast from 'react-hot-toast';

const MyState = (props) => {
 
  const name='Sekh Aship'
  const [loading, setLoading] = React.useState(false)
  const [mode, setMode] = React.useState('light')
const [getAllProduct, setGetAllProduct] = useState([]);
const [getAllOrder, setGetAllOrder] = useState([]);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17,24,29)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  const getAllProductFunction = async () => {
    setLoading(true);
    try {
        const q = query(
            collection(fireDB, "products"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let productArray = [];
            QuerySnapshot.forEach((doc) => {
                productArray.push({ ...doc.data(), id: doc.id });
            });
            setGetAllProduct(productArray);
            setLoading(false);
        });
        return () => data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  }

  //get all ordefunction
  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
        const q = query(
            collection(fireDB, "order"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let orderArray = [];
            QuerySnapshot.forEach((doc) => {
                orderArray.push({ ...doc.data(), id: doc.id });
            });
            setGetAllOrder(orderArray);
            setLoading(false);
        });
        return () => data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  }


// console.log(getAllOrder)


  //delete order function
  const orderDelete=(id)=>{
    setLoading(true)
    try {
        deleteDoc(doc(fireDB, "order", id));
        toast.success('Order Deleted Successfully');
        getAllOrderFunction();
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
  }

  //users on admin dashboard
  const [getAllUser, setGetAllUser] = useState([]);
  const getAllUserFunction = async () => {
    setLoading(true);
    try {
        const q = query(
            collection(fireDB, "user"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let userArray = [];
            QuerySnapshot.forEach((doc) => {
                userArray.push({ ...doc.data(), id: doc.id });
            });
            setGetAllUser(userArray);
            setLoading(false);
        });
        return () => data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
  }



useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
    getAllUserFunction();
}, []);
  
  return (
    
    <MyContext.Provider value={{mode,toggleMode,name,loading,setLoading,getAllProduct,getAllProductFunction,getAllOrder,orderDelete,getAllUser}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
////////////////////////////////////////////////////////////////////////////////




