// src/Kambaz/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kambaz() {
  return (
    <div id="wd-kambaz" style={{ display: 'flex' }}>
      <KambazNavigation />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:cid/*" element={<Courses />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}



  


  