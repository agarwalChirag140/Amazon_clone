import thunk from "redux-thunk"

const { combineReducers, compose, applyMiddleware, createStore } = require("redux");
const { getProductReducer } = require("./Product/reducer");

const rootReducer = combineReducers({
    productStore: getProductReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
);

export const store = createStore(
    rootReducer,
    enhancer
)