import React from "react";
import MuttonCard from "./MuttonCard";
import muttonData from "@/data/muttonData";


const MuttonItem = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6 mb-6 lg:justify-start mx-5">
      {muttonData.map((data) => {
        return (
          <MuttonCard
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

export default MuttonItem;

