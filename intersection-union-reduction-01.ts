type LooseBoolean = "yes" | "no" | 0 | 1;

type StringValues = LooseBoolean & string;
type NumberValues = LooseBoolean & number;

//filtering out objects from discriminated union
type Person =
  | {
      type: "d";
      name: "";
      age: "";
      speciality: "";
    }
  | { type: "e"; name: ""; age: ""; field: "" };

type Doctor = Person & { type: "d" };

//we want to take any hex value as string input and autocomplete on red and blue
function takeColor(s: (string & {}) | "red" | "blue") {}
takeColor("");
