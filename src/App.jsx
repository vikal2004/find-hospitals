import React, { useState } from "react";
import { loginWithGoogle, logout } from "./services/authService";
import Map from "./components/Map";
import HospitalList from "./components/HospitalList";

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  const handleLogin = async () => {
    const userData = await loginWithGoogle();
    if (userData) {
      setUser(userData);
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.error(err)
      );
    }
  };

  const handleLogout = async () => {
    if (await logout()) setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {!user ? (
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Login with Google
        </button>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {user.displayName}</h2>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
          <Map location={location} setHospitals={setHospitals} />
          <HospitalList hospitals={hospitals} />
        </div>
      )}
    </div>
  );
}

export default App;

