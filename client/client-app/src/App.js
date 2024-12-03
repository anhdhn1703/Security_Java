import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import TarotCard from "./pages/TarotCard";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boi-bai-tarot" element={<TarotCard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
