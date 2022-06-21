import React from "react";

function get_my_coords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

export default function Card(props) {
  let new_coords = get_my_coords(props.theta, props.radius);

  return (
    <div
      className="card"
      style={{
        // ...styles.card,
        left: `${props.center.x + new_coords.x}px`,
        top: `${props.center.y - new_coords.y}px`,
        zIndex: `${props.id}`,
        // transform: ` translate(-50%, -50%) rotateY(65deg)`,
      }}
    >
      <img className="image" src={props.pic} alt="art work image" />
    </div>
  );
}

// const styles = {
//   card: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     // transform: "translate(-50%, -50%)  rotate3d(0, 1, 0, 65deg)",
//     transformStyle: "preserve-3d",

//     height: "100px",
//     width: "100px",
//     cursor: "pointer",
//   },
//   image: {
//     height: "100px",
//     width: "100px",
//   },
// };
