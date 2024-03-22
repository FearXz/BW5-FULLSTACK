import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { fetchListaProprietari } from "../../redux/actions/proprietario";
import { useEffect, useRef } from "react";

function Home() {
  const dispatch = useDispatch();

  window.addEventListener('scroll', function() {
    var infoBlock = document.querySelector('.infoBlock');
    var top = infoBlock.getBoundingClientRect().top;
  
    if(top <= window.innerHeight) {
      infoBlock.classList.add('animate');
    } else {
      infoBlock.classList.remove('animate');
    }
  });

  return (
    <div>
      <div className="m-0 image-container">
        <img
          src="https://www.aboutpharma.com/wp-content/uploads/2022/05/shutterstock_1868848609-scaled-e1651590603691.jpg"
          alt="Real Estate"
          className="img-fluid"
        />
        <div className="jumbotron jumbotron-fluid fade-in">
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="m-0 epiclinic2">EpiClinic</p>
            </div>
            <p className="jumbolead ">Ci prendiamo cura dei vostri piccoli amici.</p>
          </div>
        </div>
      </div>
      {/* 3 cards */}
      <div className="container my-5 py-3">
        <div className="row" id="cardz">
          <div className="col-lg-4">
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
          <div className="col-lg-4">
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
          <div className="col-lg-4">
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
      {/* chi siamo */}
      <div className="container infoBlock">
        <div className="row">
          <div className="col-lg-6">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block CarouselImg"
                  src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2023/06/R202RA.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block CarouselImg"
                  src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block CarouselImg"
                  src="https://www.pawlovetreats.com/cdn/shop/articles/pembroke-welsh-corgi-puppy_1000x.jpg?v=1628638716"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-6">
            <div>
              <h1>Chi siamo</h1>
              <p>
                L'Epiclinic nasce nel 2000 come un'oasi di cura e benessere per i nostri amici a quattro zampe, sotto la
                guida visionaria del dott. Leonardo Rossi e del dott. Giovanni Bianchi, due luminari nel mondo della
                medicina veterinaria con un'esperienza senza pari nella cura degli animali domestici.
              </p>
              <p>
                Con il supporto esperto delle dott.sse Francesca Verdi e Martina Rossetti, e grazie alla nostra
                trasformazione in un ambulatorio all'avanguardia, aperto per voi durante gli orari diurni e i giorni
                feriali, abbiamo rivoluzionato il nostro approccio per offrirvi un servizio completo e altamente
                specializzato.
              </p>
              <p>
                Tutto ciò è stato reso possibile grazie all'illuminata guida del Dott. Bianchi (attuale Direttore
                Sanitario), che ha ereditato il testimone dall'instancabile impegno del Dott. Rossi, e con il supporto
                ineguagliabile delle Dott.sse Verdi, Rossetti e Ferrari, insieme alla collaborazione preziosa di
                professionisti di spicco nel settore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
