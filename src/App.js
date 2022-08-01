import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import Add from "./components/Add";
import List from "./components/List";
import "./App.css";

function App() {
  const [ListId, setListId] = useState("");

  const getListIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setListId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">ToDo list-</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <Add id={ListId} setListId={setListId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <List getListId={getListIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;