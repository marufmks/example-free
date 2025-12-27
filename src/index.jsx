import { createRoot } from '@wordpress/element';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import FreeSettings from './components/FreeSettings.jsx';
import Dashboard from './components/Dashboard.jsx';

function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'nav-tab nav-tab-active' : 'nav-tab';
  };

  return (
    <nav className="nav-tab-wrapper">
      <Link to="/" className={isActive('/')}>
        Dashboard
      </Link>
      <Link to="/settings" className={isActive('/settings')}>
        Settings
      </Link>
    </nav>
  );
}

function FreeApp() {
  return (
    <Router>
      <div className="wrap">
        <h1>Example Plugin – Free Edition</h1>
        
        <Navigation />
        
        <div style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<FreeSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

createRoot(
  document.getElementById('example-admin-root')
).render(<FreeApp />);