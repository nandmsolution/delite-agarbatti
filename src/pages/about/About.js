import { Card, Row, Col } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { Showcase } from "../../components/showcase/Showcase";
import agarbatti from "../../assest/25534bf31420245ec61fd36be2337e1b--hd-wallpaper-wallpapers.jpg";

const Vision = () => {
  return (
    <div className="p-3">
      <CardDeck as={Row}>
        <Card className="p-3 zoom " as={Col} md={4} sm={12}>
          <Card.Body>
            <Card.Title> Our Legacy </Card.Title>
            <Card.Text>
              We are known for manufacturing the best incense sticks in India
              since 1983. We are proud to continue the legacy of being the
              bestsellers in the incense market with a sell-out of over 400
              different fragrances and other perfumed essentials such as oils,
              diffusers, candles and soaps.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3 zoom" as={Col} md={4} sm={12}>
          <Card.Body>
            <Card.Title> Our Range </Card.Title>
            <Card.Text>
              Our wide range of Agarbatti (incense) sticks is also available
              online for purchase. Our innovation and creativity get's reflected
              by our wide range of products which can be used for various
              purposes such as daily pooja, meditation and better concentration
              or just we can use as a fragrance and to infuse positivity at your
              home or in your office.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3 zoom" as={Col} md={4} sm={12}>
          <Card.Body>
            <Card.Title> Our Vision </Card.Title>
            <Card.Text>
              We have already set ourselves on the path to becoming the best
              incense stick manufacturers in India and across the globe. We have
              also expanded our international reach and began supplying globally
              to Europe, Middle East, Africa, Australia, North and South America
              as well as other Asian countries.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};
const About = () => {
  const desc =
    "Delite as a brand is known  for manufacturing and exporting perfumed incense to over many cities. We understand what our customer demands and expects, and thus, we as a brand are more customer driven and believe in the spirit of innovation and creativity.Founded by two friends in the year 2017. With state-of-the-art manufacturing facilities located at Jaora , we manufacture a vast range of incense sticks.Delite incense can be experienced in different forms such as scented and masala sticks, agarbattis. These products not only provide you with rich aromatic experience but also creates a perfect ambience for your daily prayers, meditation, and yoga.";
  return (
    <div>
      <Showcase image={agarbatti} heading={"About Us"} desc={desc} />
      <Vision />
    </div>
  );
};

export default About;
