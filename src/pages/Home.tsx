import { Link } from 'react-router-dom';
import seriesThumbnail from '@/assets/series.png';
import moviesThumbnail from '@/assets/movies.png';
import '@/App.css';
const Home = () => {
  return (
    <>
      <div className="media-grid">
        <Link to="/series" className="media-card">
          <img src={seriesThumbnail} alt="series" />
          <p>Popular Series</p>
        </Link>
        <Link to="/movies" className="media-card">
          <img src={moviesThumbnail} alt="Movies" />
          <p>Popular Movies</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
