import React from 'react'
import Image from 'next/image'
import Homepr  from '../../assets/home.png';
const Page = () => {
  return (
    <div className='max-container bg-green-200 h-screen relative'>
      <br/>
      <a href='/' className='mx-12 -mt-1  items-center h-12  w-32 text-lg font-semibold bg-red-300 rounded-3xl  flex'><Image src={Homepr} className='mx-2' width={35}/>Home</a>
      <h1 className='head-text mt-12 text-5xl mx-24 font-semibold drop-shadow blue-gradient_text'>
        Projects: 
      </h1>
      <div className='ml-28 mt-5'>  
          <ol>
          <li className='font-extrabold text-2xl mb-3'>Done Projects :</li>
            <li className=' text-2xl'>Qwerty Rumble: A typing test game for our college TechFest &quot;Dhishna&quot;</li>
            <li className='font-extrabold text-2xl mb-3 mt-5'>Currently Working on :</li>
            <li className=' text-2xl'>GiftedBooks: An online Book selling Website.</li>
            <li className=' text-2xl'>HappyU: Website to prevent Suicides , considering their problem it provides solutions and help them .</li>
          </ol>
      </div>
      <div mt-12 flex>

      </div>
    </div >
  )
}

export default Page