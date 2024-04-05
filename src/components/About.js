import about_img from '../img/aboute_image.jpg'

const About = () => {
    return(
        <section className="container">
        <div className='content-header'>
            <span className="content-header-p">About Me</span>
        </div>
        <div className="about-content">
            <div className="about-content-left">
                <div className="about-content-detail">
                    <p>
                        Hey there! I'm Atip but you can call me Sun, a passionate adventure seeker with an insatiable curiosity for exploring captivating destinations and experiencing the beauty our world has to offer. </p>
                    <p>
                        One day, I dream of venturing to Japan, where I yearn to immerse myself in the tranquility of its natural landscapes, from the serene cherry blossom gardens to the majestic mountains.</p>

                    <p>
                        As a software engineer, my career revolves around crafting intricate backend applications for core banking systems. With a keen eye for detail and a knack for problem-solving, I work diligently to ensure seamless functionality and optimal performance.</p>
                </div>
            </div>
            <div>
                <img className='my-home' src={about_img} alt="about_img"></img>
            </div>
        </div>
    </section>
    )
}

export default About