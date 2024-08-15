import React from 'react'
import MyContext from './myContext'

const MyState = (props) => {
   
  const [mode, setMode] = React.useState('light')
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
  
  return (
    
    <MyContext.Provider value={{mode,toggleMode}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
////////////////////////////////////////////////////////////////////////////////




