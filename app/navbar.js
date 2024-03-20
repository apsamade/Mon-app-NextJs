import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/dashboard">Mon Dashboard</a></li>
                <li><a href="/connexion">Connexion</a></li>
                <li><a href="/inscription">Inscription</a></li>
            </ul>
        </nav>
    );
}
