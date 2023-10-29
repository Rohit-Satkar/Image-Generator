"use client"
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {

  const [img, setimg] = useState([])
  const getimage = async ()=>{
    try{
      const responce = await axios.get("https://picsum.photos/v2/list")
      const data = responce.data
      setimg(data)
    }catch(error){
      console.error("Error Occcurs ...!")
    }
  }
  return (
    <>
      <div className='flex justify-center mt-10'>
      <div>
          <button onClick={getimage} className='border-none bg-white rounded-full text-black px-5 py-2 font-sans'>Generate Images</button>
        </div>
      </div>
      <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-4'>
          {img.map((ele,i)=>{
            return <img 
            key={i}
            src={ele.download_url
            }
            height={400}
            width={400}
            className='flex items-center border-4 border-white rounded-lg'
            />
          })}
        </div>
    </>
  )
}

export default page