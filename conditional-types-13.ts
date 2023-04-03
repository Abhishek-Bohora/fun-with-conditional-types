export {};

type Ret<K> = K extends "string" ? string : number;

type R1 = Ret<"string">;
type R2 = Ret<"number">;

function getSampleData<K extends "string" | "number">(value: K): Ret<K> {
  return (value === "string" ? "Test-data" : 0) as Ret<K>;
}

getSampleData("string");
getSampleData("number");

//Anatomy of Conditional Types

//type X = TestedType extends PotentialBaseType ? TypeIfTrue : TypeIfFalse
// Similar syntax to conditional operator cond? tValue:fValue
// TestedType - Any type we want to test
//extends - no other operator is possible
//PotentialBaseType - Any type we think might be base type
// TypeIfTrue result if TestedType extends PotentialBaseType

//Q.How can we get the properties of a specific type from a give type
type Book = {
  Pages: number;
  fontSize: number;
  name: string;
  author: string;
};

//should result in:  type StringKeys = "name"|"author"
//  => We can use Mapped and conditional types

// function getKeys<K extends keyof Book>(value: K):Book[K]{
//     return (value === "string")
// }

/******** */
//key-filtering

type R = {
  [K in keyof Book]: Book[K] extends string ? K : never;
}[keyof Book];

// generic form
type FilterKeys<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

type A = FilterKeys<Book, string>;
type B = FilterKeys<Book, number>;
