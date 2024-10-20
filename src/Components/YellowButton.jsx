import React from 'react'
import { Link } from 'react-router-dom';

const YellowButton = ({text, linkto, icon}) => {
  return (
    <Link to={linkto}>
        <button className='flex flex-row items-center gap-3 font-medium text-lg py-[12px] px-[24px] rounded-[8px] bg-yellow-100
        text-richblack-900 shadow-md shadow-yellow-5 hover:scale-110 transition-all duration-500'>
            {text}
            {icon}
        </button>
    </Link>
  )
}

export default YellowButton;
