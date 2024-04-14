import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  const toHome = () => {
    const section = document.querySelector( '#home' );
    section.scrollIntoView( { behavior: 'smooth', block: 'center' } );
  };
  const toAbout = () => {
    const section = document.querySelector( '#about' );
    section.scrollIntoView( { behavior: 'smooth', block: 'center' } );
  };
  const toCareer = () => {
    const section = document.querySelector( '#career' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  const toSkill = () => {
    const section = document.querySelector( '#skill' );
    section.scrollIntoView( { behavior: 'smooth', block: 'center' } );
  };



  return (
    <nav className="navbar">
    <ul>
      <li><Link onClick={toHome}>Home</Link></li>
      <li><Link onClick={toAbout}>About</Link></li>
      <li><Link onClick={toCareer}>Career</Link></li>
      <li><Link onClick={toSkill}>Skill</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar