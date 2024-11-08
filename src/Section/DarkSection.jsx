import React from 'react'
import HighlightText from "../Components/HighlightText"
import YellowButton from "../Components/YellowButton"
import { FaArrowRight } from "react-icons/fa6";
import instructor from "../assets/Images/Instructor.png"
import ReviewSection from '../Components/ReviewSection';

const DarkSection = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-center gap-28 lg:py-32 max-sm:flex-col max-sm:py-12'>
        {/*Left Section*/}
        <div>
            <img src={instructor} 
            alt='instructor-img' 
            loading='lazy' 
            width={400} height={200} 
            className=' shadow-xl shadow-richblack-5 max-sm:w-[300px]'/>
        </div>

        {/*Right Section*/}
        <div className='flex flex-col gap-5'>
            <h1 className='text-richblack-5 text-4xl font-semibold w-[200px] max-sm:text-2xl'>
                Become an <HighlightText text={"instructor"} />
            </h1>
            <p className='text-richblack-100 w-[400px] max-sm:w-[380px]'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>
            <YellowButton text={"Start Teaching Today"} icon={<FaArrowRight/>} linkto={"/loginup"} />
        </div>
      </div>

      <div>
        <h1 className='text-4xl font-semibold text-richblack-5 text-center lg:pt-10 max-sm:text-2xl'>Reviews from other learners</h1>
        <div className='lg:py-20 max-sm:py-10'>
            <ReviewSection/>
        </div>
      </div>
    </div>
  )
}

export default DarkSection;
