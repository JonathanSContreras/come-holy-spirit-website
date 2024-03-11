import React from 'react'
import hermosoDiosShirt1 from '../../assets/mostRecent/hermoso-Dios-shirt-1.png'
import hermosoDiosShirt2 from '../../assets/mostRecent/hermoso-Dios-shirt-2.png'
import hermosoDiosTote from '../../assets/mostRecent/hermoso-Dios-tote.png'
import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id:1,
    img: hermosoDiosShirt1,
    title: "Hermoso Dios",
    description: "Blessed be the one who comes in the name of the Lord. ",
    aosDelay: "0",
  },
  {
    id:2,
    img: hermosoDiosShirt2,
    title: "Hermoso Dios",
    description: "Blessed be the one who comes in the name of the Lord. ",
    aosDelay: "0",
  },
  {
    id:3,
    img: hermosoDiosTote,
    title: "Hermoso Dios",
    description: "Blessed be the one who comes in the name of the Lord. ",
    aosDelay: "0",
  },
]

const MostRecentDrops = () => {
  return (
    <div>
      <div className='container '>
        {/* Header Section */}
        <div className='text-left mb-24'>
          <p data-aos="fade-up" className='text-sm text-primary'>Recently Released Products</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Recent Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt dignissimos exercitationem? Fugiat doloribus eaque asperiores explicabo libero accusantium, adipisci quaerat dolorum sequi placeat ipsa dolores, vero quidem est? Ducimus?</p>
        </div>
        {/* Body Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ProductsData.map((data) => (
              <div 
              data-aos="zoom-in"
              className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300]px'
              >
                {/* image section */}
                <div className='h-[100px]'>
                  <img src={data.img} 
                  alt=""
                  className='max-w-[140px] block mx-auto transform -tranlate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                </div>
                {/* details section */}
                <div className='p-4 text-center'>
                  {/* star rating */}
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                  </div>
                  <h1 className='text-xl font-bold'>{data.title}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                  <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                    // onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MostRecentDrops