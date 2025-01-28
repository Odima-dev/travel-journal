export default function Entry(props) {
    return (
        <div className="entry">
            < img 
                src={props.image} 
                className="mountain-image" 
                alt= {props.alt}
            />
            <div className="entry-details">
                <span className="entry-name">
                    <img 
                        src={props.mapicon} 
                        alt="Map Icon" 
                    />
                    <h2>{props.country}</h2>
                    <a 
                        href= {props.maplink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="map-link">View on Google Maps
                    </a>
                </span>
                <h1>{props.title}</h1>
                <h1>{props.dates}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
}