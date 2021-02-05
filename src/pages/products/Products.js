import { useState } from "react";
import { Card } from "../../components/cards/Card";
import ag1 from "../../assest/test.jpg";
import ag2 from "../../assest/test4.jpg";
import ag3 from "../../assest/test3.jpg";
import ag4 from "../../assest/test2.jpg";

const Products = () => {
  console.log("Products Page");
  const [data, setData] = useState([
    {
      id: 1,
      image: ag1,
      title: "Mysore Sandal",
    },
    {
      id: 2,
      image: ag2,
      title: "Lavender Bliss",
    },
    {
      id: 3,
      image: ag3,
      title: "Musk",
    },
    {
      id: 4,
      image: ag4,
      title: "Woods",
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        {data !== null &&
          data.map((item) => (
            <Card
              id={item.id}
              img={item.image}
              title={item.title}
              price={null}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
