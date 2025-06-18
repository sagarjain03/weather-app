# 🌦️ Weatherly

**Weatherly** is a clean and modern weather forecast web app built using **React**, **TypeScript**, and **Vite**. It allows users to search for any city and get real-time weather updates with beautiful visuals and user-friendly interactions.

---

## 🚀 Features

- 🌍 Search weather by city name
- 📍 Get weather for your current location
- 🌡️ Displays temperature, humidity, pressure, wind, and more
- 🌤️ Dynamic weather icons based on current conditions
- ⭐ Mark cities as favorites
- 🕑 Recent search history
- ⚡ Built with React + Vite + TypeScript
- 🎯 Fast performance and lightweight UI
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **API:** OpenWeatherMap API
- **State/Async:** React Query

---

## 📦 Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/sagarjain03/weatherly.git
   ```

2. **Move into the project folder**
   ```sh
   cd "internship Projects/weather_app"
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Create environment variable file**

   Create a `.env` file in the root of `weather_app` and add your OpenWeatherMap API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key_here
   ```

5. **Start the development server**
   ```sh
   npm run dev
   ```

---

## 📁 Project Structure

```
src/
  api/
  components/
  context/
  hooks/
  lib/
  pages/
  App.tsx
  main.tsx
  ...
```

---

## 📝 Notes

- Make sure you have a valid [OpenWeatherMap API key](https://openweathermap.org/api).
- The app uses localStorage for favorites and search history.
- For best experience, allow location access in your browser.

---

## 💡 Credits

Made with ❤️ by Sagar Jain
