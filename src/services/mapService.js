import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  libraries: ["places"],
});

export const loadMap = async (location, setHospitals) => {
  await loader.load();

  if (!window.google || !window.google.maps) {
    console.error("Google Maps failed to load");
    return;
  }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 14,
  });

  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    { location, radius: 5000, type: "hospital" },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setHospitals(results);
        results.forEach((place) => {
          new google.maps.Marker({
            position: place.geometry.location,
            map,
            title: place.name,
          });
        });
      } else {
        console.error("Google Places API error:", status);
      }
    }
  );
};
