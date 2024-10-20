import React from 'react'
import { Link } from 'react-router-dom';

const BlackButton = ({text, linkto}) => {
  return (
    <Link to={linkto}>
        <button className='font-medium text-lg py-[12px] px-[24px] rounded-[8px] bg-richblack-800 text-richblack-5 shadow-sm 
        shadow-richblack-5 hover:scale-110 transition-all duration-500'>
            {text}
        </button>
    </Link>
  )
}

export default BlackButton;
