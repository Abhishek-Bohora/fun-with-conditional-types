export {};

type Person = { name: string; age: number };
type personKeys = keyof Person;

let person: personKeys = "name"; //this is getting the key name, age
//keyof always act on type

/*  *****************************   */
//to get the type of a vairable use typeof operator
//typeof operator acts on a variable
let env = {
  //"SERVER": "url" and this SERVER: "url" it's a same thing
  SERVER: "url",
  port: 8080,
};

type Env = typeof env;
