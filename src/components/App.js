import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Chat from "./Chat/Chat";
import Introcdution from "./Introcdution/Introduction";
import context from "./Context/Context";
import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState();
  const [assistent, setAssistent] = useState();
  const [promiseFinish, setPromiseFinish] = useState(false);

  return (
    <BrowserRouter>
      <context.Provider
        value={{
          messages,
          setMessages,
          assistent,
          setAssistent,
          promiseFinish,
          setPromiseFinish,
        }}
      >
        <Routes>
          <Route path="/" element={<Introcdution />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </context.Provider>
    </BrowserRouter>
  );
}
