import './App.css';

import Home from './components/Home';
import Attractions from './components/Attractions';
import Locations from './components/Locations';
import Food from './components/Food';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="attractions" element={<Attractions />} />
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
      <nav>
        <header>
                  <ul>
          <li>
            <Link className="navBar" to="/">Home</Link>
          </li>
          <li>
            <Link className="navBar" to="/attractions">Attractions</Link>
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
