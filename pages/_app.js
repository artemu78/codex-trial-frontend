import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import rootReducer from "../store/reducers";
import { watchCars } from "../store/reducers/cars/saga";

export default function App({ Component, pageProps }) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  function* rootSaga() {
    yield all([fork(watchCars)]);
  }
  sagaMiddleware.run(watchCars);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
