import { useState } from "react";
import "./Login.css";

function Login() {
    const [role, setRole] = useState("student");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setMessage("Demoversion – login er ikke tilsluttet endnu.");
    }

    return (
        <main className="login-page">
            <section className="login-card">
                <div className="login-heading">
                    <div className="login-logo">
                        <strong>DriveApp</strong>
                        <span>Køreskole</span>
                    </div>

                    <h2>Velkommen tilbage</h2>
                    <p>Log ind med din e-mail</p>
                </div>

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                    onChange={() => setMessage("")}
                >
                    <fieldset className="login-role">
                        <legend>Jeg er</legend>

                        <div className="login-role-options">
                            <label className={role === "student" ? "active" : ""}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={role === "student"}
                                    onChange={() => setRole("student")}
                                />
                                Elev
                            </label>

                            <label className={role === "instructor" ? "active" : ""}>
                                <input
                                    type="radio"
                                    name="role"
                                    value="instructor"
                                    checked={role === "instructor"}
                                    onChange={() => setRole("instructor")}
                                />
                                Kørelærer
                            </label>
                        </div>
                    </fieldset>

                    <label htmlFor="login-email">E-mail</label>
                    <input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="Indtast din e-mail"
                        autoComplete="username"
                        required
                    />

                    <label htmlFor="login-password">Adgangskode</label>
                    <input
                        id="login-password"
                        name="password"
                        type="password"
                        placeholder="Indtast din adgangskode"
                        autoComplete="current-password"
                        required
                    />

                    <button className="login-submit" type="submit">
                        Log ind
                    </button>

                    {message && (
                        <p className="login-message" role="status">
                            {message}
                        </p>
                    )}
                </form>

                <div className="login-footer">
                    <span>Har du ikke en konto?</span>
                    <a href="#register">Opret en bruger</a>
                </div>
            </section>
        </main>
    );
}

export default Login;