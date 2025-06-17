import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./components/Layout"
import { ThemeProvider } from "./context/theme-provider"
import WeatherPage from "./pages/weatherPage"
import CityPage from "./pages/cityPage"

const App = () => {
  return (
    <div>
  <BrowserRouter>

  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <Layout>
    <Routes>
      <Route path="/" element={< WeatherPage/>} />
      <Route path="/city/:cityName" element={<CityPage />} />
    </Routes>
   </Layout>


  </ThemeProvider>
  </BrowserRouter>
    </div>
  )
}

export default App
