import { useEffect, useState } from "react";

import axios from "axios";
import NormalCard from "../components/NormalCard";

const JweleryPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filter = async () => {
      const category = "jewelery";
      const response = await axios.get(
        `http://localhost:3000/api/product/category/${category}`
      );
      setItems(response.data);
    };
    filter();
  }, []);

  return (
    <>
      <div className="w-full pt-[100px]">
        <div className="w-full h-auto lg:px-40 px-10">
            <h1 className="text-xl text-[gold] italic">Jewelery</h1>
          <section className="w-full h-auto flex justify-center py-10 items-center gap-4 flex-wrap">
            {items.map((product) => {
              return <NormalCard product={product} key={product.id} />;
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default JweleryPage;
