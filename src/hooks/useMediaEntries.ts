import { useEffect, useState } from 'react';
import { MediaEntry } from '@/types/types';

export function useMediaEntries(type: 'movie' | 'series') {
  const [entries, setEntries] = useState<MediaEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'feed/sample.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.entries
          .filter((entry: MediaEntry) => entry.programType === type && entry.releaseYear >= 2010)
          .sort((a: MediaEntry, b: MediaEntry) => a.title.localeCompare(b.title))
          .slice(0, 21);
        setEntries(filtered);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [type]);

  return { entries, loading, error };
}
