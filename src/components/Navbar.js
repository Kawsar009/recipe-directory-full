import './Navbar.css';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          Cooking Ninja
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
