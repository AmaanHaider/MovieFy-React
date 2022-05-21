import React from 'react'
import { img_300, unavailable } from '../../Config/Config'

const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
  return (
    <div>
        {

            <>
            
            <img src={poster ?`${img_300}/${poster}`: unavailable}  alt="" />
            <h1>{title}</h1>
            </>


        }

    </div>
  )
}

export default SingleContent