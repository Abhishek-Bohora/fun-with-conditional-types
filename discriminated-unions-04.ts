export {};

type Doctor = { type: "d"; name: string; speciality: string };
type Engineer = { type: "e"; name: string; field: string };

let doctor: Doctor = { type: "d", name: "john", speciality: "", field: "" };
let engineer: Engineer = { type: "e", name: "john", speciality: "", field: "" };

let person: Doctor | Engineer = {
  type: "e",
  name: "john",
  speciality: "",
  field: "",
  //if we give type "e" than it will give error in the speciality because speciality is not present in the type Engineer
};

function printPerson(p: Doctor | Engineer) {
  if (p.type === "d") {
    p;
    withDoctor(p);
    /*
        if we have a discriminated union it will narrow the whole object itself it doesn't narrow just the fields 
    */
  }

  //using switch
  switch (p.type) {
    case "d":
      p;
      break; //doctor
    case "e":
      p;
      break; //engineer
    default:
      p; //never
  }
}

function withDoctor(p: Doctor) {}
