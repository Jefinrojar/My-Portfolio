"use client"
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfilePic from '../../public/ProfilePic.jpg';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center text-white p-6">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-around">
        <div className="lg:w-1/2 lg:pr-10">
          <motion.div
            className="text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi I am
          </motion.div>
          <motion.h1
            className="text-7xl font-bold mt-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Jefin Rojar J
          </motion.h1>
          <motion.h3
            className="text-6xl text-orange-600 font-bold mt-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Full Stack Developer
          </motion.h3>
          <motion.div
            className="flex space-x-4 mt-4"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.a
              href="https://www.linkedin.com/in/jefin-rojar-j"
              className="text-gray-400 hover:text-white"
              variants={item}
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a
              href="https://github.com/Jefinrojar"
              className="text-gray-400 hover:text-white"
              variants={item}
            >
              <FaGithub size={30} />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex space-x-10 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="bg-orange-600 px-4 py-2 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
            <Link href="https://drive.google.com/file/d/1R1OBdr0wtm-CxHh6x5mGgMt7cGReuegP/view?usp=sharing">
              <motion.button
                className="border border-gray-600 px-4 py-2 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </Link>
          </motion.div>
          <motion.div
            className="flex space-x-12 mt-6"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.div variants={item}>
              <h4 className="text-6xl font-bold">1+</h4>
              <p className="text-gray-400">Experiences</p>
            </motion.div>
            <motion.div variants={item}>
              <h4 className="text-6xl font-bold">5+</h4>
              <p className="text-gray-400">Project done</p>
            </motion.div>
            <motion.div variants={item}>
              <h4 className="text-6xl font-bold">5+</h4>
              <p className="text-gray-400">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="lg:w-2/6 lg:mt-0 mt-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="relative group">
            <Image
              src={ProfilePic}
              alt="Jefinrojar"
              width={400}
              height={400}
              className="rounded-full border-4 border-gradient-to-r from-orange-500 to-yellow-500 shadow-lg transition-transform duration-500 transform group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
