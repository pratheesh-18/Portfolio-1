import React from 'react';
import { FaAward } from 'react-icons/fa';

const content = [
  { date: '04-05-25', org: 'KGiSL Institute of Technology', details: 'Won 2nd place in Project Expo for developing an innovative solution in Agriculture Technology.' },
  {
    "date": "09-11-24",
    "org": "ISTE Tamilnadu Section",
    "details": "Participated in the National Level Srinivasa Ramanujan Mathematical Competitions Level 2 (State Level) conducted by ISTE Tamilnadu Section during the academic year 2024-2025."
  }
  
];

export default function Achievements() {
  return (
    <>
    <div id='achievement'>
    <hr  className="text-gray-500 w-[200vh] mx-10"/>
        <h1 className='text-4xl text-center text-white font-semibold pt-10 ' data-aos="zoom-in-up">My <span className='text-cyan-500'>Achievements</span></h1>
    </div>
    <div className='flex mt-20' data-aos="zoom-in" data-aos-duration="1000">
      {content.map((items, index) => (
        <div key={index} className="border border-[#0f0f1a]  hover:border-cyan-500 w-[80vh] h-full bg-[#0f0f1a] text-white rounded-xl shadow-lg flex items-start gap-4 mx-20">
          {/* Icon */}
          <div className="text-violet-400 text-2xl px-5 pt-10">
            <FaAward size={37} />
          </div>

          {/* Content */}
          <div>
            <span className="mt-10 bg-gray-600 text-white text-base font-medium px-2  rounded-full inline-block mb-1">
              {items.date}
            </span>
            <h2 className="text-lg font-semibold pt-2">{items.org}</h2>
            <p className="text-sm text-gray-400 pt-2 mb-8 line-clamp-2">
              {items.details}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
