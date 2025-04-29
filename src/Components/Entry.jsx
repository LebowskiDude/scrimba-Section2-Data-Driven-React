/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 *
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 *
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry(props) {
    return (
        <div className="row">
            <div className="col-3">
                <img
                    src={props.attractionData.img.src}
                    alt={props.attractionData.img.alt}
                    style={{
                        width: "100%",
                    }}
                />
            </div>
            <div className="col-9">
                <div className="d-flex align-items-center">
                    <img
                        src="/src/assets/marker.png"
                        alt="map marker"
                        width="15px"
                    />
                    <span style={{ marginLeft: "10px" }}>
                        {props.attractionData.country}
                    </span>
                    <a
                        href={props.attractionData.googleMapsLink}
                        style={{ marginLeft: "25px" }}
                    >
                        View on Google Maps
                    </a>
                </div>
                <h1>{props.attractionData.title}</h1>
                <h6>{props.attractionData.dates}</h6>
                <p>{props.attractionData.text}</p>
                {props.attractionRequiresSeparator && <hr />}
            </div>
        </div>
    );
}
