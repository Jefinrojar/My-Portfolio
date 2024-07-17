import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-8 rounded-lg shadow-lg max-w-7xl w-full">
        <h1 className="text-2xl font-bold text-white text-center mb-4">Contact me</h1>
        <p className="text-center text-gray-400 mb-8">Cultivating Connections: Reach Out And Connect With Me</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-2 rounded bg-neutral-800  text-white border border-gray-600 focus:outline-none focus:border-gray-400" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 rounded bg-neutral-800  text-white border border-gray-600 focus:outline-none focus:border-gray-400" 
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Phone Number" 
              className="w-full p-2 rounded bg-neutral-800  text-white border border-gray-600 focus:outline-none focus:border-gray-400" 
            />
            <select 
              className="w-full p-2 rounded bg-neutral-800  text-white border border-gray-600 focus:outline-none focus:border-gray-400"
            >
              <option>Service Of Interest</option>
              <option>Frontend</option>
              <option>backend</option>
              <option>Fullstack</option>
            </select>
          </div>
          <input 
            type="text" 
            placeholder="Timeline" 
            className="w-full p-2 rounded bg-neutral-800  text-white border border-gray-600 focus:outline-none focus:border-gray-400" 
          />
          <textarea 
            placeholder="Project Details..." 
            className="w-full p-2 rounded bg-neutral-800  text-white border border-gray-600 focus:outline-none focus:border-gray-400" 
            rows="4"
          ></textarea>
          <div className="text-right">
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
