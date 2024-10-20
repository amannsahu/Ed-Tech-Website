import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className='font-bold text-4xl bg-gradient-to-b from-blue-50 to-caribbeangreen-50 inline-block text-transparent bg-clip-text'>
        {text}
    </span>
  )
}

export default HighlightText;
