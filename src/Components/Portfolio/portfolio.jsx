import React, { useState } from 'react';

import { AiOutlineEye } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

const Portfolio = ({userData}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectListVisible, setSelectListVisible] = useState(false);
  const [selectValue, setSelectValue] = useState('Select category');
  
  const {services}= userData.user;
  const [filteredProjects, setFilteredProjects] = useState(services);
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSelectValue(filter);
    setSelectListVisible(false);
    filterFunc(filter);
  };

  const handleSelectItemClick = (filter) => {
    setActiveFilter(filter);
    setSelectValue(filter);
    setSelectListVisible(false);
    filterFunc(filter);
  };

  const filterFunc = (selectedValue) => {
    setFilteredProjects(
      selectedValue === 'All'
        ? services
        : services.filter((service) => service.name === selectedValue)
    );
  };

  const filterProjects = (category) => {
    return activeFilter === 'All' || activeFilter === category;
  };

  const toggleSelectList = () => {
    console.log("clicked")
    setSelectListVisible(!selectListVisible);
  };
  console.log(selectListVisible);
  
  return (
    <article className='Portfolio active' data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterClick('All')}
            >
              All
            </button>
          </li>
          <li className="filter-item">
            <button
              className={`filter-btn ${activeFilter === 'App Development' ? 'active' : ''}`}
              onClick={() => handleFilterClick('App Development')}
            >
              App Development
            </button>
          </li>
          <li className="filter-item">
            <button
              className={`filter-btn ${activeFilter === 'Web & App ' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Web & App ')}
            >
              Web & App
            </button>
          </li>
          <li className="filter-item">
            <button
              className={`filter-btn ${activeFilter === 'UI/UX Solutions' ? 'active' : ''}`}
              onClick={() => handleFilterClick('UI/UX Solutions')}
            >
              UI/UX Solutions
            </button>
          </li>
          {/* <li className="filter-item">
            <button
              className={`filter-btn ${activeFilter === 'Global Marketing' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Global Marketing')}
            >
              Global Marketing
            </button>
          </li> */}
          {/* <li className="filter-item">
            <button
              className={`filter-btn ${activeFilter === 'Brand Consultant' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Brand Consultant')}
            >
              Brand Consultant
            </button>
          </li> */}
          <li className="filter-item">
            <button
              className={`filter-btn ${activeFilter === 'Wordpress Development' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Wordpress Development')}
            >
              Wordpress Development
            </button>
          </li>

        </ul>

        <div className="filter-select-box">
      <button className={`filter-select ${selectListVisible ? 'active' : ''}`} data-select onClick={toggleSelectList}>
        <div className="select-value" data-selecct-value>{selectValue}</div>
        <div className="select-icon">
          <BsChevronDown />
        </div>
      </button>
      <ul className={`select-list ${selectListVisible ? 'active' : ''}`}>
        <li className="select-item">
          <button onClick={() => handleSelectItemClick('All')}>All</button>
        </li>
        <li className="select-item">
          <button onClick={() => handleSelectItemClick('App Development')}>App Development</button>
        </li>
        <li className="select-item">
          <button onClick={() => handleSelectItemClick('Web & App ')}>Web & App </button>
        </li>
        <li className="select-item">
          <button onClick={() => handleSelectItemClick('UI/UX Solutions')}>UI/UX Solutions</button>
        </li>
        {/* <li className="select-item">
          <button onClick={() => handleSelectItemClick('Global Marketing')}>Global Marketing</button>
        </li>
        <li className="select-item">
          <button onClick={() => handleSelectItemClick('Brand Consultant')}>Brand Consultant</button>
        </li> */}
        <li className="select-item">
          <button onClick={() => handleSelectItemClick('Wordpress Development')}>Wordpress Development</button>
        </li>
      </ul>
    </div>
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className={`project-item ${filterProjects(project.name) ? 'active' : ''}`}
              data-category={project.name ? project.name.toLowerCase() : 'undefined'}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <AiOutlineEye style={{ color: "hsl(45, 100%, 72%)" }} />
                  </div>
                  <img src={project.image} alt={project.name} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-category">{project.name}</p>
              </a>
            </li>
          ))}
        </ul>
          </section>
          
    </article>
  )
};

export default Portfolio;
