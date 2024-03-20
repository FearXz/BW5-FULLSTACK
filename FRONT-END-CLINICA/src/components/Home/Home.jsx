import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { fetchListaProprietari } from "../../redux/actions/proprietario";

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="m-0 image-container">
        <img
          src="https://www.aboutpharma.com/wp-content/uploads/2022/05/shutterstock_1868848609-scaled-e1651590603691.jpg"
          alt="Real Estate"
          className="img-fluid"
        />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="m-0 epiclinic2">EpiClinic</p>
            </div>
            <p className="jumbolead ">Ci prendiamo cura dei vostri piccoli amici.</p>
          </div>
        </div>
      </div>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img"
                src="https://www.clinvetorino.eu/wp-content/uploads/2022/04/veterinario-torino-controllo-generale-cane-gatto-visita-clinica.jpg"
                alt="Card image cap"
              />
              <div className="card-img-overlay cardText">
                <h5 className="customCardTitle">VISITA CLINICA</h5>
                <p className="card-text">
                  Un'attenta visita clinica costituisce il fondamento per cercare di comprendere al meglio eventuali
                  problematiche dell'animale.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img"
                src="https://doctorvet.it/wp-content/uploads/2019/10/vaccinazione-cane.jpg"
                alt="Card image cap"
              />
              <div className="card-img-overlay cardText">
                <h5 className="customCardTitle">VACCINAZIONI</h5>
                <p className="card-text">
                  Le vaccinazioni sono pianificate in modo flessibile, adattandosi allo stile di vita specifico
                  dell'animale.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                className="card-img"
                src="https://www.clinvetorino.eu/wp-content/uploads/2022/02/chirurgia-tessuti-molli-veterinaria-torino-chirurgo-veterinario-intervento-sala-operatoria-collivignarelli.jpg"
                alt="Card image cap"
              />
              <div className="card-img-overlay cardText">
                <h5 className="customCardTitle">CHIRURGIA DI BASE</h5>
                <p className="card-text">
                  Procedure standard con costante monitoraggio dei parametri vitali del paziente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
