import React from 'react'

const Blog = ({userData}) => {
   
  const {blog} = userData.user;
  console.log("projects", blog)
  
  return (
    <article className='Blog active' data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">
              
            {blog.map((project,index)=>
              <li class="blog-post-item" key={index}>
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={project.image} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">{project.title}</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">{project.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{project.excerpt}</h3>

                  <p className="blog-text">
                    {project.description}
                  </p>

                </div>

              </a>
            </li>
            )}

          </ul>

            </section>
           
      </article>
  )
}

export default Blog