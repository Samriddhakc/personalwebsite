import React, { useState } from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
      <>
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            
            <p>
              <span role="img" aria-label="lightning">
                -
              </span>{' '}
              I'm a software engineer passionate about backend development and 
              large and scalable systems. 
            </p>
            <p>
              <span role="img" aria-label="lightning">
                -
              </span>{' '}
             I primarily work with Java, Spring Boot, Spring, Apache Kafka, Python, React, and Azure. 
            </p>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
    </>
  )
}

export default About
