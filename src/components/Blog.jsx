import React from 'react';
import { Link } from 'react-router-dom';
import { getBlogSummaries } from '../data/blogData';

const BlogCard = ({ slug, image, date, title, description, readTime }) => {
  return (
    <div className="blog-card">
      <div
        className="blog-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{date}</span>
          <span className="blog-divider">•</span>
          <span className="blog-read-time">{readTime}</span>
        </div>
        <h3 className="blog-post-title">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="blog-excerpt">{description}</p>
        <Link to={`/blog/${slug}`} className="blog-read-more">
          Read More ➜
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = getBlogSummaries();

  return (
    <section className="blog-section" id="blog-section">
      <div className="blog-container">
        <div className="blog-heading">
          <span className="blog-subheading">Blog</span>
          <h2 className="blog-title">My Blog</h2>
          <p className="blog-description">Insights from my development journey and projects I've built.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;