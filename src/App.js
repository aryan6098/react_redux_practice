import React from "react";
import HomeContainers from "./containers/HomeContainers";
import HeaderContainer from "./containers/HeaderContainer.js ";
import "./App.css";
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainers />
    </div>
  );
}
export default App;
