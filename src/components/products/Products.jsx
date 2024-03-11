import React from 'react'
import Img1 from '../../assets/shirts/shirt_1.png'
import Img2 from '../../assets/shirts/shirt_2.png'
import Img3 from '../../assets/shirts/shirt_3.png'
import Img4 from '../../assets/totes/tote_1.png'
import Img5 from '../../assets/totes/tote_2.png'

import emmanuelShirt1 from '../../assets/shirts/emmanuel-shirt-1.png'
import hossanaShirt1 from '../../assets/shirts/hosanna-shirt-1.png'
import kingdomShirt1 from '../../assets/shirts/kingdom-of-the-son-shirt-1.png'

import { FaStar } from "react-icons/fa6"

const ProductsData = [
  {
    id:1,
    img: emmanuelShirt1,
    title: "Emmanuel",
    rating: 5.0,
    color: "black",
    aosDelay: "0",
  },
  {
    id:2,
    img: hossanaShirt1,
    title: "Hossana",
    rating: 5.0,
    color: "black",
    aosDelay: "200",
  },
  {
    id:3,
    img: kingdomShirt1,
    title: "Kingdom of the Son",
    rating: 5.0,
    color: "black",
    aosDelay: "400",
  },
  // {
  //   id:4,
  //   img: Img4,
  //   title: "Stay Here AND",
  //   rating: 5.0,
  //   color: "black",
  //   aosDelay: "600",
  // },
  {
    // id:5,
    // img: Img5,
    // title: "Never Leave Us",
    // rating: 5.0,
    // color: "black",
    // aosDelay: "800",
  },
  
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>Popular Items for you</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nesciunt dignissimos exercitationem? Fugiat doloribus eaque asperiores explicabo libero accusantium, adipisci quaerat dolorum sequi placeat ipsa dolores, vero quidem est? Ducimus?</p>
        </div>
        {/* Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 place-items-center gap-10'>
            {/* card section */}
            {ProductsData.map((data) => (
              <div 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id} 
              className='space-y-3'>
                <img src={data.img} alt="" className=' h-[400px] object-cover rounded-md'/>
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400'/>
                    <span> {data.rating} </span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Products