import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ItemContext from '../Context/ItemContext'
import notFound from '../assets/notFound.png'
import Loader from './Loader'


function ItemDetail() {
    const {data,loading} = useContext(ItemContext);
    const {id} = useParams();

    const [description, setDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate();


  const filteredDataById = (id) => {
    return data.filter((item) => item.show.id === parseInt(id))[0].show;
  };


  const fetchProductById = async (productId) => {
    setIsLoading(true);
    setError(null);

    try {
    const response = await fetch(`https://api.tvmaze.com/shows/${productId}`); 
      if (response.ok) {
        const productData = await response.json();
        setDescription(productData);
      } else {
        setError('Failed to fetch product data');
      }
    } catch (err) {
      setError('Error fetching product data');
      console.error('Error fetching product data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data.length !== 0) {
      setDescription(filteredDataById(id));
    } else {
      fetchProductById(id);
    }
  }, [data, id]);

  console.log("sdfasdf",description)


  return (
    <>
        {
            !isLoading  && (
                <>
                {
                    description !==null &&(
                       <div className='mt-5 flex justify-center'> 
        <div className='flex-wrap border-gray-300 border-2 m-2 p-2 mx-10 justify-evenly items-center rounded-md max-w-[1250px] w-[90%]  ' >
            <div className='flex justify-center'>
                {
                    description.image ? <img src={description.image.medium} alt="" className='w-[70vw]  lg:max-w-[20rem] 
                      rounded-sm '  /> : <img
                    src={notFound} alt="" className='max-w-[20vw]  mb-20 mt-2' />
                }
            </div>
            <div className='w-[100%]  pl-3'>
                <p className=' flex-wrap lmobile:flex pt-2 text-lg'> <p className='font-semibold pr-1'>Name: </p>{description.name}
                </p>
                <p className='flex-wrap lmobile:flex pt-2 text-lg'>
                    <p className='font-semibold pr-1'>Genre:</p> <span>{description.genres[0]}</span>
                </p>
                <div className=' pt-2 text-lg'>
                    <p className='font-semibold pr-1 '>
                        Summary:
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: description.summary }}  />
                </div>
                <div className='flex-wrap lmobile:flex pt-2 align-middle items-center'>
                    <p className='font-semibold text-lg '>
                        Official Site:
                    </p>
                    <a href={description.officialSite} target='_blank' rel="noreferrer" className='text-green-900 font-medium pl-0 lmobile:pl-2 text-base'>{description.officialSite}</a>
                </div>
                    {
                        description.network ? 
                        <p className='flex-wrap lmobile:flex pt-2 text-lg'>
                            <p className='font-semibold pr-1'>
                                Country:
                            </p>
                            <span>{description.network.country.name}</span>
                        </p>
                        : 
                        <p className='flex-wrap lmobile:flex pt-2 text-lg'>
                        <p className='font-semibold pr-1'>
                            Country:
                        </p>
                        <span>Not Available</span>
                    </p>
                    }
                <div className='flex-wrap lmobile:flex pt-2 text-lg'>
                    <p className='font-semibold pr-1'>
                        Premiered:
                    </p>
                    {description.premiered}
                </div>
                

                <p>
                    {
                        description.rating.average ? 
                        <p className='flex-wrap lmobile:flex pt-2 text-lg'>
                            <p className='font-semibold pr-1'>
                                Rating:
                            </p>
                            <span>{description.rating.average}</span>
                        </p>
                        : 
                        <p className='flex-wrap lmobile:flex pt-2 text-lg'>
                        <p className='font-semibold pr-1'>
                            Rating:
                        </p>
                        <span>Not Rated</span>
                    </p>
                    }
                </p>
                
                <div className='flex-wrap lmobile:flex pt-2 text-lg'>
                    <p className='font-semibold pr-1'>
                        Language:
                    </p>
                    {description.language}
                </div>
                <div className='flex-wrap lmobile:flex  py-2  text-lg'>
                    <p className='font-semibold pr-1'>
                        Status:
                    </p>
                    {description.status}
                </div>
            </div>
        </div>
    </div>
                    )
                }
                </>
               
            )
        }
         {isLoading && <Loader />}
    </>


  )
}

export default ItemDetail