import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/series">Browse Series</Link>
      <br />
      <Link to="/movies">Browse Movies</Link>
    </div>
  );
};

export default Home;