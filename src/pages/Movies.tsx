import { useEffect, useState } from 'react';
import { MediaEntry } from '../types/types';

const Movies = () => {
  const [entries, setEntries] = useState<MediaEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/feed/sample.json')
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
    <div>
      <h1>Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {entries.map((entry) => (
          <div key={entry.title} style={{ width: 150 }}>
            <img
              src={entry.images['Poster Art'].url}
              alt={entry.title}
              style={{ width: '100%' }}
            />
            <p>{entry.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
