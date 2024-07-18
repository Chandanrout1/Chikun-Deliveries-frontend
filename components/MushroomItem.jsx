import React from "react";
import MushroomCard from "./MushroomCard";
import mushroomData from "@/data/mushroomData";


const MushroomItem = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 mb-6 lg:justify-start mx-5">
      {mushroomData.map((data) => {
        return (
          <MushroomCard
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

export default MushroomItem;

