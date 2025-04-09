import { render, waitFor, screen } from '@testing-library/react';
import Movies from '@/pages/Movies';
import { MediaEntry } from '@/types/types';

const mockData: {entries: MediaEntry[]} = {
    entries: [
      {
        title: 'Mock Movie',
        programType: 'movie',
        releaseYear: 2015,
        description: 'Description movies',
        images: {
          'Poster Art': {
            url: 'https://mockurl.com/movie.jpg',
            width: 1000, 
            height: 1500,
          },
        },
      },
    ],
  };
  

describe('Movies page', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('displays loading initially', () => {
    render(<Movies />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders movies after successful fetch', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    } as Response);

    render(<Movies />);

    await waitFor(() => {
      expect(screen.getByText('Mock Movie')).toBeInTheDocument();
    });
  });

  test('shows error message on fetch failure', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('API down'));

    render(<Movies />);

    await waitFor(() => {
      expect(screen.getByText(/error loading/i)).toBeInTheDocument();
    });
  });
});
