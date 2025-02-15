import React, { useEffect } from "react";
import { loadMap } from "../services/mapService";

const Map = ({ location, setHospitals }) => {
  useEffect(() => {
    if (location) {
      loadMap(location, setHospitals);
    }
  }, [location]);

  return <div id="map" style={{ height: "500px", width: "100%", marginTop: "20px" }}></div>;
};

export default Map;
