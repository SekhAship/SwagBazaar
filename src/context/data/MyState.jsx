import React from 'react'
import MyContext from './myContext'

const MyState = (props) => {
    const state={
        name:"John",
        roll:15
    }
    const color="red"
  return (
    <MyContext.Provider value={{state,color}}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState
