import React from "react";
import prawnData from "@/data/prawnData";
import PrawnCard from "./PrawnCard";

const PrawnItem = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 mb-6 lg:justify-start mx-5">
      {prawnData.map((data) => {
        return (
          <PrawnCard
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

export default PrawnItem;
