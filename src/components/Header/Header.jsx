import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <h1>DriveApp</h1>
                <p>Køreskole</p>
            </div>

            <div className="header-content">
                <div className="header-top">
                    <span>Lær at køre sikkert</span>
                    <span>Book online</span>
                    <span>Hjælp til kørsel</span>
                </div>

                <nav className="header-nav">
                    <div className="nav-left">
                        <button>Forside</button>
                        <button>Køretimer</button>
                    </div>

                    <div className="nav-right">
                        <button>Log ind</button>
                        <button className="register-button">
                            Opret bruger
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;