// import { useEffect } from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchListaRicoveri } from "../../redux/actions/ricovero";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInfoCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

// export function ElencoRicoveri() {
//   const dispatch = useDispatch();
//   const elencoRicoveri = useSelector((state) => state.ricoveri.elencoRicoveri);

//   useEffect(() => {
//     dispatch(fetchListaRicoveri());
//     console.log(elencoRicoveri);
//   }, []);
//   return (
//     <Container className="mt-3">
//       <h2 className="text-center">Lista ricoveri</h2>
//       <Row>
//         {elencoRicoveri &&
//           elencoRicoveri.map((obj, index) => (
//             <Col className="col-4" key={index}>
//               <Card className="bg-light bg-opacity-75">
//                 <Card.Body>
//                   <Card.Title>
//                     {obj.ricoveri.IdRicovero} {obj.ricoveri.IdAnimale}
//                   </Card.Title>
//                   <div className="d-flex align-items-baseline">
//                     <Card.Subtitle>Foto: </Card.Subtitle>
//                     <Card.Text className="ms-2">{obj.ricoveri.FotoAnimale}</Card.Text>
//                   </div>

//                   <div className="d-flex align-items-baseline">
//                     <Card.Subtitle>Prezzo: € </Card.Subtitle>
//                     <Card.Text className="ms-2">{obj.ricoveri.PrezzoRicovero}</Card.Text>
//                   </div>
//                   <div className="d-flex justify-content-end">
//                     <Link className="btn btn-dark me-1" to={"/Ricoveri/Details/" + obj.ricoveri.idRicovero}>
//                       <FontAwesomeIcon icon={faInfoCircle} />
//                     </Link>
//                     <Link className="btn btn-dark" to={"/Ricoveri/Edit/" + obj.ricoveri.idRicovero}>
//                       <FontAwesomeIcon icon={faEdit} />
//                     </Link>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//       </Row>
//     </Container>
//   );
// }
