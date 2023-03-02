import React,{ useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker} from "@react-google-maps/api";

const MapComponent = () => {
    const initialMarkers = [
        {
            id: "suipacha",
            position: {
                lat: -34.6020393, 
                lng: -58.3818789
            },
        },
        {
            id: "sanmartin",
            nombre: "san martin",
            position: {
                lat: -34.6016838,
                lng: -58.3741165
            },
        },
        {
            id: "junin",
            position: {
                lat: -34.588633,
                lng: -58.3942887
            },
        },
    ];
    
    const [activeInfoWindow, setActiveInfoWindow] = useState("");
    const [markers] = useState(initialMarkers);

    const containerStyle = {
        width: "75%",
        height: "250px",
        borderRadius: "15px",
    }

    const center = {
        lat: -34.5943581,
        lng: -58.3847088,
    }

    const mapClicked = (event) => { 
        return(event.latLng.lat(), event.latLng.lng()) 
    }

    const markerClicked = (marker, index) => {  
        setActiveInfoWindow(index)
        console.log(marker, index) 
    }

    const markerDragEnd = (event, index) => { 
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
    }
    return (
        <LoadScript googleMapsApiKey='AIzaSyC1DbJsX0Y-HVbUO7S5GSTVfk97vbr3zEA'>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={14}
                onClick={mapClicked}
            >
                {markers.map((marker, index) => (
                    <Marker 
                        key={index} 
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={event => markerDragEnd(event, index)}
                        onClick={event => markerClicked(marker, index)} 
                    >
                        {
                            (activeInfoWindow === index)
                            &&
                            <InfoWindow position={marker.position}>
                                <b>{marker.position.lat}, {marker.position.lng}</b>
                            </InfoWindow>
                        }  
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
