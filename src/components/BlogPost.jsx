import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBlogBySlug } from '../data/blogData';
import '../style/BlogPost.css';


const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = getBlogBySlug(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="blog-post-not-found">
                <div className="container">
                    <h1>Blog Post Not Found</h1>
                    <p>The blog post you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/')} className="back-button">
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    // Render different layouts based on post ID
    if (post.id === 1) {
        return <SchoolManagementPost post={post} navigate={navigate} />;
    } else if (post.id === 2) {
        return <FullStackPost post={post} navigate={navigate} />;
    } else {
        return <DeveloperJourneyPost post={post} navigate={navigate} />;
    }
};

// School Management System Post Layout
const SchoolManagementPost = ({ post, navigate }) => (
    <div className="blog-post-detail">
        <button onClick={() => navigate('/')} className="back-button">
            ← Back to Portfolio
        </button>

        {/* Hero Section */}
        <div className="blog-post-hero">
            <div className="blog-post-image" style={{ backgroundImage: `url(${post.image})` }}></div>
            <div className="blog-post-header">
                <div className="blog-post-meta">
                    <span className="blog-post-date">{post.date}</span>
                    <span className="blog-post-divider">•</span>
                    <span className="blog-post-read-time">{post.readTime}</span>
                    <span className="blog-post-divider">•</span>
                    <span className="blog-post-author">{post.author}</span>
                </div>
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-intro">{post.intro}</p>
            </div>
        </div>

        <div className="blog-post-content">
            {/* Tech Stack Section */}
            <section className="blog-section-page">
                <h2 className="section-title">{post.techStack.title}</h2>
                <div className="tech-stack-grid">
                    {post.techStack.items.map((item, index) => (
                        <div key={index} className="tech-stack-card">
                            <h3 className="tech-category">{item.category}</h3>
                            <ul className="tech-list">
                                {item.technologies.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                            <p className="tech-description">{item.description}</p>
                        </div>
                    ))}
                </div>
                <p className="section-summary">{post.techStack.summary}</p>
            </section>

            {/* Features Section */}
            <section className="blog-section-page">
                <h2 className="section-title">{post.features.title}</h2>
                <div className="features-list">
                    {post.features.items.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <h3 className="feature-name">✅ {feature.name}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <ul className="feature-highlights">
                                {feature.highlights.map((highlight, idx) => (
                                    <li key={idx}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Challenges Section */}
            <section className="blog-section-page">
                <h2 className="section-title">{post.challenges.title}</h2>
                <div className="challenges-list">
                    {post.challenges.items.map((item, index) => (
                        <div key={index} className="challenge-card">
                            <h3 className="challenge-title">🎯 {item.challenge}</h3>
                            <p className="challenge-description">{item.description}</p>
                            <div className="challenge-learning">
                                <strong>What I learned:</strong> {item.learning}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Future Improvements Section */}
            <section className="blog-section-page">
                <h2 className="section-title">{post.futureImprovements.title}</h2>
                <ul className="improvements-list">
                    {post.futureImprovements.items.map((improvement, index) => (
                        <li key={index}>{improvement}</li>
                    ))}
                </ul>
            </section>

            {/* Links Section */}
            <section className="blog-section-page links-section">
                <h2 className="section-title">📎 Links & Resources</h2>
                <div className="project-links">
                    <a href={post.links.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                        <span className="link-icon">🔗</span>
                        <span className="link-text">View on GitHub</span>
                    </a>
                    <a href={post.links.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                        <span className="link-icon">🚀</span>
                        <span className="link-text">Live Demo</span>
                    </a>
                </div>
                <p className="links-note">{post.links.documentation}</p>
            </section>

            {/* Impact Section */}
            <section className="blog-sectio-pagen impact-section">
                <h2 className="section-title">{post.impact.title}</h2>
                <div className="impact-list">
                    {post.impact.items.map((item, index) => (
                        <div key={index} className="impact-card">
                            <h3 className="impact-point">💡 {item.point}</h3>
                            <p className="impact-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion */}
            <section className="blog-section-page conclusion-section">
                <h2 className="section-title">Final Thoughts</h2>
                <p className="conclusion-text">{post.conclusion}</p>
            </section>
        </div>

        <button onClick={() => navigate('/')} className="back-button bottom">
            ← Back to Portfolio
        </button>
    </div>
);

// Full-Stack Development Post Layout
const FullStackPost = ({ post, navigate }) => (
    <div className="blog-post-detail">
        <button onClick={() => navigate('/')} className="back-button">
            ← Back to Portfolio
        </button>

        <div className="blog-post-hero">
            <div className="blog-post-image" style={{ backgroundImage: `url(${post.image})` }}></div>
            <div className="blog-post-header">
                <div className="blog-post-meta">
                    <span className="blog-post-date">{post.date}</span>
                    <span className="blog-post-divider">•</span>
                    <span className="blog-post-read-time">{post.readTime}</span>
                    <span className="blog-post-divider">•</span>
                    <span className="blog-post-author">{post.author}</span>
                </div>
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-intro">{post.intro}</p>
            </div>
        </div>

        <div className="blog-post-content">
            {post.sections.map((section, index) => (
                <section key={index} className="blog-section-page">
                    <h2 className="section-title">{section.title}</h2>
                    <p className="section-content">{section.content}</p>
                    <ul className="section-points">
                        {section.keyPoints.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>
            ))}

            <section className="blog-section-page conclusion-section">
                <h2 className="section-title">Conclusion</h2>
                <p className="conclusion-text">{post.conclusion}</p>
            </section>
        </div>

        <button onClick={() => navigate('/')} className="back-button bottom">
            ← Back to Portfolio
        </button>
    </div>
);

// Developer Journey Post Layout
const DeveloperJourneyPost = ({ post, navigate }) => (
    <div className="blog-post-detail">
        <button onClick={() => navigate('/')} className="back-button">
            ← Back to Portfolio
        </button>

        <div className="blog-post-hero">
            <div className="blog-post-image" style={{ backgroundImage: `url(${post.image})` }}></div>
            <div className="blog-post-header">
                <div className="blog-post-meta">
                    <span className="blog-post-date">{post.date}</span>
                    <span className="blog-post-divider">•</span>
                    <span className="blog-post-read-time">{post.readTime}</span>
                    <span className="blog-post-divider">•</span>
                    <span className="blog-post-author">{post.author}</span>
                </div>
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-intro">{post.intro}</p>
            </div>
        </div>

        <div className="blog-post-content">
            <div className="lessons-list">
                {post.lessons.map((lesson, index) => (
                    <section key={index} className="blog-section-page lesson-card">
                        <h2 className="lesson-title">📚 {lesson.title}</h2>
                        <p className="lesson-content">{lesson.content}</p>
                        <div className="lesson-takeaway">
                            <strong>Key Takeaway:</strong> {lesson.takeaway}
                        </div>
                    </section>
                ))}
            </div>

            <section className="blog-section-page conclusion-section">
                <h2 className="section-title">Moving Forward</h2>
                <p className="conclusion-text">{post.conclusion}</p>
            </section>
        </div>
    </div>
);

export default BlogPost;
