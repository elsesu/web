import React from 'react'
import { Blog } from '../../blog'
import './style.css'
import DisplayBlogCard from '../displayBlog/DisplayBlogCard'
const BlogCard = () => {
  return (
    <div className='area-container'>
      <div className='all-header'>
        <h1 className='network'>Blogs & Resources</h1>
      </div>
      <div className='out-jobs1'>
        {Blog.map((blog, key)=>(
<DisplayBlogCard
id={blog.id}
key={key.id}
head={blog.head}
paragraph={blog.paragraph}
image={blog.image}
/>
        ))}
      </div>
    </div>
  )
}

export default BlogCard
