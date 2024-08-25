"use client"
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    { id: 1, topic: 'Front Development', content: 'Building responsive and interactive front-end web applications.' },
    { id: 2, topic: 'Back-End Development', content: 'Developing robust server-side logic and database management.' },
    { id: 3, topic: 'UI/UX Design', content: 'Designing user interfaces with a focus on user experience.' },
    { id: 4, topic: 'Full-Stack Development', content: 'Creating complete web applications from front to back.' }
];

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const Services = () => {
    return (
        <div className='text-white py-16'>
            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold mb-5'>Services</h1>
                <p className='text-lg text-stone-400'>
                    Offering web development, UI/UX design, responsive design, SEO optimization, e-commerce solutions, and content management services
                </p>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6'>
                {services.map((item) => (
                    <motion.div
                        key={item.id}
                        className='bg-neutral-800 p-6 rounded-lg shadow-lg'
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                    >
                        <div className='flex items-center justify-center mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-orange-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <h2 className='text-2xl font-bold mb-2 text-center'>{item.topic}</h2>
                        <p className='text-stone-400 text-center'>{item.content}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
