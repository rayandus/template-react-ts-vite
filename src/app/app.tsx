import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './common/header';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home page here</div>} />
        <Route path="/sample" element={<div>Sample page here</div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
