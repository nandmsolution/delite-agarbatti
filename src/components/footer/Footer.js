import { Image, Container, Row, Col } from "react-bootstrap";
import { Envelope, Geo, TelephonePlus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../../assest/logo192.png";
const Footer = () => {
  return (
    <div className="pt-3">
      <Container fluid className="bg-mint">
        <Row className="pt-5">
          <Col className="d-flex justify-content-around" md={4} sm={12}>
            <div>
              <div className="d-flex justify-content-center">
                <p style={{ fontSize: "4.5rem" }} className="logo-font">
                  {" "}
                  Delite
                </p>
              </div>
              <div className="p-3">
                <p className="text-dark">
                  Delite is a brand known for its strong consumer-focus and
                  spirit of innovation and creativity. With our state-of-the-art
                  manufacturing facilities located in Jaora(M.P), we as a brand
                  also export perfumed incense all over India.
                </p>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-around" md={4} sm={12}>
            <div>
              <h3 className="text-center text-dark"> Know More </h3>
              <div className="my-md-5 py-md-4">
                <ul>
                  <li className="h5 lead">
                    {" "}
                    <Link
                      style={{ color: "#365C47", textDecoration: "None" }}
                      to="/"
                      className="text-dark"
                    >
                      <b>Home</b>
                    </Link>
                  </li>
                  <li className="h5 lead">
                    {" "}
                    <Link
                      to="/products"
                      className="text-dark"
                      style={{ color: "#365C47", textDecoration: "None" }}
                    >
                      <b>Gallery</b>
                    </Link>
                  </li>
                  <li className="h5 lead">
                    {" "}
                    <Link
                      to="/about"
                      className="text-dark"
                      style={{ color: "#365C47", textDecoration: "None" }}
                    >
                      <b>About Us</b>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-around" md={4} sm={12}>
            <div>
              <h3 className="text-center text-dark"> Contact Us </h3>
              <div className="my-md-5 py-md-4">
                <div className="my-sm-2">
                  <Geo className="d-inline text-dark" size={25} />
                  <p className="d-inline  pl-sm-3 text-dark pl-md-2">
                    {" "}
                    46/2 Lakkad Pith Road
                  </p>
                </div>
                <div className="my-sm-2">
                  <TelephonePlus className="d-inline text-dark" size={25} />
                  <p className="d-inline  pl-sm-3 text-dark pl-md-2">
                    {" "}
                    +91798-7979-086,
                  </p>
                  <p className="d-inline  pl-sm-3 pl-md-2 text-dark ">
                    {" "}
                    +91999-8888-999
                  </p>
                </div>
                <div className="my-sm-2">
                  <Envelope className="d-inline text-dark" size={25} />
                  <p className="d-inline  pl-sm-3 pl-md-2 text-dark">
                    harajmast9008@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-around py-2">
            <span className="text-dark">
              &copy; 2021 Delight All Rights Reserved
            </span>
          </Col>
          <Col className="d-flex justify-content-around py-2">
            <span className="text-dark">
              {" "}
              Made with &#10084; by{" "}
              <a
                href="https://nandmsolution.github.io/nandm/"
                className="text-dark"
              >
                <b>N&M Solutions</b>
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
