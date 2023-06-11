import React from 'react'
import { Element } from 'react-scroll';
import Project from '../Project/Project.js';
import "./ProjectContainer.css";


const ProjectContainer = () => {

  const projects = [
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKT3DB7_VC1LaU5biXmVX5NddYnP4mXkaAg&usqp=CAU",
      title: "Photos",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      link: "www.google.com",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKT3DB7_VC1LaU5biXmVX5NddYnP4mXkaAg&usqp=CAU",
      title: "Photos",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      link: "www.google.com",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKT3DB7_VC1LaU5biXmVX5NddYnP4mXkaAg&usqp=CAU",
      title: "Photos",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      link: "www.google.com",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkKT3DB7_VC1LaU5biXmVX5NddYnP4mXkaAg&usqp=CAU",
      title: "Photos",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      link: "www.google.com",
    },
    
  ]

  return (
    <Element className='projectcontainer' id="projects">
      
      <h1>Project</h1>
      <p>Here the project displayed below is done by me during learning phase </p>
      
      <div className="projectcontainer__projects">
        {
          projects.map((project, index) => {
            return(
            <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link} />

          )})
        }
      </div>
    </Element>
  )
}

export default ProjectContainer