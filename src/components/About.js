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
                        Hey! I'm Atip, but you can just call me Sun. I'm all about chasing adventures and checking out cool places. I'm super curious about exploring awesome destinations and seeing all the amazing stuff our world has. </p>
                    <p>
                        I dream of venturing to Japan, I'm itching to soak up the peaceful vibes of its beautiful nature scenes, like those tranquil cherry blossom gardens and reposeful mountains.</p>

                    <p>
                        As a software engineer, my job revolves around crafting intricate backend applications for banking systems. I'm all about diving into the nitty-gritty details and tackling challenges head-on, ensuring that those apps run seamlessly and perform flawlessly.</p>
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