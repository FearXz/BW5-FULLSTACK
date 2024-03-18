import "./App.scss";
import "./assets/css/mybootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <LoginForm />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
