import React from 'react'
import { Link } from 'react-router-dom';

const YellowButton = ({text, linkto, icon}) => {
  return (
    <Link to={linkto}>
        <button className='flex flex-row items-center gap-3 yellowButton shadow-sm shadow-yellow-5 hover:scale-110 transition-all duration-500'>
            {text}
            {icon}
        </button>
    </Link>
  )
}

export default YellowButton;
