import "./assets/css/mybootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
