import React from 'react'
import './Skills.css'
import skills_data from '../../assets/skills_data'

const Skills = () => {
  return (
    <div id = 'skill' className='Skill'>
        <div className="skills-title">
            <h1>Skills</h1>
        </div>
        <div className="skills-container">
            {skills_data.map((skill, index) =>{
                return (
                <div className="skills-format">
                    <img key = {skill.s_no} src = {skill.s_img} />
                </div>
                );
            } )}
        </div>
    </div>
  )
}

export default Skills