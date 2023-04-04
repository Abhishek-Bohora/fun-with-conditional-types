//Q. How can we extract or exclude a constituents of a union that extend a specific type:
type Shape =
  | {
      radius: number;
      color: string;
    }
  | {
      height: number;
      color: string;
    }
  | {
      height: number;
      fill: string;
    };

//should result in type FilledShapes = { height: number; fill: string };

//      => We can use the predefined conditional types Extract and Exclude

type FilledShapes = Extract<Shape, { fill: any }>;

// Extract and Exclude example:
type LooseBoolean = "yes" | "no" | 0 | 1;
type S = Exclude<LooseBoolean, string>;
type N = Extract<LooseBoolean, number>;

//The distributive property of conditional types
//type OwnExtract<T, V> = T extends V ? T : never;
//Conditional type distribute over naked type parameters
//      if the condition is directly on a type parameter (ex: T extends ....)
//      and the type parameter is a union
//      then the conditional is applied to each union constituent
// Extract<"yes" | "no" | 0 | 1, string> = T extends V ? T : never
// (0 extends string ? 0:  never) |
// (1 extends string ? 1:  never) |
// ("yes" extends string ? "yes":  never) |
// ("no" extends string ? "no":  never) |

//      "yes"|"no"|never|never
//      "yes"|"no"
