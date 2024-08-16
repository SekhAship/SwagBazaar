import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

const MyState = (props) => {
 
  const name='Sekh Aship'
  const [loading, setLoading] = React.useState(false)
  const [mode, setMode] = React.useState('light')
const [getAllProduct, setGetAllProduct] = useState([]);

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

useEffect(() => {
    getAllProductFunction();
}, []);
  
  return (
    
    <MyContext.Provider value={{mode,toggleMode,name,loading,setLoading,getAllProduct,getAllProductFunction}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
////////////////////////////////////////////////////////////////////////////////




