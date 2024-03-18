
import { Button, Col, Container, Row } from "react-bootstrap";
import { fetchWithAuth } from "../functions/interceptor";

function Home() {

  const fetchProprietario = () => {
    fetchWithAuth("Proprietario")

}


  return (
    <Container>
      <Row>
        <Col className=" d-flex justify-content-center">
          <div className=" fs-1 text-danger  bg-gray-900">MEGA KEBAB</div>
        </Col>
      </Row>
      <Button onClick={fetchProprietario()} className=" btn-blue-500"> BOTTONE KEBAB</Button>
      {/* <Button className=" btn-blue-600"> BOTTONE KEBAB</Button>
      <Button className=" btn-blue-700"> BOTTONE KEBAB</Button>
      <Button className=" btn-blue-800"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-500"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-600"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-700"> BOTTONE KEBAB</Button>
      <Button className=" btn-red-800"> BOTTONE KEBAB</Button>
      <Button className=" btn-brown-900"> BOTTONE KEBAB</Button>
      <Button className=" btn-brown-800"> BOTTONE KEBAB</Button>
      <Button className=" btn-brown-700"> BOTTONE KEBAB</Button>
      <Button className=" btn-brown-600"> BOTTONE KEBAB</Button>
      <Button className=" btn-brown-500"> BOTTONE KEBAB</Button> */}
    </Container>
  );
}

export default Home;
