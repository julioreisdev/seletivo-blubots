import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Chat from "./Chat/Chat";
import Introcdution from "./Introcdution/Introduction";
import context from "./Context/Context";

export default function App() {
  return (
    <BrowserRouter>
      <context.Provider value={{}}>
        <Routes>
          <Route path="/" element={<Introcdution />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </context.Provider>
    </BrowserRouter>
  );
}
