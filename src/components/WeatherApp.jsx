import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import background from "../assets/images/weatherApp.jpg";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState("");

  const API_KEY = "688380cae18b6284a99ef74bba7d9391";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      let output = await response.json();
      if (response.ok) {
        setWeather(output);
        console.log(output);
        setError("");
      } else {
        setError("Please Enter a valid City");
      }
    } catch (error) {}
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="flex justify-center items-center mx-auto">
        <div className="p-8 py border rounded-xl   ">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={city}
              onChange={handleChange}
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 pl-10 block appearance-none leading-normal shadow-xl shadow-gray-800"
            />
            <button
              className="btn btn-circle shadow-xl shadow-gray-800 btn-outline ml-2 text-black hover:text-black bg-white hover:bg-white border border-gray-300"
              onClick={() => fetchData()}
            >
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
