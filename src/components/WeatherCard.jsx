import React from "react";

export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
      <div>
        <h2 className="text-lg font-medium">
          {data.name}, {data.sys?.country}
        </h2>
        <p className="text-sm text-slate-500">
          {new Date(data.dt * 1000).toLocaleString()}
        </p>

        <div className="mt-3">
          <div className="text-5xl font-bold">
            {Math.round(data.main.temp)}°C
          </div>
          <div className="text-sm text-slate-600">
            Feels like {Math.round(data.main.feels_like)}°C
          </div>
        </div>

        <div className="mt-3 text-sm space-y-1 text-slate-700">
          <div>Humidity: {data.main.humidity}%</div>
          <div>Pressure: {data.main.pressure} hPa</div>
          <div>Wind: {data.wind.speed} m/s</div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {data.weather?.[0] && (
          <>
            <img
              alt={data.weather[0].description}
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              width={100}
              height={100}
            />
            <div className="mt-2 text-sm text-slate-700">
              {data.weather[0].main} — {data.weather[0].description}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
