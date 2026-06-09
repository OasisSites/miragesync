import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import DashboardFrame from './components/DashboardFrame';

function useAuth() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('mirage_auth') === '1');
  const login = () => setAuthed(true);
  const logout = () => { sessionStorage.removeItem('mirage_auth'); setAuthed(false); };
  return { authed, login, logout };
}

const DASHBOARDS = [
  { path: '/command-center', src: '/dashboards/command-center.html', title: 'Command Center' },
  { path: '/ar-billing',     src: '/dashboards/ar-billing.html',     title: 'A/R & Billing' },
  { path: '/orders',         src: '/dashboards/orders.html',         title: 'Orders & Purchasing' },
  { path: '/profitability',  src: '/dashboards/profitability.html',  title: 'Profitability' },
  { path: '/tech-field',     src: '/dashboards/tech-field.html',     title: 'Tech Field' },
  { path: '/sales-pipeline', src: '/dashboards/sales-pipeline.html', title: 'Sales Pipeline' },
];

export default function App() {
  const { authed, login, logout } = useAuth();

  if (!authed) {
    return <Login onSuccess={login} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home onLogout={logout} />} />
        {DASHBOARDS.map(d => (
          <Route
            key={d.path}
            path={d.path}
            element={<DashboardFrame src={d.src} title={d.title} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
