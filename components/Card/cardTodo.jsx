import React from "react";
import { todoMap } from "./utils";

const CardTodo = () => {
  return (
    <div className="card margin-left-20 margin-top-20 margin-bottom-20">
      <div className="flex full-width space-between">
        <div className="mb_medium">Today’s schedule</div>
        <div className="mb_light">See All</div>
      </div>

      <div className="margin-top-20">
        {todoMap.map((todo, index) => {
          return (
            <div className="flex margin-bottom-20" key={index}>
              <div
                className="bar margin-right-10"
                style={{ border: `5px solid ${todo.background}` }}
              >
                {" "}
              </div>
              <div>
                <div className="mb_medium">{todo.title}</div>
                <div className="mb_light">{todo.time}</div>
                <div className="mb_light">{todo.location}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardTodo;
