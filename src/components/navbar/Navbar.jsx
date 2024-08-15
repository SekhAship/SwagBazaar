import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import SearchBar from '../searchBar/SearchBar';
import MyContext from '../../context/data/myContext';
import { FiSun } from 'react-icons/fi';
import { BsFillCloudSunFill } from 'react-icons/bs';

const Navbar = () => {
    const context=useContext(MyContext);
    const {mode, toggleMode}=context;
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
        {/* Home */}
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        {/* All Product */}
        <li>
            <Link to={'/allproduct'}>All Product</Link>
        </li>
        {/* order */}
        <li>
            <Link to={'/order'}>Order</Link>
        </li>
         {/* admin */}
         <li>
            <Link to={'/dashboard'}>Admin</Link>
        </li>
        {/* Signup */}
        <li>
            <Link to={'/signup'}>Signup</Link>
        </li>
        {/* User */}
        <li>
            <Link to={'/'}>Kamal</Link>
        </li>
        {/* Admin */}
        {/* <li>
        </li> */}
        {/* logout */}
        {/* <li>
        </li> */}
        {/* Cart */}
        <li>
            <Link to={'/cart'}>
            </Link>
        </li>
    </ul>
)
return (
    <nav className="bg-pink-600 sticky top-0">
        {/* main  */}
        <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
            {/* left  */}
            <div className="left py-3 lg:py-0">
                <Link to={'/'}>
                <h2 className=" font-bold text-white text-2xl text-center">E-Shop</h2>
                </Link>
            </div>
            {/* right  */}
            <div className="right flex justify-center mb-4 lg:mb-0">
                {navList}
            </div>
            {/* Search Bar  */}
            <SearchBar />
            <div className="left py-3 lg:py-0">
                <Link to={'/'}>
                <h2 className=" font-bold text-white text-2xl text-center">
                    {mode ? <FiSun onClick={toggleMode} className="text-white text-2xl cursor-pointer"/> : <BsFillCloudSunFill onClick={toggleMode} className="text-white text-2xl cursor-pointer"/>}
                </h2>
                </Link>
            </div>
        </div>
    </nav>
);
}
 
export default Navbar
