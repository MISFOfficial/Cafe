import React from 'react';

const Blog = ({ blog }) => {

    console.log(blog)
    return (
        <div>
            {/* each blog in dynamic */}
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={blog.cover} />
                </figure>
                <div className="card-body text-start">
                    <div className=" author flex items-center ">
                        <p>{blog.author}</p>
                        <img src={blog.author_img} alt="" className='w-[50px]' />
                    </div>
                    <h2 className="card-title">{blog.title}</h2>
                    <div className="hashtags flex items-start">
                        {
                            Object.values(blog.hashtags).map((hashtag, index) => (
                                <span key={index} className="badge badge-outline mr-2">{hashtag}</span>
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