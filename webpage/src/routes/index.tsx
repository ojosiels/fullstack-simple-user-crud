import { Route, Routes, Navigate } from "react-router-dom";
import ListingPage from "../pages/ListingPage";

export default () => (
  <Routes>
    <Route path="/" element={<ListingPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
