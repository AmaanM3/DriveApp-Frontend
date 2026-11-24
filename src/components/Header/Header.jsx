import "./Header.css";

function Header() {
    return (
        <header>
            <div>
                <h1>DriveApp</h1>
                <p>Køreskole</p>
            </div>

            <div>
                <span>Lær at køre sikkert</span>
                <span>Book online</span>
                <span>Hjælp til kørsel</span>
            </div>

            <nav>
                <button>Forside</button>
                <button>Køretimer</button>
                <button>Log ind</button>
                <button>Opret bruger</button>
            </nav>
        </header>
    );
}

export default Header;