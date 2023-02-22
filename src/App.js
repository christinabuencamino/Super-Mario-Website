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
          <Route path="gifts" element={<Gifts />} />
          <Route path="sites" element={<Sites />} />
          <Route path="hotels" element={<Hotels />} />
          </Route>
      </Routes>
    </div>
  );
}

function NavBar() {
  return (
    <div>
      <nav class="NavBar">
          <ul class="NavBar-ul">
            <li class="NavBar-li">
              <Link to="/">Home</Link>
            </li>
            <li class="NavBar-li">
              <Link to="/hotels">Hotels</Link>
            </li>
            <li class="NavBar-li">
              <Link to="/gifts">Gifts</Link>
            </li>
            <li class="NavBar-li">
              <Link to="/sites">Sites</Link>
            </li>
          </ul>
        </nav>
      <Outlet />
      </div>
  );
}