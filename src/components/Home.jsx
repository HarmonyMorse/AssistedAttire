const Home = () => {
    return (
        <div>
            <header className="header">
                <h1 className="header-title">Welcome to Assisted Attire</h1>
            </header>
            <main className="main">
                <section className="about-section" id="about-app">
                    <h2 className="about-section-title">About App</h2>
                    <p className="about-section-content">
                        Assisted Attire is the ultimate virtual wardrobe and outfit planning application, specifically engineered to address the unique challenges faced by neurodivergent individuals who experience the &quot;out of sight, out of mind&quot; phenomenon with their clothing. This full-stack web application is designed to make clothing management seamless, enabling users to easily organize their fashion collections, monitor the condition of their garments, and unlock a world of outfit combinations with ease.
                    </p>
                    <p className="about-section-content">
                        The inspiration behind this project stems from my own experiences with clothing forgetfulness, a common issue among those of us who are neurodivergent. Recognizing the potential to aid not just myself but others facing similar difficulties, I decided to create Assisted Attire. The application is the result of a deep-seated passion for utilizing technology to create useful products, all while prioritizing functionality and style. Assisted Attire is meticulously designed to alleviate the stress of decision-making in wardrobe management, ensuring that every piece of clothing is remembered and utilized to its fullest potential.
                    </p>
                </section>
                <section className="about-section" id="about-me">
                    <h2 className="about-section-title">About Me</h2>
                    <p className="about-section-content">I&apos;m a developer passionate about creating useful and innovative web applications.</p>
                </section>
                <section className="about-section" id="social-links">
                    <h2 className="about-section-title">Social Links</h2>
                    <ul className="social-links-list">
                        <li className="social-link-item"><a className="social-link" href="http://linkedin.com/in/HarmonyMorse">LinkedIn</a></li>
                        <li className="social-link-item"><a className="social-link" href="https://github.com/HarmonyMorse">GitHub</a></li>
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default Home
