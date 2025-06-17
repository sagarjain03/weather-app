import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherPage from "./pages/weatherPage";
import CityPage from "./pages/cityPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const App = () => {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Layout>
              <Routes>
                <Route path="/" element={<WeatherPage />} />
                <Route path="/city/:cityName" element={<CityPage />} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
