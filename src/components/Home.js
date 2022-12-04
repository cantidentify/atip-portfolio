const Home = () => {
    return(
        <section className="intro-container">
            <div className="introduce-content">
                <div className="introduce-content-left">
                    <div>I'm <span className="my-name">Atip Yongstar</span></div>
                    <div>I learn from people how to work better.</div>
                    <div className="resume-btn">
                        <a href={require("../file/Atip_Yongstar_Resume.pdf")} rel="noopener noreferrer" target='_blank' class="button-78">RESUME</a>
                    </div>

                </div>
                <div className="introduce-content-right">
                    Image
                </div>
            </div>
        </section>
    )
}

export default Home