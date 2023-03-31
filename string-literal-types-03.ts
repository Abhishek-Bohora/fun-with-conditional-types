//Narrowing string literal types
function assertsNever(value: never) {
  throw new Error("Unexpected");
}

function withAlignment(alignment: "center" | "left" | "right") {
  //narrowing literal types
  //   if (alignment === "center" || alignment === "left") {
  //     alignment;
  //   } else if (alignment === "right") {
  //     alignment;
  //   } else {
  //     alignment;
  //   }

  //using switch to narrow down
  switch (alignment) {
    case "center":
      break;
    case "left":
      break;
    case "right":
      break;
    default:
      assertsNever(alignment);
  }
}

withAlignment("center");
withAlignment("left");
withAlignment("right");
withAlignment("central");

//in typescript any literal value can also be used as a type ex: let right = "right";
