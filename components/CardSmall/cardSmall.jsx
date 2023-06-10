import React from "react";
import { cardMap } from "./utils";
import Image from "next/image";

const CardSmall = () => {
  return (
    <div className="flex space-between margin-left-20 margin-top-20">
      {cardMap.map((card, index) => {
        return (
          <div
            className="cardSmall"
            key={index}
            style={{ background: card.background }}
          >
            <div className="flex end">
              <Image src={card.icon} width={30} height={30} alt="img"></Image>
            </div>
            <div className="flex start column" style={{ height: "50px" }}>
              <div className="font-size-12 mb_light">{card.label}</div>
              <div className="font-size-24 mb_bold">{card.number}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSmall;
