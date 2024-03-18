import "./assets/css/mybootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import MyNavbar from "./components/MyNavbar";
import FormCreateProprietario from "./components/FormCreateProprietario";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
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
        <Route
          path="/aggiungiProprietario"
          element={
            <>
              <FormCreateProprietario />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
