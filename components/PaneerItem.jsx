import React from "react";
import PaneerCard from "./PaneerCard";
import paneerData from "@/data/paneerData";


const PaneerItem = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 mb-6 lg:justify-start mx-5">
      {paneerData.map((data) => {
        return (
          <PaneerCard
            key={data.id}
            id={data.id}
            name={data.name}
            img={data.img}
            price={data.price}
            gram={data.gram}
            pieces={data.pieces}
            serves={data.serves}
          />
        );
      })}
    </div>
  );
};

export default PaneerItem;

