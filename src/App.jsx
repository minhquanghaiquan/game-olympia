import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EssayPage from "./pages/EssayPage";
import MCQPage from "./pages/MCQPage";
import CrosswordPage from "./pages/CrosswordPage";
import AnswerPage from "./pages/AnswerPage";
import MiniGamePage from "./pages/MiniGamePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/essay" element={<EssayPage />} />
        <Route path="/mcq" element={<MCQPage />} />
        <Route path="/crossword" element={<CrosswordPage />} />
        <Route path="/answers" element={<AnswerPage />} />
        <Route path="/minigame" element={<MiniGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}
