import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMarked }) => {
    // console.log(handleBookMarked)
    return (
        <div>
            {/* each blog in dynamic */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.cover} />
                </figure>
                <div className="p-5 flex flex-col gap-y-5 text-start ">
                    {/* author */}
                    <div className="flex items-center justify-between">
                        <p className='font-bold'>{blog.author}</p>
                        <div className='flex items-center gap-7'>
                            <img src={blog.author_img} alt="" className='w-[50px] ' />
                            <button onClick={()=>handleBookMarked(blog)} className='btn p-0 bg-transparent border-none'><FaBookmark className='text-2xl'/></button>
                        </div>
                    </div>
                    {/* text-part */}
                    <h2 className="card-title">{blog.title}</h2>
                    <div className="hashtags flex items-start  gap-5">
                        {
                            Object.values(blog.hashtags).map((hashtag, index) => (
                                <span key={index} className="flex gap-">{hashtag}</span>
                            ))
                        }
                    </div>
                    < div className="card-actions justify-end">
                        <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;