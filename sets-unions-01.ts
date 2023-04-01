//How can i represent an object that is either a Engineer or a Doctor ?
//      => Use a Union
export {};
interface Engineer {
  name: string;
  age: string;
  field: string;
}

interface Doctor {
  name: string;
  age: string;
  speciality: string;
}

function printPerson(p: Engineer | Doctor) {
  /*
    console.log(p.speciality);
    we cannot access the property that are not common between these two interfaces beacause p can only be doctor or an engineer
    this bring us to Narrowing unions
  */
  if ("speciality" in p) {
    //narrowing union
    //    in typegaurd can only be used with object union type
    //    for union of primitive type we use typeof operator
    p.speciality;
  } else {
    p.field;
  }
}

printPerson({
  name: "",
  age: "",
  field: "",
});

printPerson({
  name: "",
  age: "",
  speciality: "",
});
