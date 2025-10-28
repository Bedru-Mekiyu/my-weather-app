import React, { useState } from "react";

export default function WeatherSearch({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded-lg bg-sky-600 text-white disabled:opacity-60"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}
