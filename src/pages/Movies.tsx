import MediaCard from '@/components//mediaCard';
import '@/App.css';
import { useMediaEntries } from '@/hooks/useMediaEntries';

const Movies = () => {
  const { entries, loading, error } = useMediaEntries('movie');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies.</p>;

  return (
    <div className="media-grid">
      {entries.map((item) => (
        <MediaCard
          key={item.title}
          title={item.title}
          imageUrl={item.images['Poster Art'].url}
        />
      ))}
    </div>
  );
};

export default Movies;
