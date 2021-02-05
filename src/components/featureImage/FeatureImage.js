import { Card } from "react-bootstrap";
import { Row, CardDeck, Col } from "react-bootstrap";
import "./style.css";
import ag1 from "../../assest/test.jpg";
import ag2 from "../../assest/test4.jpg";
import ag3 from "../../assest/test3.jpg";
export const FeatureImage = () => {
  return (
    <div className="p-3">
      <CardDeck style={{ fontSize: "2.5rem" }} as={Row}>
        <Card className="p-2 " as={Col} md={4}>
          <div className="zoom">
            <Card.Img src={ag1} />
          </div>
          <Card.Footer>
            <p className="pt-2  logo-font text-center">Mysore Sandal</p>
          </Card.Footer>
        </Card>
        <Card className="p-2" as={Col} md={4}>
          <div className="zoom">
            <Card.Img src={ag2} />
          </div>
          <Card.Footer>
            <p className="pt-2  logo-font text-center">Lavender Bliss</p>
          </Card.Footer>
        </Card>
        <Card className="p-2" as={Col} md={4}>
          <div className="zoom">
            <Card.Img src={ag3} />
          </div>
          <Card.Footer>
            <p className="pt-2  logo-font text-center">Musk</p>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};
