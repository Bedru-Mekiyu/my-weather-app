# 🌤️ React Weather App

A responsive **Weather Application** built with **React** and **Vite** that enables users to search for current weather conditions by city name in real-time using the **OpenWeatherMap API**.

---

## 🚀 Features

- **Search Weather**: Look up real-time weather information for any city worldwide.
- **Detailed Weather Metrics**: View temperature, "feels like" temperature, humidity, atmospheric pressure, wind speed, and condition icons.
- **Responsive Design**: Clean UI styled using **Tailwind CSS**, optimized for desktop and mobile devices.
- **State Handling**: Informative loading, error, and empty search states.
- **Secure Configuration**: Uses Vite environment variables for API key management.

---

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite** — Frontend build tool and development server
- **Tailwind CSS** — Utility-first CSS framework
- **OpenWeatherMap API** — Weather data source

---

## 📁 Project Structure

```
.
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── WeatherCard.jsx    # Displays weather details and condition icon
│   │   └── WeatherSearch.jsx  # Input form for city search
│   ├── api.js           # API request handler for OpenWeatherMap
│   ├── App.jsx          # Root component managing application state
│   ├── main.jsx         # Application entry point
│   ├── App.css          # Application styles
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

---

## ⚙️ Setup & Installation

### 1️⃣ Prerequisites

Ensure you have **Node.js** (v18+ recommended) and **npm** installed.

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/Bedru-Mekiyu/react-weather-app.git
cd react-weather-app
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file in the project root and add your OpenWeatherMap API key:

```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

> **Note:** Get a free API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

### 5️⃣ Run the Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

- `npm run dev` — Starts the Vite development server.
- `npm run build` — Builds the application for production.
- `npm run lint` — Runs ESLint code quality checks.
- `npm run preview` — Previews the production build locally.

---

## 🔐 Environment Variables

| Variable | Description | Required |
| --- | --- | --- |
| `VITE_OPENWEATHER_API_KEY` | OpenWeatherMap API Key | Yes |

---

## 📄 License

This project is licensed under the MIT License.
