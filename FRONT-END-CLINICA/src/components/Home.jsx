import { Button, Col, Container, Row } from "react-bootstrap";
import { fetchWithAuth } from "../functions/interceptor";
import { useDispatch } from "react-redux";
import { fetchListaProprietari } from "../redux/actions/actions";

function Home() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col className=" d-flex justify-content-center">
          <div className=" fs-1 text-danger  bg-gray-900">MEGA KEBAB</div>
        </Col>
      </Row>
      <Button onClick={() => dispatch(fetchListaProprietari())} className=" btn-blue-500">
        {" "}
        BOTTONE KEBAB
      </Button>
    </Container>
  );
}

export default Home;
