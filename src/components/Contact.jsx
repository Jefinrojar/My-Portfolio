"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="flex items-center justify-center min-h-screen"
    >
      <motion.div
        className="p-8 rounded-lg shadow-lg max-w-7xl w-full"
        variants={itemVariants}
      >
        <motion.h1
          className="text-2xl font-bold text-white text-center mb-4"
          variants={itemVariants}
        >
          Contact me
        </motion.h1>
        <motion.p
          className="text-center text-gray-400 mb-8"
          variants={itemVariants}
        >
          Cultivating Connections: Reach Out And Connect With Me
        </motion.p>
        <motion.form className="space-y-4" variants={containerVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:border-gray-400"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:border-gray-400"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.input
              type="text"
              placeholder="Phone Number"
              className="w-full p-2 rounded bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:border-gray-400"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            />
            <motion.select
              className="w-full p-2 rounded bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:border-gray-400"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <option>Service Of Interest</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Fullstack</option>
            </motion.select>
          </div>
          <motion.input
            type="text"
            placeholder="Timeline"
            className="w-full p-2 rounded bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:border-gray-400"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          />
          <motion.textarea
            placeholder="Project Details..."
            className="w-full p-2 rounded bg-neutral-800 text-white border border-gray-600 focus:outline-none focus:border-gray-400"
            rows="4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          ></motion.textarea>
          <motion.div className="text-right" variants={itemVariants}>
            <motion.button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
