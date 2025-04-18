import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Series from '@/pages/Series';
import Movies from '@/pages/Movies';
import Layout from '@/components/layout/Layout.js';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
