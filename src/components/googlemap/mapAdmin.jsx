import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function MapAdmin({ formData }) {
  let data = formData;
  console.log(data);

  return (
    <APIProvider apiKey={"AIzaSyAkq3WzI1O3TSVCxUOwj-p8UPmaPh4Y09s"}>
      <Map
        style={{ width: "744px", height: "400px" }}
        defaultCenter={{
          lat: +data.latitude,
          lng: +data.longitude,
        }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker position={{ lat: +data.latitude, lng: +data.longitude }} />
      </Map>
    </APIProvider>
  );
}

export default MapAdmin;
