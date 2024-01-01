  'use client'; // Mark this file as a Client Component
  import React, { useState, useEffect } from 'react';
  import Image from 'next/image';
  import Man from '../assets/man.jpg';
  import Homeimg  from '../assets/home.png';
  import AboutImg from '../assets/about.png';
  import ContactImg from '../assets/contactme.png';
  import Projectimg from '../assets/project.png';
  import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
  import 'react-vertical-timeline-component/style.min.css';
  export default function Home() {
    // const [Mode,setMode] = useState('black');
    // const [Modebg,setModebg] = useState('white');
    // const [Tmode,setTmode] = useState('Dark Mode');
    // const toggleDarkMode=()=>{
    //   setMode('white');
    //   setModebg('black'); 
    //   setTmode('Light Mode');
    //   if(Mode == "white" && Modebg == "black"){
    //     setMode('black');
    //     setModebg('white');
    //     setTmode('Dark Mode');
    //   }
    // }
    // const [Text,setText] = useState('');
    // const textarray = ["Web Developer","Youtuber","Amateur Photographer","Noob at Video Editing"];

    return (
      <>
        <div className=' bg-lime-200 lg:h-20 sm:h-0 '>
          {/* <a href='/' className='lg:mx-12 items-center sm:w-28  lg:h-12 lg:mt-5 lg:w-32  lg:text-lg font-semibold bg-red-300 rounded-3xl absolute flex'><Image src={Homeimg} className='mx-2' width={35}/>Home</a> */}
          <a href='/projects' className='lg:right-96   sm:ml-[17rem] sm:mt-[25.5rem] sm:w-[8rem] sm:h-[2.8rem] sm:z-50 items-center  lg:h-12 lg:mt-5 lg:w-36  lg:text-lg font-semibold bg-red-300 rounded-3xl absolute flex'><Image src={Projectimg} className='mx-2' width={35}/>Projects</a>
          <a href='/about' className='lg:right-60 sm:ml-[17rem] sm:h-[2.8rem] sm:mt-5 sm:z-50 sm:w-28 items-center lg:h-12  mt-5 lg:w-32 lg:text-lg  font-semibold bg-red-300 rounded-3xl absolute flex'><Image src={AboutImg} className='mx-2' width={35}/>About</a>
          <a href='/contact' className='right-20 lg:visible  items-center h-12 mt-5 w-36  text-lg font-semibold bg-red-300 rounded-3xl absolute flex'><Image src={ContactImg} className='mx-2' width={35}/>Contact</a>
        </div>
        <div className='pattern2 flex flex-row'>
        <div className='pattern  h-96 w-full absolute  text-black '>
        <button className='right-8 mt-10 fixed  bottom-6 rounded-full w-42 h-12 z-50'><a href='/contact'>Get in touch</a></button>
        </div>
          <Image src={Man} className='lg:mx-60 sm:-mx-6 mt-10 z-50 lg:w-[32rem] sm:w-[18rem]' alt="Picture of me" />
          <h1 className='lg:mt-60 lg:text-5xl lg:right-[13rem] sm:mt-20 sm:text-3xl lg:w-[20rem]  sm:w-36 sm:right-8 absolute text-black font-extrabold'>I&lsquo;m Adarsh </h1>
        <h1 className='lg:mt-[22.3rem] lg:text-5xl lg:right-50 sm:mt-40 sm:text-3xl lg:w-[30rem] sm:w-32 sm:right-12 absolute text-black font-bold'>A Web Developer</h1>
        </div>
        <div>
        </div>
        <div className='bg-green-300 '>
        <div className='w-full  text-center  text-black'>
          <br/>
           <h1 className='lg:text-5xl sm:text-3xl font-extrabold'> ⌈ My Journey ⌋</h1>
        </div>
        <VerticalTimeline lineColor='transparent' className='lg:top-12 sm:top-0 '>
        <VerticalTimelineElement visible={true} contentStyle={{borderBottom :'8px',borderSty1e :' solid',boxShadow: 'none',borderRadius:"25px",alignContent:"center",textAlign:"center",margin:"0px"}}>
          <div className='caret-red-300 w-full sm:h-20 bg-lime-300 rounded-2xl'>
            <h1 className='text-2xl font-bold'>Got into a College</h1>
            <p>After 12, I choose Engineering😅</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement visible={true}  contentStyle={{borderBottom :'8px',borderSty1e :' solid',boxShadow: 'none',borderRadius:"25px",alignContent:"center",textAlign:"center",margin:"0px"}}>
          <div className='caret-red-300 w-full lg:h-20 sm:h-28 bg-cyan-400  rounded-2xl'>
            <h1 className='text-2xl font-bold  '>Begun my journey of Programming</h1>
            <p>Started with C/c++ and Web development</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement visible={true}  contentStyle={{borderBottom :'8px',borderSty1e :' solid',boxShadow: 'none' ,borderRadius:"25px",alignContent:"center",textAlign:"center",margin:"0px"}}>
          <div className='caret-red-300 w-full lg:h-20 sm:h-28  bg-orange-300 rounded-2xl'>
            <h1 className='text-2xl font-bold  '>Started doing Fronted Projects</h1>
            <p>Built News App,Calculator,Notes app,etc </p>
          </div>
        </VerticalTimelineElement>  
        <VerticalTimelineElement visible={true}  contentStyle={{borderBottom :'8px',borderSty1e :' solid',boxShadow: 'none' ,borderRadius:"25px",alignContent:"center",textAlign:"center",margin:"0px"}}>
          <div className='caret-red-300 w-full lg:h-20 sm:h-32  bg-green-300 rounded-2xl'>
            <h1 className='text-2xl font-bold  '>Built typing speed game for Dhishna</h1>
            <p>&quot;QwertyRumble&quot; event, In which people test their speed.    </p>
          </div>
        </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
        </>
    );
  }
      