//Q. How can we make a function to get a value in an object safely

// const env = {
//   SERVER: "",
//   PORT: 7808,
// };

// let server = getValue("SERVER"); //string
// let port = getValue("PORT"); //number
// let pport = getValue("PPORT"); //error

//      => use index access types, keyof and a generic function

const env = {
  SERVER: "",
  PORT: 7808,
};

type Env = typeof env;

function getValue<K extends keyof Env>(s: K): Env[K] {
  return (env as any)[s];
}

let server = getValue("SERVER"); //string
let port = getValue("PORT"); //number
let pport = getValue("PPORT"); //error
