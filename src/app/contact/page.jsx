'use client';
import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import Homecontact from '../../assets/home.png';

const Page = () => {
  const [formData, setFormData] = useState({name: '',email: '',message: '',});

  const HandleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    // Construct email body with form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`;

    // Send email using a suitable method (e.g., Nodemailer for server-side)
    // For demonstration, using a mailto link:
    window.location.href = `mailto:vish.adarsh01@gmail.com?subject=Contact Form&body=${emailBody}`;
  };

  return (
    <div className='max-container lg:bg-green-200 h-screen relative md:bg-violet-400'>
      <br />
      <a href='/' className='mx-12 items-center  h-12 -mt-1 w-32  text-lg font-semibold bg-red-300 rounded-3xl absolute flex'><Image src={Homecontact} className='mx-2' width={35}/>Home</a>
      <h1 className='text-center lg:mt-5 sm:mt-28 font-extrabold text-4xl'>Connect With Me!</h1>
      <div className='bg-orange-500 lg:w-[40rem] sm:w-[23rem] p-2 h-[28rem] text-center justify-center m-auto sm:mt-10 lg:mt-16 relative'>
        <div className='bg-blue-900 lg:w-[40rem] sm:w-[23rem] sm:ml-1 h-[28rem] mt-2 lg:ml-3 text-center justify-center m-auto relative'>
          <form onSubmit={HandleSubmit} className=''>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={HandleChange}
              className='lg:w-[36rem] sm:w-[20.5rem] m-auto mb-3 relative pl-4 h-10 flex'
              placeholder='Name'
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={HandleChange}
              className='lg:w-[36rem] sm:w-[20.5rem] m-auto mb-3 h-10 pl-4 flex'
              placeholder='Email'
            />
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={HandleChange}
              className='lg:w-[36rem] sm:w-[20.5rem] m-auto h-60 pl-4 pb-48 flex'
              placeholder='Say hello!'
            />
            <button className="button mt-5">Send🚀</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
