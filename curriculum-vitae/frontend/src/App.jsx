import { HashRouter, Routes, Route } from "react-router-dom";
import CV from "./pages/CV";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CV />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
