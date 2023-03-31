//narrowing down the primitive type
// function withNumberorString(p: string | number | boolean) {
//   if (typeof p === "string") {
//     p;
//   } else if (typeof p === "boolean") {
//     p;
//   } else if (typeof p === "number") {
//     p;
//   } else {
//     p;
//   }
// }

function withNumberorString(p: { foo: string | number | boolean }) {
  //if p was an object type with property we can use same logic to
  //narrow down

  /*
  when you are narrowing a field you are narrowing a field itself you are not narrowing 
  the whole object example: here the field foo is string but p still has string|number|boolean 
  
  */
  if (typeof p.foo === "string") {
    p.foo;
  } else if (typeof p.foo === "boolean") {
    p.foo;
  } else if (typeof p.foo === "number") {
    p.foo;
  } else {
    p.foo;
  }
}
function withBooleanFoo(p: { foo: boolean }) {}
