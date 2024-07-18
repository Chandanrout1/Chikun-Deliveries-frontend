import React from "react";
import ChickenCard from "./ChickenCard";
import chickenData from "@/data/chickenData.js";

const ChickenItem = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 mb-6 lg:justify-start mx-5">
      {chickenData.map((data) => {
        return (
          <ChickenCard
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

export default ChickenItem;

