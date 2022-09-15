import type { IState } from ".";

export function theme(state: IState) {
  return state.appStoreReducer.theme;
}
