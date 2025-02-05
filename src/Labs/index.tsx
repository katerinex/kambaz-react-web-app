// src/Labs/index.tsx
import { Route, Routes, Navigate } from "react-router-dom";
import Lab1 from "./Lab1";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";


export default function Labs() {
  return (
    <div>
      <h2>Katerine Osorio-Maldonado</h2>
      <h1>Labs</h1>

      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />  {/* Relative redirect */}
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2/*" element={<Lab2 />} /> {/* Nested routes in Lab2 if needed */}
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );}




  
