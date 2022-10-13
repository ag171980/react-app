import React from 'react'
import Navbar2 from './navBar1'
import Navbar1 from './navbar'

const Nav = ({props}) => {
  console.log(props)
  return (
   <>
   {props === true ? (<Navbar2  />):(<Navbar1/>) }
   </>
  )
}

export default Nav