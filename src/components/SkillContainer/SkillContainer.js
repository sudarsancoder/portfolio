import React from 'react'
import { Element } from 'react-scroll';
import img from '../../assets/lapt.jpeg'
import LinearProgress from "@material-ui/core/LinearProgress";
import "./SkillContainer.css";

const SkillContainer = () => {
  return ( 
    <Element className='skillcontainer' name="skills">
      <div className='skillcontainer__image' >
        <img src={img} alt="lapt" />
      </div>
      <div className='skillcontainer__text'>
        <h2> Skill Set</h2>
        <div className='skillcontainer__skillset'>
          <h5>HTML</h5>
          <div className='skillcontainer__slider skillcontainer__slider1'>
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className='skillcontainer__skillset'>
          <h5>CSS</h5>
          <div className='skillcontainer__slider skillcontainer__slider2'>
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className='skillcontainer__skillset'>
          <h5>React</h5>
          <div className='skillcontainer__slider skillcontainer__slider3'>
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className='skillcontainer__skillset'>
          <h5>C Language</h5>
          <div className='skillcontainer__slider skillcontainer__slider4'>
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default SkillContainer;