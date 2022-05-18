import React from "react";

export default function Recipe(props) {
  return (
    <>
    <h1>Recipies are below: </h1>
        <div className="col-md m-2 ">
      <div className="card bg-secondary" style={{ width: "18rem" }}>
      <div className="card-body">
        <img className="card-img-top" src={props.image} alt="" />
        <span>
          <b>{props.title}</b>
        </span>
        <p className="card-subtitle">{props.mealType}</p>
      </div>
    </div>
    </div>
    </>
  );
}
