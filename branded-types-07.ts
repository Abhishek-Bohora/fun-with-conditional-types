//Q. How can i ensure that a string is a file path
//       =>we can use branded types

//a primitive type intersected with an object is called branded types

//suppose we want to have a path with certain property to ensure that string is of this type not just any string
type Path = string & {
  //this property will not be there at a runtime
  //it is just for a typechecker to check what is a path and what isn't
  __brand: "Path";
};

type Guid = string & {
  __brand: "Guid";
};

function copy(source: Guid, destination: Path) {}
let src = "aaa";
let dest = "bbb";

function isPath(p: string): p is Guid {
  return true;
}

//throw a run-time error if it is not a path
function assertPath(p: string): asserts p is Path {
  if (!isPath) throw new Error("Not a path");
}

assertPath(dest);
if (isPath(src)) {
  copy(src, dest);
}
