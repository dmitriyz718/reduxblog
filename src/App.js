import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div div className="App">
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
