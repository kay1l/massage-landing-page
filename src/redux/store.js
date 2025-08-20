import { createStore } from "redux";
import rootReducer from "./reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

const store = createStore(rootReducer, composeEnhancers);

export default store;
