import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const AboutDev = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <h3>The Developer</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <b>Bro. Chadric M. Gotis</b>
            </ListGroup.Item>
            <ListGroup.Item>Email: chad.mgotis@gmail.com</ListGroup.Item>
            <ListGroup.Item>Contact: 0938-7111-834</ListGroup.Item>
            <ListGroup.Item>LinkedIn: Chadric Gotis</ListGroup.Item>
            <ListGroup.Item>Twitter: @cmgotis</ListGroup.Item>
            <ListGroup.Item>Instagram: @cmgotis</ListGroup.Item>
          </ListGroup>

          {/* This Database is the legacy of the Following Brothers and Sisters
              of Aurora Provincial Council 2020 */}
        </Card.Body>
      </Card>
    </>
  );
};

export default AboutDev;
