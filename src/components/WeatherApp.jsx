import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import background from "../assets/images/WeatherApp.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { FaWind } from "react-icons/fa6";
import { BsWater } from "react-icons/bs";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState("");

  const API_KEY = "688380cae18b6284a99ef74bba7d9391";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      let output = await response.json();
      if (response.ok) {
        setWeather(output);
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
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-8 rounded-xl space-y-4  w-full h-[480px] bg-gray-700 bg-opacity-20 shadow-2xl shadow-black"
        >
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={city}
              onChange={handleChange}
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 pl-10 block appearance-none leading-normal shadow-xl shadow-gray-800 "
            />
            <button
              className="btn btn-circle shadow-xl shadow-gray-800 btn-outline  text-black hover:text-black bg-white hover:bg-white border border-gray-300"
              onClick={() => fetchData()}
            >
              <FiSearch />
            </button>
          </div>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-red-600"
            >
              {error}
            </motion.p>
          )}
          {weather && weather.weather && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center flex-col">
                <img
                  className="w-24"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt=""
                />
                <h3 className="text-2xl font-bold text-white">
                  {weather.weather[0].description}
                </h3>
              </div>
              <h2 className="text-center font-extrabold text-4xl text-white">
                {weather.main.temp}
                <span>&deg;C</span>
              </h2>
              <h2 className="flex justify-center items-center text-xl mb-6 mt-4">
                <IoLocationSharp className="mt-1 text-red-500" />
                <p className="text-white">
                  {weather.name},<span>{weather.sys.country}</span>
                </p>
              </h2>
              <div className="flex justify-center items-center gap-4 text-gray-800">
                <div className="border p-4  shadow-2xl shadow-black bg-white rounded-md border-none flex flex-col justify-center items-center">
                  <h2>
                    <FaWind className="text-xl" />
                  </h2>
                  <h3 className="text-lg">
                    {weather.wind.speed} <span>km/h</span>
                  </h3>
                  <h2 className="font-extrabold">Winsd Speed</h2>
                </div>
                <div className="border p-4  shadow-2xl shadow-black bg-white rounded-md border-none flex flex-col justify-center items-center">
                  <h2>
                    <BsWater className="text-xl" />
                  </h2>
                  <h3 className="text-lg">
                    {weather.main.humidity} <span>%</span>
                  </h3>
                  <h2 className="font-extrabold">Winsd Speed</h2>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WeatherApp;
