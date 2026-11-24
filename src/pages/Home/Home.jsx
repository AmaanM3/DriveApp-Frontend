import Hero from "../../components/Hero/Hero";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./Home.css";

function Home() {
    return (
        <main className="home">
            <Hero />

            <section className="benefits">
                <div>
                    <h3>Fleksibel booking</h3>
                    <p>Vælg en tid, der passer dig</p>
                </div>

                <div>
                    <h3>Erfarne kørelærere</h3>
                    <p>Lær i dit eget tempo</p>
                </div>

                <div>
                    <h3>AI-køreassistent</h3>
                    <p>Få hjælp til teori og trafikregler</p>
                </div>
            </section>

            <section className="features">
                <h2>Kom godt i gang</h2>

                <div className="feature-grid">
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                </div>
            </section>
        </main>
    );
}

export default Home;