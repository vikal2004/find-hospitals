import React from "react";

const HospitalList = ({ hospitals }) => {
  return (
    <div>
      <h3>Nearby Hospitals</h3>
      <ul>
        {hospitals.map((hospital, index) => (
          <li key={index}>{hospital.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;