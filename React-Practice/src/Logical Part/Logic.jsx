import React, { useState } from 'react'
// AiOutlineStar
// AiFillStar

import {AiOutlineStar, AiFillStar} from 'react-icons/ai'



const Logic = () => {
  const [rating, setRating] = useState(0)

  function handleRating(i){
    setRating(i)
  }
  return (
    <div>
      {
        [...Array(5)].map((_, i) => {
          return (
            <span key={i} onClick={() => handleRating(i+1)}>
              {rating > i ? <AiFillStar/> : <AiOutlineStar/>}
            </span>
          )
        })
      }
    </div>
  )
}

export default Logic