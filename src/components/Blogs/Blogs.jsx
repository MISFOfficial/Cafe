import React, {useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({handleBookMarked}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(blogs)
    return (
        <div>
            <h1 className='text-2xl font-bold'>Available Blogs {blogs.length}</h1>
            {/* <Blog></Blog> */}
            <div className="single-blog grid grid-cols-2 gap-[20px] justify">
                {
                    blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookMarked={handleBookMarked}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;