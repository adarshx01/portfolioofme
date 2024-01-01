'use client'
import React from 'react';
import Image from 'next/image'
import Homelogo  from '../../assets/home.png';
import Man from '../../assets/man.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Page = () => {
  return (//things i love doing, hobby , current projects, 
    <div className='max-container bg-green-200 h-screen relative  '>
      <br/>
      <a href='/' className='mx-12 -mt-1  items-center h-12  w-32 text-lg font-semibold bg-red-300 rounded-3xl  flex'><Image src={Homelogo} className='mx-2' width={35}/>Home</a>
      <h1 className='head-text lg:mt-12 sm:text-2xl lg:w-[24rem] sm:w-[14rem] sm:mt-10 sm:mx-auto lg:text-5xl lg:mx-60 sm:border-0 lg:border-2 p-2 w-fit rounded-lg border-cyan-400'>
        I`&apos`m <span className='font-semibold drop-shadow'>Adarsh Vishwakarma</span> 
      </h1>
      <div className='lg:mx-auto lg:mt-5 sm:w-[23rem] sm:mx-auto lg:w-[36rem] sm:mt-5 border-2 w-fit p-4 rounded-lg border-red-300'>
        <p className='lg:w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate quam distinctio, rem iure inventore ipsum vitae pariatur. Ipsam nulla, dicta animi officia numquam voluptas aliquid quisquam nobis dolore qui.</p>
          <ol>
            <li>gvkjh</li>
            <li>ajsdfhiuh</li>
          </ol>
      </div>
      <div mt-12 flex>
      <a href='/contact' className='lg:mx-36 lg:mt-24 items-center sm:mx-auto sm:mt-16 h-12  w-44 text-lg font-semibold bg-red-300 rounded-3xl  flex'><Image src={Homelogo} className='mx-2' width={35}/>Get in Touch</a>
      </div>
    </div >
  )
}
export default Page