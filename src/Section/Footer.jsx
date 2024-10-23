import React from 'react'
import logo from "../assets/Logo/Logo-Full-Light.png"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FooterLink2  } from '../data/footer-links';

const Footer = () => {
    return (
      <footer className="bg-richblack-800 text-richblack-200 py-10 px-8">
        <div className='flex items-start gap-16'>
            <div className='flex flex-col gap-5'>
                <img src={logo} alt='footer-logo' />
                <div>
                    <h3 className="font-bold pb-1">Company</h3>
                    <ul className='space-y-2'>
                        <li className='hover:text-richblack-5'>
                            <a href="#">About</a>
                        </li>
                        <li className='hover:text-richblack-5'>
                            <a href="#">Carrers</a>
                        </li>
                        <li className='hover:text-richblack-5'>
                            <a href="#">Affiliates</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <a href="#" className='text-3xl hover:text-richblack-5'><FaGithub/></a>
                    <a href="#" className='text-3xl hover:text-richblack-5'><FaInstagram/></a>
                    <a href="#" className='text-3xl hover:text-richblack-5'><FaXTwitter/></a>
                    <a href="#" className='text-3xl hover:text-richblack-5'><FaYoutube/></a>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-5">
            {FooterLink2.map((section, index) => (
                <div key={index}>
                <h3 className="font-bold mb-2">{section.title}</h3>
                <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                    <li key={idx}>
                        {/* Check if the link title is not a dash (-) */}
                        {link.title !== "-" && (
                        <a href={link.link} className="hover:text-richblack-5">
                            {link.title}
                        </a>
                        )}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>

        <div className='w-[1250px] mx-auto h-[1px] bg-pure-greys-400'></div>

        <div className='flex items-center justify-between w-[1200px] mx-auto pt-5'>
            <div className='flex items-center gap-4'>
                <a href="#" className=' hover:text-richblack-5'>Privacy Policy</a>
                <div className='w-1 h-1 rounded-full bg-richblack-200'/>
                <a href="#" className=' hover:text-richblack-5'>Cookie Policy</a>
                <div className='w-1 h-1 rounded-full bg-richblack-200'/>
                <a href="#" className=' hover:text-richblack-5'>Terms</a>
            </div>

            <div>
                <p>
                    Made with <span className='text-pink-300'>&#10084;</span> <span>&#169;</span> 2024 StudyNotion
                </p>
            </div>
        </div>
      </footer>
    )
  }
  

export default Footer;
