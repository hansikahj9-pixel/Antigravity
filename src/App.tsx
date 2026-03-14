import { Routes, Route } from 'react-router-dom';
import PortfolioRoute from './routes/PortfolioRoute';
import AxiomeRoute from './routes/AxiomeRoute';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PortfolioRoute />} />
        <Route path="/axiome" element={<AxiomeRoute />} />
      </Routes>
      {/* Custom Cursor stays global */}
      <CustomCursor />
    </>
  );
}

export default App;
