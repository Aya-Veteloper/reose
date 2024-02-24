import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import React from 'react';
import Project from './components/feature2';

function App() {
 
  const Portfolio = () => {
    const projects = [
      {
        title: 'Project 1',
        description: 'This is the first project description.',
        technologies: ['React', 'JavaScript', 'CSS'],
        link: 'https://example.com/project1',
      }]
  }
  return (
    <>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Footer />
      <div>
        <h2>Portfolio</h2>
        <div className="portfolio-list">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
