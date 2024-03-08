
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./components/login'));
const Dashboard = lazy(() => import('./components/dashboard'));
const Invoice = lazy(() => import('./components/invoice'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
