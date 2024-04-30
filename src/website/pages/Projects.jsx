import React, { useState } from "react";
import Button from "../components/Button.jsx";
import Banner from '../components/Banner.jsx';
import useTitle from '../../hooks/useTitle.jsx';
import WorkCardV2 from "../components/WorkCardV2.jsx";

const projectsData = [
  {
    title: "Website Mockup Design",
    description: "We provide stunning website mockup designs tailored to your needs.",
    category: "Design",
    imageUrl: "https://cdn.dribbble.com/users/2378593/screenshots/19045201/media/5e02c16d692630603babae6869bb1036.jpg"
  },
  {
    title: "Mobile App Design",
    description: "Our expert designers craft beautiful mobile app designs for your business.",
    category: "Design",
    imageUrl: "https://cdn.dribbble.com/userupload/3246132/file/original-d17aaff41fec3353fe80fc8f7372253e.png"
  },
  {
    title: "Brand Identity and Motion Design",
    description: "We specialize in creating unique brand identities and captivating motion designs.",
    category: "Design",
    imageUrl: "https://cdn.dribbble.com/userupload/13811655/file/original-60b55a5fb25841372b5ca18c5b50be7c.jpg"
  },
  {
    title: "Mobile Application Development",
    description: "Our skilled developers build high-quality mobile applications for iOS and Android platforms.",
    category: "Development",
    imageUrl: "https://cdn.dribbble.com/users/7306574/screenshots/17359664/media/1e1f73d6a4c5e498e21cfab91d7d1d5c.png"
  }
];

const uniqueCategories = [...new Set(projectsData.map(project => project.category))];

const Projects = () => {
  useTitle("All Projects");
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory ? projectsData.filter(project => project.category === selectedCategory) : projectsData;

  return (
    <>
      <Banner>My <span>Projects</span></Banner>
      <section className="work bg">
        <div className="container">
          <div className="filter_buttons">
            <Button 
              className={selectedCategory === null ? "btn active" : "btn"}
              onClick={() => setSelectedCategory(null)}
            >
              <span>All</span>
            </Button>
            {uniqueCategories.map((category, index) => (
              <Button 
                className={selectedCategory === category ? "btn active" : "btn"}
                key={index} 
                onClick={() => handleCategoryClick(category)}
              >
                <span>{category}</span>
              </Button>
            ))}
          </div>
          <div className="projects_grid">
            {filteredProjects.map((project, index) => (
              <WorkCardV2
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
