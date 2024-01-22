import React from 'react'
import { useState,useEffect } from 'react'
import notFound from '../assets/notFound.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ItemContext from '../Context/ItemContext'

function ItemCard() {
    const {data,loading} = useContext(ItemContext);
    const history = useNavigate()
;
  return (
    <div className='flex  justify-evenly gap-14 flex-wrap pt-10 bg-gray-100 pb-20'>
        {
            data.map((item )=>{
                return(
                    // <div className=' '>
                    <div className='w-[20rem]  bg-white  p-[0.4rem] shadow-lg border-gray-400 rounded-md flex justify-center  hover:shadow-xl  hover:duration-200 hover:transition-all   ' >
                            <div className=''>
                            <div className='  '>
                                {
                                    item.show.image ? <img src={item.show.image.medium} alt="" className='w-[18rem]   rounded-sm mt-2'  /> : <img
                                    src={notFound} alt="" className='max-w-[17rem]  mb-20 mt-2' />
                                }
                            </div>
                            <p className='flex pt-2'> <p className='font-semibold pr-1'>Name: </p>{item.show.name}</p>
                            <p className='flex pt-2'>
                                <p className='font-semibold pr-1'>Genre:</p> <span>{item.show.genres[0]}</span>
                            </p>
                            <p>
                                {
                                    item.show.rating.average ? 
                                    <p className='flex pt-2'>
                                        <p className='font-semibold pr-1'>
                                            Rating:
                                        </p>
                                        <span>{item.show.rating.average}</span>
                                    </p>
                                     : 
                                    //  <span>Not Rated</span>
                                    <p className='flex pt-2'>
                                    <p className='font-semibold pr-1'>
                                        Rating:
                                    </p>
                                    <span>Not Rated</span>
                                </p>
                                }
                            </p>
                            <div className='flex pt-2'>
                                <p className='font-semibold pr-1'>
                                    Language:
                                </p>
                                {item.show.language}
                            </div>
                            <div className='flex py-2 '>
                                <p className='font-semibold pr-1'>
                                    Status:
                                </p>
                                {item.show.status}
                            </div>
                            <div className=''>
                             <Link to={`/detail/${item.show.id}`} >
                                <div className='bg-black text-white px-8 py-2 rounded-sm mb-3  font-semibold'>
                                 <p className='text-center'>More Info</p>

                                </div>
                            </Link>

                            </div>
                            </div>
                        </div>
                    // </div>
                )
            })
        }
    </div>
  )
}

export default ItemCard