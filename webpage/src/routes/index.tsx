import { Route, Routes, Navigate } from "react-router-dom";
import ListingPage from "../pages/ListingPage";
import RegisterPage from "../pages/RegisterPage";

export default () => (
  <Routes>
    <Route path="/" element={<ListingPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
