// styles import
import './Home.css';

// hook import
import { useFetch } from '../../hooks/useFetch';

// component import
import RecipeList from '../../components/RecipeList';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading . . .</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
