type EnvGetters = {
  SERVER?: () => string;
  PORT: () => number;
};

type K = keyof EnvGetters;
type Env = {
  [P in K]: ReturnType<NonNullable<EnvGetters[P]>>; //doing this instead of [P in keyof EnvGetters] doesn't preserve the
  //   modifiers because Env is no longer homomorphic mapped type and it does't mapped over keyof type
};

//Homomorphic mapped types
// [P in keyof T]:U
//type G<K extends keyof T> = [P in K]: U

//Homomorphic mapped types preserves structure
//The type use in the in clause is:
//      Keyof T - The modifiers of T are preserved
//      a type parameter that extends keyof T - The modifiers of T are preserved
