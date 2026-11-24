import { useState } from "react";
import "./Register.css";

function Register() {
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            setMessage("Adgangskoderne er ikke ens. Prøv igen.");
            return;
        }

        setMessage("Demoversion – dine oplysninger er ikke gemt.");
    }

    return (
        <main className="register-page">
            <section className="register-card">
                <div className="register-heading">
                    <div className="register-logo">
                        <strong>DriveApp</strong>
                        <span>Køreskole</span>
                    </div>

                    <div>
                        <h2>Opret bruger</h2>
                        <p>Opret din elevkonto og kom godt i gang med kørekortet.</p>
                    </div>
                </div>

                <form
                    className="register-form"
                    onSubmit={handleSubmit}
                    onChange={() => setMessage("")}
                >
                    <label htmlFor="fullName">Fulde navn</label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Indtast dit fulde navn"
                        autoComplete="name"
                        required
                    />

                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Indtast din e-mail"
                        autoComplete="email"
                        required
                    />

                    <label htmlFor="phone">Telefonnummer</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Indtast dit telefonnummer"
                        autoComplete="tel"
                        required
                    />

                    <label htmlFor="password">Adgangskode</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Vælg en adgangskode"
                        autoComplete="new-password"
                        required
                    />

                    <label htmlFor="confirmPassword">Bekræft adgangskode</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Gentag din adgangskode"
                        autoComplete="new-password"
                        required
                    />

                    <button className="register-submit" type="submit">
                        Opret en konto
                    </button>

                    {message && (
                        <p className="register-message" role="status">
                            {message}
                        </p>
                    )}
                </form>

                <div className="register-footer">
                    <span>Har du allerede en konto?</span>
                    <a href="#login">Log ind her</a>
                </div>
            </section>
        </main>
    );
}

export default Register;