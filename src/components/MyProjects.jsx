import React from 'react';
import Image from 'next/image';
import travelWeb from "../../public/TravelWeb.png"
import GymWeb from "../../public/GymWeb1.jpg"
import FoodiesApp from "../../public/FoodiesApp.png"
import Taskmanager from "../../public/TaskManager.png"
const Myproject = [
    {
        img: travelWeb,
        name: 'travelWeb'
    },
    {
        img: GymWeb,
        name: 'GymWeb'
    },
    {
        img: FoodiesApp,
        name: 'Foodies app'
    },
    {
        img: Taskmanager,
        name: 'Taskmanager'
    }
];

const MyProjects = () => {
    return (
        <>
            <h1 className='text-center font-bold text-3xl mb-6'>My Projects</h1>
            <p className='text-center text-stone-400 '>Developed a many responsive website using latest technologies, featuring a contact form, social media integration, and a professional footer.</p>
            <div className="flex flex-wrap justify-center">
                {Myproject.map((item, index) => (
                    <div key={index} className="m-4 p-6 max-w-sm bg-neutral-800 rounded-lg shadow-md">
                        <Image src={item.img} alt={item.name} width={250} height={200} className="rounded-t-lg" />
                        <p className="mt-4 text-xl font-semibold">{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyProjects;
