import React from 'react'
import linkinIco from '../../img/linkedin.png'
import githubIco from '../../img/github.png'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (
    <footer className='footer'>
        <div className='footer-content'>
            <a href='https://www.linkedin.com/in/atip-yongstar-5118b5186/' rel="noreferrer" target='_blank'><img className='footer-ico' src={linkinIco} alt="linkin-icon"></img></a>
            <a href='https://github.com/cantidentify' rel='noreferrer' target='_blank'><img className='footer-ico' src={githubIco} alt="github-icon"></img></a>
        </div>
        <h3 className='copyright'>atip yongstar © 2022</h3>
    </footer>
  )
}

export default Footer