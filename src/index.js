import React from "react";
import { render } from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

function createStore() {
  return makeAutoObservable({
    counter: 0,
    increment() {
      this.counter += 1;
    }
  });
}

const App = observer(({ store }) => (
  <div>
    <div>count: {store.counter}</div>
    <button onClick={() => store.increment()}>+1</button>
  </div>
));

render(
  <div>
    <App store={createStore()} />
  </div>,
  document.getElementById("root")
);
