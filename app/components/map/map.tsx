import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

let center = { lat: 20.1650259, lng: 85.6979549 };

let locations = [
    { lat: 20.1541167, lng: 85.7086515 },
    { lat: 20.1650259, lng: 85.6979549 },
    { lat: 20.1574374, lng: 85.7087821 },
    { lat: 20.1483345, lng: 85.6712472 },
    { lat: 20.1519542, lng: 85.7266459 },
    { lat: 20.1718279, lng: 85.6861359 },
    { lat: 20.209275, lng: 85.6949933 },
    { lat: 20.1581154, lng: 85.7624501 },
    { lat: 20.156777, lng: 85.7212081 }
]

const MapWithMarker: React.FC = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCFd0KmwtnqZD6HByJB3Y-9zUG3quv_svQ",
    });


    const [mapCenter, setMapCenter] = useState(center);

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    const componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            setMapCenter(center);
        });
    }

    return (
        <>
            <div className="relative">
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "350px" }}
                    center={mapCenter}
                    zoom={12}
                >
                    {
                        locations.map((location, index) =>
                            <MarkerF
                                position={location}
                                key={index}
                            />
                        )
                    }
                </GoogleMap>
            </div>
        </>
    );
};

export default MapWithMarker;