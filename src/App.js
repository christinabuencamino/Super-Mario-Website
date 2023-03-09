import './App.css';

import Home from './components/Home';
import Locations from './components/Locations';
import Activities from './components/Activities';
import Food from './components/Food';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="activities" element={<Activities />} />
            <Route path="locations" element={<Locations />} />
            <Route path="food" element={<Food />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav id="nav">
        <header>
          <ul>
          <li>
            <Link className="navBar" to="/">Home</Link>
          </li>
          <li>
            <Link className="navBar" to="/activities">Activities</Link>
          </li>
          <li>
          <Link className="navBar" to="/"><img id="navBar-logo" src={require("./components/images/star.gif")} alt="star"></img></Link>
          </li>
          <li>
            <Link className="navBar" to="/locations">Locations</Link>
          </li>
          <li>
            <Link className="navBar" to="/food">Food</Link>
          </li>
        </ul>
        </header>
      </nav>

      <Outlet />
      </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
