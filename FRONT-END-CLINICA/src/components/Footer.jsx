import React from "react";

function Footer() {
  return (
    <footer className="footerCustom">
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <div>
              <h5>Contatti</h5>
              <p>Email: info@epiclinic.com</p>
              <p>Telefono: +1 (123) 456-7890</p>
              <p>Indirizzo: Via Principale, Città, Paese</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <h5>Orari di Apertura</h5>
              <p>Lunedì - Venerdì: 9:00 - 18:00</p>
              <p>Sabato: 10:00 - 16:00</p>
              <p>Domenica: Chiuso</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <h5>Seguici</h5>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-12">
            <p className="text-center  text-light">© 2024 EpiClinic. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
