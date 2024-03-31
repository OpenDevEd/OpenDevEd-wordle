export type myBoolean = "inPlace" | "Exists" | "NotExists" | "Nothing";

export interface word {
  str?: string;
  condition?: myBoolean[];
}
