import React from 'react'
import Product from './Product'
import {Link} from 'react-router-dom'

function ProductData(props) {
  return (
                    <div className=" relative ">
                        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                            <p className="text-xs leading-3 text-gray-800">New</p>
                        </div>
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img style={{height:'600px'}} className=" w-full" src={props.pic} alt="A girl Posing Img" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                               <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Cart</button>
                               <Link to='/product'><button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button></Link>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{props.name}</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">{props.price}</p>
                        <div className='w-full mt-5'>
                            <button className=' border-2 px-4 py-2 border-solid border-black mx-4'>XL</button>
                            <button className=' border-2 px-4 py-2 border-solid border-black mx-4'>L</button>
                            <button className=' border-2 px-4 py-2 border-solid border-black mx-4'>M</button>
                            <button className=' border-2 px-4 py-2 border-solid border-black mx-4'>S</button>
                        </div>
                    </div>
  )
}

export default ProductData