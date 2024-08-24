import about_img from '../img/aboute_image.jpg'

const About = () => {
    return(
        <section id="about" className="container">
        <div className='content-header'>
            <span className="content-header-p">About Me</span>
        </div>
        <div className="about-content">
            <div className="about-content-left">
                <div className="about-content-detail">
                    <p>
                        Hey! I'm Atip, but you can just call me Sun. I'm the adventurer who is chasing a dream right now. I really, really love to go outside my room to explore the world, but actually, it's just my plan for the near future. Right now, I still have a lot of things to complete first. </p>
                    <p>
                        I dream of traveling to Japan, I admire the pictures of Japan's nature, like those cherry blossom gardens, very tall mountains and the peacefulness. I swear, this is not a travel advertisement or something,but this is my ambition, my motivation that fuels me to live.</p>
                    <p>
                        As a software engineer, my job was about built a backend applications for banking systems, ensuring that those apps run perfectly fine on production and coordinate with the business scenario.</p>
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
