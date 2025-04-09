import { useEffect, useState } from 'react';
import { MediaEntry } from '../types/types';
import MediaCard from '@/components//mediaCard';
import '../App.css';

const Movies = () => {
  const [entries, setEntries] = useState<MediaEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'feed/sample.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.entries
          .filter((entry: MediaEntry) => entry.programType === 'movie' && entry.releaseYear >= 2010)
          .sort((a: MediaEntry, b: MediaEntry) => a.title.localeCompare(b.title))
          .slice(0, 21);

        setEntries(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

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

export default Movies;
