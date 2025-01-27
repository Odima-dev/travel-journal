import globeImage from "../assets/globe.png";
export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={ globeImage } alt="globe image" />
            <h1>my travel journal</h1>
        </header>
    )
}
