import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../components/pages/HomePage";
import PropertiesPage from "../../components/pages/PropertiesPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;