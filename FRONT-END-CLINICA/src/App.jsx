import "./assets/css/mybootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import MyNavbar from "./components/MyNavbar";
import FormCreateProprietario from "./components/Proprietario/Create/FormCreateProprietario";
import FormCreateAnimale from "./components/Animale/Create/FormCreateAnimale";
import { ElencoAnimali } from "./components/Animale/Index/ElencoAnimali";
import EditAnimale from "./components/Animale/Edit/EditAnimale";
import Proprietario from "./components/Proprietario/Proprietario";
import DetailProprietario from "./components/Proprietario/Details/DetailProprietario";
import EditProprietario from "./components/Proprietario/Edit/EditProprietario";
import ElencoVisite from "./components/Visite/Index/ElencoVisite";
import Home from "./components/Home/Home";
import FormCreateVisite from "./components/Visite/Create/FormCreateVisite";
import EditVisite from "./components/Visite/Edit/EditVisite";
import { ElencoRicoveri } from "./components/Ricovero/Index/ElencoRicoveri";
import FormCreateRicovero from "./components/Ricovero/Create/FormCreateRicovero";
import EditRicovero from "./components/Ricovero/Edit/EditRicovero";
import DetailAnimale from "./components/Animale/Details/DetailAnimale";
import { ElencoProdotti } from "./components/Prodotto/Index/ElencoProdotti";
import FormCreateProdotto from "./components/Prodotto/Create/FormCreateProdotto";
import EditProdotto from "./components/Prodotto/Edit/EditProdotto";
import DetailProdotto from "./components/Prodotto/Details/DetailProdotto";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import Success from "./components/Success";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/success" element={<Success />} />

        <Route path="/" element={<Home />} />

        <Route path="/Proprietario">
          <Route index element={<Proprietario />} />
          <Route path="Create" element={<FormCreateProprietario />} />
          <Route path="Details/:id" element={<DetailProprietario />} />
          <Route path="Edit/:id" element={<EditProprietario />} />
        </Route>

        <Route path="/Animale">
          <Route index element={<ElencoAnimali />} />
          <Route path="Create" element={<FormCreateAnimale />} />
          <Route path="Details/:id" element={<DetailAnimale />} />
          <Route path="Edit/:AnimaleId" element={<EditAnimale />} />
        </Route>

        <Route path="/Visite">
          <Route index element={<ElencoVisite />} />
          <Route path="Create" element={<FormCreateVisite />} />
          <Route path="Create/:id" element={<FormCreateVisite />} />
          <Route path="Edit/:id" element={<EditVisite />} />
        </Route>

        <Route path="/Ricovero">
          <Route index element={<ElencoRicoveri />} />
          <Route path="Create" element={<FormCreateRicovero />} />
          <Route path="Edit/:id" element={<EditRicovero />} />
        </Route>

        <Route path="/Prodotto">
          <Route index element={<ElencoProdotti />} />
          <Route path="Create" element={<FormCreateProdotto />} />
          <Route path="Details/:id" element={<DetailProdotto />} />
          <Route path="Edit/:id" element={<EditProdotto />} />
        </Route>
        <Route path="/Carrello" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
