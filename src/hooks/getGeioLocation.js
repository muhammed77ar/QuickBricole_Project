import { useEffect, useState } from "react";

export const useGetGeoLocation = () => {
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
     
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        setLat(latitude)
        setLon(longitude)
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const response = await fetch(url);
        const data = await response.json();
        setAddress(data);
      
    };

    fetchData();

  }, []);

  return { address : address.address ,lon,lat};
};
