import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>SIB Infotech - All right reserved - Design & Developed by Ram kashyap</p>
          <div className='social'>
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
            <AiFillGithub className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
