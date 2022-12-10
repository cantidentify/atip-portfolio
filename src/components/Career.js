const Career = () => {
    return(
        <section className="container">
        <div className="content-header">
            <span className="content-header-p">My Career</span>
        </div>
        <div className="career-content">
            <div className="career-detail">
                <p className="career-title">Software Engineer</p>
                <p className="career-ferm-name">T.N. Incorporation | 2022 June - Present</p>
                <ul className="career-list">
                    <li>Working in a role of Golang Backend Engineer to develop banking system in an agile environment</li>
                    <li>Developed a microservices-based architecture with Docker, Kubernetes, YottaDB</li>
                </ul>
            </div>
            <div className="career-detail">
                <p className="career-title">Programmer</p>
                <p className="career-ferm-name">Innova Software Co., Ltd. | 2021 June - 2022 March</p>
                <ul className="career-list">
                    <li>Programmer(C#) as a Japanese team to build and customize software for Japan company</li>
                </ul>
            </div>
            <div className="career-detail">
                <p className="career-title">Back-end developper <small>Internship</small></p>
                <p className="career-ferm-name">Optimized Solution | June - September 2020</p>
                <ul className="career-list">
                    <li>IT equipment stock system on web base developing team</li>
                    <li>Technical support</li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default Career