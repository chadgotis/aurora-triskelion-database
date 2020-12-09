import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import AboutDev from "../components/AboutDev";

const About = () => {
  return (
    <>
      <Row>
        <Col className="mb-3">
          {/* <Jumbotron> */}
          {/* <h2>The Developer</h2>
            <p>
              <b>Bro. Chadric M. Gotis</b>
            </p> */}
          {/* </Jumbotron> */}
          <Card>
            <Card.Body>
              <h1>About ATDBMS</h1>
              <p>
                {/* Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                purus sit amet fermentum. Donec sed odio operae, eu vulputate
                felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                concilium totius Galliae in diem certam indicere. Cras mattis
                iudicium purus sit amet fermentum. */}
                This Database is the legacy of the Following Brothers and
                Sisters of Aurora Provincial Council 2020.
              </p>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b>Governor General: Rosendo Diaz</b>
                </ListGroup.Item>
                <ListGroup.Item>Hanover Casar</ListGroup.Item>
                <ListGroup.Item>Marco Yambot</ListGroup.Item>
                <ListGroup.Item>Richard Gotis</ListGroup.Item>
                <ListGroup.Item>Dennis Nefulda</ListGroup.Item>
                <ListGroup.Item>Mario Banan</ListGroup.Item>
                <ListGroup.Item>Francis James Goze</ListGroup.Item>
                <ListGroup.Item>Chadric Gotis</ListGroup.Item>
                <ListGroup.Item>Cesar Almarez</ListGroup.Item>
                <ListGroup.Item>Ramil Villanueva</ListGroup.Item>
                <ListGroup.Item>Harold Chan</ListGroup.Item>
                <ListGroup.Item>Bienvenido Ritual</ListGroup.Item>
              </ListGroup>
              <br />
              {/* <p>
                This Database is the legacy of the Following Brothers and
                Sisters of Aurora Provincial Council 2020.
              </p> */}
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-3">
          <AboutDev />
        </Col>
      </Row>
    </>
  );
};

export default About;
