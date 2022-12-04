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
                    <p>I was born in the south of Thailand, Trang beautiful sea and peaceful nature.</p>
                    <p>I love to play a PC games since I was young and decided to study IT because I not want just to be nornal user.</p>
                    <p>My passion is to go to Japan, America and others country in the world to meet new people; I belive there will be an interesting story waiting for me.</p>
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