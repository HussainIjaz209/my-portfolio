import React from 'react';

const BlogCard = ({ image, date, title, description }) => {
  return (
    <div className="blog-card">
      <div 
        className="blog-image"
        style={{backgroundImage: `url(${image})`}}
      ></div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{date}</span>
          <a href="#" className="blog-author">Admin</a>
          <a href="#" className="blog-comments">
            💬 3
          </a>
        </div>
        <h3 className="blog-post-title">
          <a href="single.html">{title}</a>
        </h3>
        <p className="blog-excerpt">{description}</p>
        <a href="single.html" className="blog-read-more">
          Read More ➜
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      image: "images/image_1.jpg",
      date: "July 03, 2020",
      title: "Why Lead Generation is Key for Business Growth",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      image: "images/image_2.jpg",
      date: "July 03, 2020",
      title: "Why Lead Generation is Key for Business Growth",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    },
    {
      image: "images/image_3.jpg",
      date: "July 03, 2020",
      title: "Why Lead Generation is Key for Business Growth",
      description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
  ];

  return (
    <section className="blog-section" id="blog-section">
      <div className="blog-container">
        <div className="blog-heading">
          <span className="blog-subheading">Blog</span>
          <h2 className="blog-title">Our Blog</h2>
          <p className="blog-description">Stay tune with Us through our blogs.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;