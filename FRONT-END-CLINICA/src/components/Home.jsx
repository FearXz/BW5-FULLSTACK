
import { Button, Col, Container, Row } from "react-bootstrap";
import { fetchWithAuth } from "../functions/interceptor";

function Home() {

  const fetchProprietario = async () => {
    const response = await fetchWithAuth("Proprietario/list")
    const data = await response.json();
    console.log(data);

}


  return (
    <Container>
      <Row>
        <Col className=" d-flex justify-content-center">
          <div className=" fs-1 text-danger  bg-gray-900">MEGA KEBAB</div>
        </Col>
      </Row>
      <Button onClick={() => fetchProprietario()} className=" btn-blue-500"> BOTTONE KEBAB</Button>
     
    </Container>
  );
}

export default Home;
