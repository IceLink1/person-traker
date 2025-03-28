import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import PersonById from "../pages/PersonById/PersonById";
import PersonCreate from "../pages/PersonCreate/PersonCreate";
import PersonEdit from "../pages/PersonEdit/PersonEdit";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/person/:id" element={<PersonById />} />
      <Route path="/create" element={<PersonCreate />} />
      <Route path="/edit/:id" element={<PersonEdit />} />
    </Routes>
  );
}
