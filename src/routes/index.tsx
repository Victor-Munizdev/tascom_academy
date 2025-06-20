import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Create from "../pages/Create";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}
