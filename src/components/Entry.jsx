import mountfuji from "../assets/mountfuji.jpeg"
import mapicon from "../assets/mapicon.png"
export default function Entry () {
    return (
        <div className="entry">
            < img src={mountfuji} className="mountain-image" alt="Mount Fuji" />
            <div className="entry-details">
                <span className="entry-name">
                    <img src={mapicon} alt="Map Icon" />
                    <h2>Japan</h2>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu
" target="_blank" rel="noopener noreferrer" className="map-link">View on Google Maps</a>
                </span>
                <h1>Mount Fuji</h1>
                <h1>12 Jan, 2021 - 24 Jan, 2021</h1>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}