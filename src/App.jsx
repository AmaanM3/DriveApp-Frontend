import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
    const [page, setPage] = useState(window.location.hash);

    useEffect(() => {
        function handlePageChange() {
            setPage(window.location.hash);
        }

        window.addEventListener("hashchange", handlePageChange);

        return () => {
            window.removeEventListener("hashchange", handlePageChange);
        };
    }, []);

    if (page === "#register" || page === "#login") {
        return (
            <>
                <header className="header">
                    <a className="header-logo" href="#home">
                        <h1>DriveApp</h1>
                        <p>Køreskole</p>
                    </a>

                    <div className="header-content">
                        <div className="header-top">
                            <span>Lær at køre sikkert</span>
                            <span>Book online</span>
                            <span>Hjælp til kørsel</span>
                        </div>

                        <nav className="header-nav">
                            <div className="nav-left">
                                <button onClick={() => (window.location.hash = "home")}>
                                    Forside
                                </button>
                            </div>
                        </nav>
                    </div>
                </header>

                {page === "#login" ? <Login /> : <Register />}
            </>
        );
    }

    return (
        <>
            <Header />
            <Home />
        </>
    );
}

export default App;