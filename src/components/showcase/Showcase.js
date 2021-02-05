import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//import { useEffect, useRef } from "react";

//import ScrollReveal from "scrollreveal";

export const Showcase = ({ image, heading, desc, reverse }) => {
  //  const right = useRef(null);
  //  const left = useRef(null);

  //  useEffect(() => {
  //    ScrollReveal().reveal(left.current, {
  //      duration: 2000,
  //      origin: "bottom",
  //      distance: "300px",
  //    });
  //    ScrollReveal().reveal(right.current, {
  //      duration: 2000,
  //      origin: "bottom",
  //      distance: "300px",
  //    });
  //  }, []);
  //
  return (
    <section>
      <div className="p-2">
        <Container fluid>
          {reverse === true ? (
            <Row>
              <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                <div style={{ marginTop: "16%" }}>
                  <h1> {heading}</h1>
                  <p> {desc} </p>
                  <Link to="/about">
                    <Button variant="mint"> Know More</Button>
                  </Link>
                </div>
              </Col>
              <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                <img alt={heading} src={image} style={{ width: "100%" }} />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col md="8" sm="12">
                <img alt={heading} src={image} style={{ width: "100%" }} />
              </Col>
              <Col md="4" sm="12">
                <div style={{ marginTop: "16%" }}>
                  <h1> {heading}</h1>
                  <p> {desc} </p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </section>
  );
};
