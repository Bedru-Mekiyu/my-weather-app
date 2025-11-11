# 🌤️ React Weather App

A simple, responsive **Weather Application** built with **React + Vite** that lets users search for current weather conditions by city name.  
It fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🚀 Features

✅ Search weather by city name  
✅ Display temperature, humidity, pressure, wind, and weather conditions  
✅ Responsive and clean UI built with **Tailwind CSS**  
✅ Loading and error handling states  
✅ Component-based architecture (React best practices)  
✅ Environment variables for API key security  

---

## 🧩 Project Structure

src/
│
├── App.jsx # Main component – manages state and API calls
├── api.js # API helper function (fetches weather data)
├── WeatherSearch.jsx # Input + search button component
├── WeatherCard.jsx # Displays fetched weather data
├── index.css # Tailwind base styles
└── main.jsx # React app entry point


---

## 🛠️ Tech Stack

- **React 18+** — UI library
- **Vite** — lightning-fast dev environment
- **Tailwind CSS** — utility-first CSS framework
- **OpenWeatherMap API** — real-time weather data

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app
2️⃣ Install dependencies
npm install

3️⃣ Set up your API key

Sign up at OpenWeatherMap
 to get a free API key.

Create a .env file in the root of the project:

VITE_OPENWEATHER_API_KEY=your_api_key_here

4️⃣ Start the development server
npm run dev


Then open the link shown in your terminal, typically
👉 http://localhost:5173

🌈 How It Works

The user enters a city name in WeatherSearch.

App.jsx calls the async helper fetchWeather(city) from api.js.

The app fetches data from OpenWeatherMap’s /data/2.5/weather endpoint.

If successful, the response is passed to WeatherCard for display.

Loading and error states are handled gracefully.

📸 Preview
Desktop View	Mobile View

	

Replace placeholders with your actual screenshots.

🔐 Environment Variables
Variable	Description
VITE_OPENWEATHER_API_KEY	Your OpenWeatherMap API key (required)

⚠️ Do not commit your .env file to GitHub.
Add it to .gitignore to keep your API key private.

🧠 Concepts Learned

This project demonstrates core React concepts:

Component composition

State management with useState

Props and data flow (parent → child, child → parent)

Async/await with API calls

Conditional rendering (loading, error, data states)

Environment variable handling in Vite

🚀 Future Improvements

 Add 5-day weather forecast view

 Add search history using localStorage

 Add temperature unit toggle (°C / °F)

 Add background theme based on weather type

 Use an Express proxy to hide the API key

🧑‍💻 Author

Your Name
🔗 GitHub
 • 🌐 Portfolio

📄 License

This project is licensed under the MIT License
.

⭐ If you like this project, give it a star on GitHub!
git add .
git commit -m "Add README and documentation"
git push origin main
