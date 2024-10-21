import React from 'react'

const Timeline = ({imgSrc, heading, text}) => {
  return (
    <div className='flex items-center gap-5'>
        <div className='p-4 rounded-full'>
            <img src={imgSrc} width={32} height={32} alt='timelinelogos' loading='lazy' />
        </div>
        <div>
            <h1 className='font-semibold text-xl'>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Timeline;
