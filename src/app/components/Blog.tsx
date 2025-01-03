import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Blog</h2>
        <p className="text-lg mb-4">Check out our latest articles and updates!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Blog Post Title</h3>
            <p className="text-gray-300">A brief summary of the blog post goes here.</p>
            <a href="#" className="text-[#DAA520]">Read More</a>
          </div>
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Another Blog Post</h3>
            <p className="text-gray-300">A brief summary of another blog post goes here.</p>
            <a href="#" className="text-[#DAA520]">Read More</a>
          </div>
          <div className="bg-[#333] p-4 rounded">
            <h3 className="font-bold text-xl">Latest Updates</h3>
            <p className="text-gray-300">A brief summary of the latest updates goes here.</p>
            <a href="#" className="text-[#DAA520]">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;