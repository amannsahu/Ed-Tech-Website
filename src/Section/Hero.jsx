import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import HighlightText from '../Components/HighlightText';
import YellowButton from '../Components/YellowButton';
import BlackButton from '../Components/BlackButton';
import boxoffice from "../assets/Images/boxoffice.png"
import image1 from "../assets/Images/illustration-1-removebg-preview.png"
import image2 from "../assets/Images/illustration-2-removebg-preview.png"

const Hero = () => {
  return (
    <div className='relative w-11/12 max-w-maxContent mx-auto flex flex-col items-center gap-[15px] mt-[62px] bg-richblack-900'>
      <Link to="/signup" >
        <div className='group bg-richblack-800 w-[235px] rounded-full font-semibold mx-auto transition-all duration-300 hover:scale-95 shadow-sm shadow-richblack-25'>
            <div className='flex items-center justify-center h-[44px] gap-3 rounded-full text-richblack-200 group-hover:bg-richblack-900 transition-all duration-300'>
                <p>Become an Instructor</p>
                <FaArrowRight/>
            </div>
        </div>
      </Link>

      <h1 className='text-richblack-5 font-semibold font-inter text-[36px] leading-[44px] text-center tracking-tight mt-7'>
        Empower Your Future with <HighlightText text={"Coding Skills"} />
      </h1>

      <p className='text-richblack-200 font-medium font-inter leading-[24px] text-center w-[913px] mx-auto'>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, 
        including hands-on projects, quizzes, and personalized feedback from instructors. 
      </p>

      <div className='flex items-center space-x-8 text-center mt-10'>
        <YellowButton text={"Learn More"} linkto={"/signup"} />
        <BlackButton text={"Book a Demo"} linkto={"/login"} />
      </div>

      <div className='mt-16'>
        <img src={boxoffice} alt='hero-img' className='w-[1035px] h-[515px] mx-auto'/>
      </div>

      <div className='flex items-center gap-10 mt-10'>
        <div className='flex flex-col gap-5 w-[486px]'>
            <h1 className='text-3xl text-richblack-5'>
                Unlock Your <HighlightText text={"Coding Potential"} /> with our online courses.
            </h1>
            <p className='text-richblack-200'>
            Our courses are designed and taught by industry experts who have years of experience in coding and are passionate 
            about sharing their knowledge with you.
            </p>
            <div className='flex items-center space-x-8 text-center mt-5'>
                <YellowButton text={"Try it Yourself"} icon={<FaArrowRight/>} linkto={"/signup"} />
                <BlackButton text={"Learn More"} linkto={"/login"} />
            </div>
        </div>

        <div>
            <img src={image1} width={400} height={150} />
        </div>
      </div>

      <div className='flex items-center gap-12 mt-14'>
        <div>
            <img src={image2} width={400} height={150} />
        </div>

        <div className='flex flex-col gap-5 w-[486px]'>
            <h1 className='text-4xl text-richblack-5 w-[240px]'>
                Start <HighlightText text={"Coding"} /> in seconds.
            </h1>
            <p className='text-richblack-200'>
            Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.
            </p>
            <div className='flex items-center space-x-8 text-center mt-5'>
                <YellowButton text={"Try it Yourself"} icon={<FaArrowRight/>} linkto={"/signup"} />
                <BlackButton text={"Learn More"} linkto={"/login"} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
