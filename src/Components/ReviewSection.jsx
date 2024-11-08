import React from 'react'
import fisher from "../assets/Images/4.png"
import howard from "../assets/Images/1.png"
import pena from "../assets/Images/3.png"
import watson from "../assets/Images/2.png"

const ReviewSection = () => {
  return (
    <div className='flex justify-evenly max-sm:flex-col max-sm:gap-5 max-sm:items-center'>
      <div className='flex flex-col gap-3 pt-4 pl-4 w-[300px] bg-richblack-800 rounded-xl'>
        <div className='flex items-center gap-3'>
          <img src={fisher} width={50} height={50} alt='review-img' className=' rounded-full' />
          <div>
              <h1 className='text-richblack-5 text-lg'>Cody Fisher</h1>
              <p className='text-richblack-5 text-sm'>cody.fisher@example.com</p>
          </div>
        </div>
        <p className='text-richblack-5 w-[300px]'>
          Coordination of activities improved tremendously while Learning Coding
        </p>
        <div className='flex items-center gap-4'>
          <h1 className=' text-yellow-500 font-bold'>4.5</h1>
          <div class="flex items-center space-x-1">
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-pure-greys-500 text-2xl">&#9733;</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 pt-4 pl-4 w-[300px] bg-richblack-800 rounded-xl'>
        <div className='flex items-center gap-3'>
          <img src={howard} width={50} height={50} alt='review-img' className=' rounded-full' />
          <div>
              <h1 className='text-richblack-5 text-lg'>Esther Howard</h1>
              <p className='text-richblack-5 text-sm'>felicia.reid@example.com</p>
          </div>
        </div>
        <p className='text-richblack-5 w-[270px]'>
          Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!
        </p>
        <div className='flex items-center gap-4'>
          <h1 className=' text-yellow-500 font-bold'>4.5</h1>
          <div class="flex items-center space-x-1">
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-pure-greys-500 text-2xl">&#9733;</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 pt-4 pl-4 w-[300px] bg-richblack-800 rounded-xl'>
        <div className='flex items-center gap-3'>
          <img src={pena} width={50} height={50} alt='review-img' className=' rounded-full' />
          <div>
              <h1 className='text-richblack-5 text-lg'>Eleanor Pena</h1>
              <p className='text-richblack-5 text-sm'>nathan.roberts@example.com</p>
          </div>
        </div>
        <p className='text-richblack-5 w-[260px]'>
          I would recommend Learn codings for anyone trying to get the word out about their business. It has saved me so much time!
        </p>
        <div className='flex items-center gap-4'>
          <h1 className=' text-yellow-500 font-bold'>4.5</h1>
          <div class="flex items-center space-x-1">
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-pure-greys-500 text-2xl">&#9733;</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 pt-4 pl-4 w-[300px] bg-richblack-800 rounded-xl'>
        <div className='flex items-center gap-3'>
          <img src={watson} width={50} height={50} alt='review-img' className=' rounded-full' />
          <div>
              <h1 className='text-richblack-5 text-lg'>Kristin Watson</h1>
              <p className='text-richblack-5 text-sm'>bill.sanders@example.com</p>
          </div>
        </div>
        <p className='text-richblack-5 w-[300px]'>
          With Learn codings , we have finally accomplished things that have been waiting forever to get done.
        </p>
        <div className='flex items-center gap-4'>
          <h1 className=' text-yellow-500 font-bold'>4.5</h1>
          <div class="flex items-center space-x-1">
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-yellow-500 text-2xl">&#9733;</span>
            <span class="text-pure-greys-500 text-2xl">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewSection;
