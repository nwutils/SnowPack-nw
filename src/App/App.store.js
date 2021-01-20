import { store } from "@risingstack/react-easy-state";

/** les store name space */
export const App_store = store({
  /** App is buzy */
  _buzy: true,
  P: 8,
  /** les data accesible et sauvegarder */
  DATA: {},
});
console.log(`🚀 | App_store`, App_store);
