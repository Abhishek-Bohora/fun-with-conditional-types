export {};

type Book = {
  name: string;
  fontSize: number;
  author: string;
  pages: number;
};

type PB = Book["pages"]; //getting the type of the specific property (index types)

//Anatomy of Indexed types
//T[K]
// where T can be any type or type expression ex: Book , typeof env
// K can be any valid type expression that can index T  "name" for Book  number for arrays
//The indexing operation distributes over K if K is a union
//      T[k1 | K2 | K3.....Kn]
//      T[K1] | T[K2] | T[K3] .....T[Kn]

//
//Q. How can we get a type of all property values in an object ?
// type Book = {
//     name: string;
//     fontSize: number
//     author: string
//     pages: number;
//   };

//type R = ValueOf<Book> //number | string

//      =>use Indexed types

type TP = Book[keyof Book]; //gives us the unions of all types of the properties from Book object

//generic form
type valueOf<T> = T[keyof T];
type R = valueOf<Book>;
