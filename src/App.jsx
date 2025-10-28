import React, { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./api";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(city) {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const weather = await fetchWeather(city);
      setData(weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Weather App</h1>

        <WeatherSearch onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="text-red-600 bg-red-50 p-3 rounded-md mt-4">
            Error: {error}
          </div>
        )}

        {!data && !loading && !error && (
          <div className="text-slate-500 mt-4">
            Search for a city to see current weather.
          </div>
        )}

        {data && <WeatherCard data={data} />}
      </div>
    </div>
  );
}
