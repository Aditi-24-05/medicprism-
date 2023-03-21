import React from "react";
import Navbar from "./components/navbar/Navbar"
import Login from './components/navbar/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div>            
        <Routes>
          <Route path="/login">
            <login />
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}
export default App;
