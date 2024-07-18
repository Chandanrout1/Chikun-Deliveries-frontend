import React from "react";
import FishCard from "./FishCard";
import fishData from "@/data/fishData.js";

const FishItem = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 mb-6 lg:justify-start mx-5">
      {fishData.map((data) => {
        return (
          <FishCard
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

export default FishItem;
