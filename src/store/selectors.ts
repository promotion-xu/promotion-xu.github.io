import * as rawSelectors from "./_selectors";
import store from "./";

type RawSelectors = typeof rawSelectors;
type Selectors = {
  [Key in keyof RawSelectors]: (
    ...args: any[]
  ) => ReturnType<RawSelectors[Key]>;
};

export const selectors = Object.keys(rawSelectors).reduce((acc, key) => {
  const selector = (rawSelectors as any)[key];
  acc[key] = (...args: any[]) => selector(store.getState(), ...args);
  return acc;
}, {} as any) as Selectors;
