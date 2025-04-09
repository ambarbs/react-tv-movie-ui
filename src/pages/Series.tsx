import MediaCard from '@/components//mediaCard';
import '@/App.css';
import { useMediaEntries } from '@/hooks/useMediaEntries';

const Series = () => {
  const { entries, loading, error } = useMediaEntries('series');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading series.</p>;

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

export default Series;
