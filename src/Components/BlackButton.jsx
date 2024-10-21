import React from 'react'
import { Link } from 'react-router-dom';

const BlackButton = ({text, linkto}) => {
  return (
    <Link to={linkto}>
        <button className='blackButton shadow-sm shadow-richblack-5 hover:scale-110 transition-all duration-500'>
            {text}
        </button>
    </Link>
  )
}

export default BlackButton;
