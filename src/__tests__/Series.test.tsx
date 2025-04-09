import { render, waitFor, screen } from '@testing-library/react';
import Series from '@/pages/Series';
import { MediaEntry } from '@/types/types';

const mockData: {entries: MediaEntry[]} = {
    entries: [
      {
        title: 'Mock Series',
        programType: 'series',
        releaseYear: 2015,
        description: 'Description Series',
        images: {
          'Poster Art': {
            url: 'https://mockurl.com/series.jpg',
            width: 1000, 
            height: 1500,
          },
        },
      },
    ],
  };

describe('Series page', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('displays loading initially', () => {
    render(<Series />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders movies after successful fetch', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockData,
    } as Response);

    render(<Series />);

    await waitFor(() => {
      expect(screen.getByText('Mock Series')).toBeInTheDocument();
    });
  });

  test('shows error message on fetch failure', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('API down'));

    render(<Series />);

    await waitFor(() => {
      expect(screen.getByText(/error loading/i)).toBeInTheDocument();
    });
  });
});
