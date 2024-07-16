import Image from 'next/image'
import ProfilePic from '../../public/ProfilePic1.png'

const About = () => {
  return (
    <div className="text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-stone-400 mb-6">User Interface And User Experience And Also Video Editing</p>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
            <Image src={ProfilePic} alt="Profile Picture" width={500} height={600} className="rounded-lg" />
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg mb-6 text-stone-400">
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs. In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code designs. In this digital atelier.
            </p>
            <button className="bg-orange-600 px-6 py-2 rounded text-lg mb-6">Download CV</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
