import React from 'react'
import linkinIco from '../../img/linkedin.png'
import githubIco from '../../img/github.png'


const Footer = () => {

  return (
    <footer className='footer'>
        <div className='footer-content'>
            <div><img className='footer-ico' src={linkinIco} alt="linkin-icon"></img></div>
            <div><img className='footer-ico' src={githubIco} alt="github-icon"></img></div>
            <div>3</div>
            <div>4</div>
        </div>
        <h3 className='copyright'>atip yongstar © 2022</h3>
    </footer>
  )
}

export default Footer