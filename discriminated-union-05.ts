export {};
type Doctor = {
  type: "d";
  name: string;
  speciality: string;
};

type Engineer = {
  type: number;
  name: string;
  field: string;
};

type Artist = {
  type: boolean;
  name: string;
  field: string;
};

function printPerson(p: Doctor | Engineer | Artist) {
  if (p.type === "d") {
    p;
  } else {
    if (typeof p.type === "number") {
      p;
      // little bit skeptical it narrows down to Engineer neither of the type fields is literal types
      //it narrows down to p:Engineer eventhough the type field is not literal types i was expecting
      // p: Engineer|Artist and only field to be narrowed down not the whole object
    }
  }
}
