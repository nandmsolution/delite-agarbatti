import { Image } from "react-bootstrap";
import { Showcase } from "../../components/showcase/Showcase";
import { FeatureImage } from "../../components/featureImage/FeatureImage";
import agarbatti from "../../assest/Home/2017-03-06-12-19-02-725x483.jpg";
import img from "../../assest/Home/test4.jpg";

const Slider = () => {
  //  useEffect(() => {
  //    fetch("https://fakestoreapi.com/products?limit=1")
  //      .then((res) => res.json())
  //      .then((json) => setData(json))
  //      .catch((error) => console.log(error));
  //  }, []);
  return (
    <div>
      <Image className="pt-3 mt-3 d-block w-100" src={img}></Image>
    </div>
  );
};
const Home = () => {
  var heading = "About Delight - Leading Agarbatti Manufacturer";
  var desc =
    "Delight as a brand is known globally for manufacturing and exporting perfumed incense to over many cities across the globe. We understand what our customer demands and expects, and thus, we as a brand are more customer driven and believe in the spirit of innovation and creativity. Founded by three brothers in the year 2017, Delight has continued to grow in strength and market reach to be ranked as the best incense manufacturing company in India. With state-of-the-art manufacturing facilities located at Jaora(M.P), we manufacture a vast range of incense stick and raw agarbatti";
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className="pt-4">
        <Showcase reverse image={agarbatti} heading={heading} desc={desc} />
      </div>
      <div>
        <h1 className="mt-3 p-1  text-center"> Feature Images</h1>
        <FeatureImage />
      </div>
    </div>
  );
};

export default Home;
