import './App.css';

import Gifts from './components/Gifts';
import Home from './components/Home';
import Hotels from './components/Hotels';
import Sites from './components/Sites';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="sites" element={<Sites />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="hotels" element={<Hotels />} />
          </Route>
      </Routes>
    </div>
  );
}

function NavBar() {
  return (
    <div>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/sites">Sites</Link>
          </li>
          <li>
            <Link to="/gifts">Gifts</Link>
          </li>
        </ul>
      </nav>
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      </div>
  );
}