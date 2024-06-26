import React from 'react'

const DisplayBlogCard = ({head, paragraph, id, image}) => {
  return (
    <div>
      <div><img src={image} alt="" /></div>
      <div>{head}</div>
      <div>{paragraph}</div>
    </div>
  )
}

export default DisplayBlogCard
