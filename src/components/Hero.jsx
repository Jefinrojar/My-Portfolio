import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa'
import ProfilePic from "../../public/ProfilePic1.png"

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  text-white p-6">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-around">
        <div className="lg:w-1/2 lg:pr-10 ">
          <h2 className="text-5xl">Hi I am</h2>
          <h1 className="text-7xl font-bold mt-2">Jefin Rojar J</h1>
          <h3 className="text-6xl text-orange-600 font-bold mt-2">Web Developer</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={30} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaBehance size={30} /></a>
          </div>
          <div className="flex space-x-10 mt-4">
            <button className="bg-orange-600 px-4 py-2 rounded">Hire Me</button>
            <button className="border border-gray-600 px-4 py-2 rounded">Download CV</button>
          </div>
          <div className="flex space-x-12 mt-6">
            <div>
              <h4 className="text-6xl font-bold">1+</h4>
              <p className="text-gray-400">Experiences</p>
            </div>
            <div>
              <h4 className="text-6xl font-bold">5+</h4>
              <p className="text-gray-400">Project done</p>
            </div>
            <div>
              <h4 className="text-6xl font-bold">5+</h4>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/6 lg:mt-0 mt-8">
          <Image src={ProfilePic} alt="Jefinrojar" width={400} height={400} className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Hero
