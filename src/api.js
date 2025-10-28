export async function fetchWeather(city) {
    const key = import.meta.env.VITE_OPENWEATHER_API_KEY;
    if (!key) throw new Error("Missing API key");
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&appid=${key}`;
  
    const res = await fetch(url);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.message || "Error fetching weather");
    }
  
    return res.json();
  }
  