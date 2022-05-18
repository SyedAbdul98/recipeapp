import React from "react";

export default function Recipe(props) {
  return (
    <div className="col-sm m-2 ">
      <div className="card " style={{ width: "18rem" }}>
      <div className="card-body">
        <img className="card-img-top" src={props.image} alt="" />
        <span>
          <b>{props.title}</b>
        </span>
        <p className="card-subtitle">{props.mealType}</p>
      </div>
    </div>
    </div>
  );
}