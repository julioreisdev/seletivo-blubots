import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Chat from "./Chat/Chat";
import Introcdution from "./Introcdution/Introduction";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introcdution />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
