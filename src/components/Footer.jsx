import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import logo from "../../public/logo.png"
const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto text-center">
        
        <h1 className="text-2xl font-bold text-red-500 mb-4">JefinRojar</h1>
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">About me</a></li>
            <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact me</a></li>
          </ul>
        </nav>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-400"><FaGithub /></a>
          <a href="#" className="hover:text-gray-400"><FaBehance /></a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:jefinrojar@gmail.com" className="flex items-center hover:text-gray-400">
            <FaEnvelope className="mr-2" /> jefinrojar@gmail.com
          </a>
          <a href="tel:+93729107005" className="flex items-center hover:text-gray-400">
            <FaPhone className="mr-2" /> 6380569995
          </a>
        </div>
        <p className="text-gray-400">Developed by @Jefinrojar J Full Stack Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
