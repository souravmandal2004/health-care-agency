import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
// import Logo from "../assets/whatsappLogo.jpeg";
import Logo from "../assets/logo-no-background.svg";

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (

        <div className='w-full h-[90px] flex justify-between md:justify-around items-center px-10 md:px-4  bg-[#0a192f] text-gray-300 fixed'>

            {/* Logo  */}
            <div className='cursor-pointer w-[150px] md:w-[200px]'>
                <Link to='home' smooth={true} duration={800}>
                    <img src={Logo} alt='Logo Image' />
                </Link>
            </div>



            {/* menu */}
            <ul className='hidden md:flex gap-16 cursor-pointer'>
                <li className="text-xl hover:bg-[#16325d] hover:rounded-lg hover:p-2 transition-all duration-300">
                    <Link to='home' smooth={true} duration={800}>
                        Home
                    </Link>
                </li>

                

                {/* <li className="text-xl hover:bg-[#16325d] hover:rounded-lg hover:p-2 transition-all duration-300">
                    <Link to='solution' smooth={true} duration={800}>
                        Solutions
                    </Link>
                </li> */}

                <li className="text-xl hover:bg-[#16325d] hover:rounded-lg hover:p-2 transition-all duration-300">
                    <Link to='service' smooth={true} duration={800}>
                        Services
                    </Link>
                </li>

                {/* <li className="text-xl hover:bg-[#16325d] hover:rounded-lg hover:p-2 transition-all duration-300">
                    <Link to='training' smooth={true} duration={800}>
                        Trainings
                    </Link>
                </li> */}


                <li className="text-xl hover:bg-[#16325d] hover:rounded-lg  hover:p-2 transition-all duration-300">
                    <Link to='about' smooth={true} duration={800}>
                        About
                    </Link>
                </li>


                <li className="text-xl hover:bg-[#16325d] hover:rounded-lg hover:p-2 transition-all duration-300" >
                    <Link to='contact' smooth={true} duration={800}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-3xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={800}>
                        Home
                    </Link>
                </li>

                

                {/* <li className='py-6 text-3xl'>
                    {' '}
                    <Link onClick={handleClick} to='solution' smooth={true} duration={800}>
                        Solutions
                    </Link>
                </li> */}

                <li className='py-6 text-3xl'>
                    {' '}
                    <Link onClick={handleClick} to='service' smooth={true} duration={800}>
                        Services
                    </Link>
                </li>

                
                {/* <li className='py-6 text-3xl'>
                    {' '}
                    <Link onClick={handleClick} to='training' smooth={true} duration={800}>
                        Training
                    </Link>
                </li> */}

                <li className='py-6 text-3xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={800}>
                        About us
                    </Link>
                </li>
                
                
                <li className='py-6 text-3xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={800}>
                        Contact US
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;