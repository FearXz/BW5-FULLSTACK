import "./assets/css/mybootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/Login/LoginForm";
import MyNavbar from "./components/MyNavbar";
import FormCreateProprietario from "./components/Proprietario/Create/FormCreateProprietario";
import FormCreateAnimale from "./components/Animale/Create/FormCreateAnimale";

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
          path="/Proprietario/Create"
          element={
            <>
              <FormCreateProprietario />
            </>
          }
        />
         <Route
          path="/Animale/Create"
          element={
            <>
              <FormCreateAnimale />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
