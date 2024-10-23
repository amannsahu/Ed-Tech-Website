import React from 'react'
import NavLogo from "../assets/Logo/Logo-Full-Light.png"
import { Link } from 'react-router-dom';

const Navbar = ({isLoggedin, setisLoggedin}) => {
  return (
    <div className='flex items-center justify-evenly py-5 bg-richblack-900 border-b border-richblack-5/25'>
      <div>
        <img src={NavLogo} width={160} height={32} loading='lazy' />
      </div>

      <nav>
        <ul className='flex items-center gap-5 text-lg text-richblack-5'>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/' >About us</Link>
          </li>
          <li>
            <Link to='/' >Contact us</Link>
          </li>
        </ul>
      </nav>

      <div className='text-richblack-5 flex items-center gap-3'>
        {!isLoggedin && 
          <Link to="/login">
            <button className='bg-richblack-200 py-1 px-3 rounded-md'>
              Login
            </button>
          </Link>
        }

        {!isLoggedin && 
          <Link to="/signup" >
            <button className='bg-richblack-200 py-1 px-3 rounded-md'>
              Signup
            </button>
          </Link>
        }

        {isLoggedin && 
          <Link to="/" >
            <button>
              Sign Out
            </button>
          </Link>
        }

        {isLoggedin && 
          <Link to="/dashboard" >
            <button>
              Dashboard
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;
