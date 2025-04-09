import '@/components/layout/subheader/Subheader.css';
import { useLocation } from 'react-router-dom';

const SubHeader = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.includes('/movies')) return 'Popular Movies';
    if (location.pathname.includes('/series')) return 'Popular Series';
    return 'Popular Titles';
  };

  return (
    <div className="subheader">
      <h2>{getTitle()}</h2>
    </div>
  );
};

export default SubHeader;
