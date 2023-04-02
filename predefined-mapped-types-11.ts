//partial - Creates a types with the same properties but with all properties optional.
//Record - Creates a type with a given set of properties all of the same type.
//Readonly - Creates a type with the same properties but with all properties readonly.
//Required - Creates a type with the same properties but with all properties required.
//Pick - Picks a set of properties from the given type (Pick will preserve the original type).

//Q. How can we create a type with return type of all functions in another type
// type EnvGetters = {
//   SERVER: () => string;
//   PORT: () => number;
// };

//we need to create this type
// type Env = {
//   SERVER: string;
//   PORT: number;
// };
//      =>use a custom mapped type in conjuction with the conditional type ReturnType

type EnvGetters = {
  SERVER: () => string;
  PORT: () => number;
};

type R = {
  [P in keyof EnvGetters]: ReturnType<EnvGetters[P]>;
};

//more generalised
type allReturnTypes<T extends { [n: string]: (...a: any) => any }> = {
  [P in keyof T]: ReturnType<T[P]>;
};

type Env = allReturnTypes<EnvGetters>;

//Basic Anatomy of a Mapped
// [P in K]:U
//      P in K take each P in K
//      K is usually a union for eg: "name" | "field" etc
//      P will be each constituent of a union for eg: "name", "field" etc
//      P is a type parameter and can be used anywhere a type would be used inside U
//          :U is the type property of P
//          U can be any type expression
//              Valid values of U: string, number, typeof env
//          U can depend on P
//              Valid values of U:P, Env[P],T[P]
