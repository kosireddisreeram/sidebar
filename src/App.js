/* eslint-disable no-unused-vars */
import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <Router>
        <SideMenu/>
      <div className={`container ${inactive ? "inactive" : ""}`}>
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              </>
          ))}
       </div>
      </Router>
    </div>
  );
}
export default App;