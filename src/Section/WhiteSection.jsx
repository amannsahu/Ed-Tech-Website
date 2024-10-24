import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import YellowButton from "../Components/YellowButton"
import BlackButton from "../Components/BlackButton"
import HighlightText from '../Components/HighlightText';
import timelineimg from "../assets/Images/TimelineImage.png"
import leadership from "../assets/TimeLineLogo/Logo1.svg"
import responsibility from "../assets/TimeLineLogo/Logo2.svg"
import flexibility from "../assets/TimeLineLogo/Logo3.svg"
import solveprobelm from "../assets/TimeLineLogo/Logo4.svg"
import Timeline from '../Components/Timeline';
import progress from "../assets/Images/Know_your_progress.svg"
import compare from "../assets/Images/Compare_with_others.svg"
import lessons from "../assets/Images/Plan_your_lessons.svg"

const WhiteSection = () => {
  return (
    <div>
        <div className='bg-pure-greys-5 text-richblack-800'>
            <div className='homepage_bg h-[333px] flex items-center justify-center lg:space-x-8 max-md:flex-col max-md:gap-7'>
            <YellowButton text={"Explore Full Catalog"} linkto={"/signup"} icon={<FaArrowRight/>} />
            <BlackButton text={"Learn More"} linkto={"/login"} />
            </div>
        </div>

        <div className='bg-pure-greys-5 text-richblack-700 pt-20'>
            <div className='flex items-start lg:ml-20 lg:mr-20 max-md:flex-col max-md:ml-4 max-md:gap-5'>
                <div>
                    <h1 className='text-4xl font-semibold'>
                    Get the skills you need for a <HighlightText text={"job that is in demand."} />
                    </h1>
                </div>

                <div className='flex flex-col lg:gap-8 lg:w-[700px] max-md:gap-5'>
                    <p>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than 
                    professional skills.
                    </p>
                    <YellowButton text={"Learn More"} />
                </div>
            </div>
        </div>

        <div className='bg-pure-greys-5 text-richblack-700 pt-20'>
            <div className='flex flex-row items-center gap-16 pl-16'>
                <div className='relative flex flex-col gap-5'>
                    <Timeline imgSrc={leadership} heading={"Leadership"} text={"Fully Committed to the success company"} />
                    <Timeline imgSrc={responsibility} heading={"Responsibility"} text={"Students will always be our top priority"} />
                    <Timeline imgSrc={flexibility} heading={"Flexibility"} text={"The ability to switch is an important skills"} />
                    <Timeline imgSrc={solveprobelm} heading={"Solve the Problem"} text={"Code your way to a solution"} />
                </div>

                <div className='relative'>
                    <img src={timelineimg} width={714} height={545} alt='timelinelogoimg' loading='lazy' />
                    <div className='bg-caribbeangreen-700 text-pure-greys-5 flex flex-row gap-5 items-center justify-evenly h-24 absolute 
                    -bottom-12 left-16 px-20'>
                        <div className='flex items-center gap-7'>
                            <h1 className='font-bold text-4xl'>10</h1>
                            <p className='uppercase text-caribbeangreen-400 w-[100px]'>Years Experiences</p>
                        </div>
                        <div className='w-10 h-[1px] rotate-90 bg-pure-greys-5' />
                        <div className='flex items-center gap-7'>
                            <h1 className='font-bold text-4xl'>250</h1>
                            <p className='uppercase text-caribbeangreen-400 w-[100px]'>Types of Courses</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-pure-greys-5 text-richblack-700 pt-32 pb-10'>
        <div className='flex flex-col'>
          <div className="space-y-5">
            <h1 className='text-4xl font-semibold text-center'>
            Your swiss knife for <HighlightText text={"learning any language"} />
            </h1>
            <p className='font-medium text-center w-[700px] mx-auto'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, 
                custom schedule and more.
            </p>
          </div>

          <div className='flex flex-row items-center justify-center py-10'>
            <img src={progress} alt='know-your-progress' className='object-contain size-1/4 -mr-20' />
            <img src={compare} alt='compare-with-other' className='object-contain size-1/4' />
            <img src={lessons} alt='plan-your-lessons' className='object-contain size-1/4 -ml-24' />
          </div>

          <div className='flex items-center justify-center py-10'>
            <YellowButton text={"Learn More"} linkto={"/signup"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhiteSection;
