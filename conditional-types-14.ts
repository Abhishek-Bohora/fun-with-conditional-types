export {};
type Book = {
  Pages: number;
  fontSize?: number;
  name: string;
  author: string;
};

type R1 = {
  [K in keyof Book]-?: Book[K] extends string ? K : never;
}[keyof Book]; //[keyof Book] gives us the union of Book type and it removes the never

//R1 generic form
type filterType<K, V> = {
  [P in keyof K]-?: K[P] extends V ? P : never;
  //if we have the optional paramater like this in fontSize? we get the type undefined so to remove the undefined and to
  //return never instead of undefined we can do -?

  //we get undefined because --i will write reason later
}[keyof K];

type R2 = filterType<Book, string>;
type R3 = filterType<Book, number>;

//another way of filtering. It is doing the same thing in type R1
type R4 = keyof {
  [K in keyof Book as Book[K] extends string ? K : never]-?: any;
  //we are mapping left(K) to right(K) if Book[K] extends string
};

//R4 generic form
type R5<T, V> = keyof {
  [K in keyof T as T[K] extends V ? K : never]-?: T[K];
};

type R6 = R5<Book, string>;
type R7 = R5<Book, number>;

// Mapped Type with as clause
//[P in K as C]:U
// P will take the values in K
// C will be used as the key of the final type. Not P
//        C can be any type that depends on P
//        C must be valid key for a type:(a subtype of number,string or symbol) or never
//        if C is never that property will be removed from the result
//        Usually a C will be a conditional type
