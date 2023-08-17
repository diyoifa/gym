import React,{useState} from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo4.jpg'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
const [isNavShowing,setIsNavShowing] = useState(false)

return (
    <nav>
      <div className='container nav__container'>
        <Link to= '/' className='logo' onClick={()=>{setIsNavShowing(!isNavShowing) 
          window.scroll({ top: -1800, left: 100, behavior: 'smooth' })}}

          >
            <img src={Logo} alt='Nav Logo'/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
            {

               links.map(({name, path, property}, index)=>{ 
                return(
                    <li key={index}>
                        <NavLink to={path} className = {({isActive})=> 
                        isActive 
                        ? 'active-nav'
                        : ''} onClick={()=> {setIsNavShowing( prev => !prev )
                          window.scroll({ top: -1800, left: 100, behavior: 'smooth' })
                        }}
                        target={property}
                        >
                            {name}
                        </NavLink>
                    </li>
                  )  
                }
               ) 

            }
        </ul>
        <button className="nav__toggle-btn" onClick={()=> {setIsNavShowing(prev=>!prev)}}>
           { 
                isNavShowing ? <MdOutlineClose/> : <FaBars/>
           }
        </button>
      </div>
    </nav>
  )
}

export default Navbar
