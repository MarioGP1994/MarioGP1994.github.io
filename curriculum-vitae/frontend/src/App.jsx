import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV from "./pages/CV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
