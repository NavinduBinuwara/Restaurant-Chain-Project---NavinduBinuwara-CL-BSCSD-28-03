import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Slider from '../../components/Slider/Slider'
import Form from '../../components/Form/Form'
import FoodFilter from '../../components/FoodFilter/FoodFilter'

const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
      <Slider/>
      <AppDownload/>
      <Form/>
      <FoodFilter/>
    </>
  )
}

export default Home
