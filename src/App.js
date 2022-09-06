import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import UserContent from "./components/UserContent";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <UserContent />
      </div>
    </Provider>
  );
}

export default App;
