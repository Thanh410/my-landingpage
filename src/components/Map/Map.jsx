import GoogleMapReact from "google-map-react";

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.9694657,
      lng: 106.7967808,
    },
    zoom: 11,
  };

  return (
    <div className="w-full h-[400px] md:h-100vh">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB6V5e3cre3-Tcg2VDg7BTQst4H1efGE6s" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={10.9694657} lng={106.7967808} />
      </GoogleMapReact>
    </div>
  );
}
