import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategories from './Components/AddCategories'
import GifGrid from './Components/GifGrid'

const GifApp = props => {
  const [categories, setCategories] = useState(['Dragon Ball'])
  // const handleAdd=()=>{
  //   setCategories([...categories,'Death Note'])
  // }
  return (
    <>
      <h2>GifApp</h2>
      <AddCategories setCategories={setCategories}/>
      <hr/>
        {categories.map(category=>{
          return(
            <GifGrid
              key={category}
              category={category}
            />
          )
        })}
    </>
  )
}

GifApp.propTypes = {

}

export default GifApp
