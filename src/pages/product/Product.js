import { useEffect, useState } from "react";
import { Showcase } from "../../components/showcase/Showcase";
import ag1 from "../../assest/test.jpg";
import ag2 from "../../assest/test4.jpg";
import ag3 from "../../assest/test3.jpg";
import ag4 from "../../assest/test2.jpg";

const Product = (props) => {
  const [data, setData] = useState([
    {
      image: ag1,
      title: "Mysore Sandal",
    },
    {
      image: ag2,
      title: "Lavender Bliss",
    },
    {
      image: ag3,
      title: "Musk",
    },
    {
      image: ag4,
      title: "Woods",
    },
  ]);
  var id = props.match.params.id;
  const item = data[id - 1];
  //const URL = "https://fakestoreapi.com/products?id=" + id;
  //useEffect(() => {
  //  fetch(URL)
  //    .then((res) => res.json())
  //    .then((json) => setData(json[0]))
  //    .catch((error) => console.error("Error", error));
  //}, [URL]);

  return (
    <div>
      {data !== null && (
        <Showcase
          image={item.image}
          heading={item.title}
          desc={
            "Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our flexbox grid system. Plus, see how to use column classes to manage widths of non-grid elements."
          }
        />
      )}
    </div>
  );
};

export default Product;
