function withAlignment(alignment: "center" | "left" | "right") {
  if (alignment === "center") {
    alignment;
  } else if (alignment === "left") {
    alignment;
  } else if (alignment === "right") {
    alignment;
  } else {
    alignment;
  }
}
withAlignment("center");
withAlignment("left");
withAlignment("right");
withAlignment("central");

//in typescript any literal value can also be used as a type ex: let right = "right";
