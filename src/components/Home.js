import self_image from '../img/self_image.jpg'

const Home = () => {
    return(
        <section id='home' className="intro-container">
            <div className="introduce-content">
                <div className="introduce-content-left">
                    <div>I'm <span className="my-name">Atip Yongstar</span></div>
                    <div>I learn from people how to work better.</div>
                </div>
                <div className="introduce-content-right">
                <img className='my-home' src={self_image} alt="about_img"></img>
                </div>
            </div>
        </section>
    )
}

export default Home