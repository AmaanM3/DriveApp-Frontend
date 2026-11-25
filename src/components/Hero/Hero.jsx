import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <h2>
                Dit kørekort.
                <br />
                Din vej frem.
            </h2>

            <p>
                Book køretimer, få overblik over dit forløb
                og bliv tryg bag rattet.
            </p>

            <div>
                <button>Book køretime</button>

                <button onClick={() => (window.location.hash = "register")}>
                    Opret bruger
                </button>
            </div>
        </section>
    );
}

export default Hero;