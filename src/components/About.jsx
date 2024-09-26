"use client"
import Image from 'next/image';
import AboutPic from '../../public/AboutPic.jpg';
import Skills from './Skills';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            ref={headerRef}
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-stone-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            ref={headerRef}
          >
            Frontend And Backend Development And Also Database Management
          </motion.p>
        </div>
        <div className="lg:flex lg:items-center">
          <motion.div
            className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.9 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            ref={imageRef}
          >
            <Image src={AboutPic} alt="Profile Picture" width={500} height={600} className="rounded-lg border-4 border-stone-800 shadow-sm" />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : 20 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            ref={textRef}
          >
            <p className="text-lg mb-6 mt-16 text-stone-400">
              A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions. Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs. In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code designs. In this digital atelier.
            </p>
            <Link href="https://drive.google.com/file/d/1R1OBdr0wtm-CxHh6x5mGgMt7cGReuegP/view?usp=sharing">
              <motion.button
                className="bg-orange-600 px-6 py-2 rounded text-lg mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Download CV
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default About;
