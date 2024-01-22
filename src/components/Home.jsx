import React from 'react'
import HeroSection from './HeroSection'
import ItemCard from './ItemCard'
import { useContext } from 'react'
import ItemContext from '../Context/ItemContext'
import Loader from './Loader'

function Home() {
  const {loading} = useContext(ItemContext);
  return (
    <>
        {/* Hero Section */}
        <HeroSection/>
        {/* Card */}
        {
          loading ? (
            <>
              <Loader/>
            </>

          ):(
            <>
              <ItemCard/>
            </>
          )
        }
    </>
  )
}

export default Home