"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import travelWeb from '../../public/TravelWeb.png';
import GymWeb from '../../public/GymWeb1.jpg';
import FoodiesApp from '../../public/FoodiesApp.png';
import Taskmanager from '../../public/TaskManager.png';
import { useInView } from 'react-intersection-observer';

const Myproject = [
    { img: travelWeb, name: 'travelWeb' },
    { img: GymWeb, name: 'GymWeb' },
    { img: FoodiesApp, name: 'Foodies app' },
    { img: Taskmanager, name: 'Taskmanager' }
];

const MyProjects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Adjust this value to control when the animation should trigger
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
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
        >
            <h1 className="text-center font-bold text-3xl mb-6">My Projects</h1>
            <p className="text-center text-stone-400">
                Developed many responsive websites using the latest technologies, featuring a contact form, social media integration, and a professional footer.
            </p>
            <div className="flex flex-wrap justify-center">
                {Myproject.map((item, index) => (
                    <motion.div
                        key={index}
                        className="m-4 p-6 max-w-sm bg-neutral-800 rounded-lg shadow-md"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src={item.img} alt={item.name} width={250} height={200} className="rounded-t-lg" />
                        <p className="mt-4 text-xl font-semibold">{item.name}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default MyProjects;
