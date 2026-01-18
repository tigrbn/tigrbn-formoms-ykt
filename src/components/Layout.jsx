import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser, logout } from '../utils/api';
import '../styles/global.css';

export function Layout() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);
  
  const handleLogout = () => {
    logout();
    setUser(null);
    navigate('/');
  };
  
  return (
    <div className="app">
      {/* Декоративные элементы */}
      <div className="decorations">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
      
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-icon">👶</span>
              <span className="logo-text">
                <span className="logo-main">Для Мам</span>
                <span className="logo-sub">помощь рядом</span>
              </span>
            </Link>
            
            <nav className="nav">
              <Link to="/" className="nav-link">
                <span className="icon">🏠</span>
                Главная
              </Link>
              
              {user ? (
                <>
                  <Link to="/listings/new" className="nav-link create-btn">
                    <span className="icon">✨</span>
                    Создать объявление
                  </Link>
                  
                  <div className="user-menu">
                    <Link to="/my" className="nav-link user-link">
                      <span className="icon">👤</span>
                      <span className="user-name">{user.firstName}</span>
                      <span className={`user-role-badge ${user.role}`}>
                        {user.role === 'parent' ? 'Мама' : 'Специалист'}
                      </span>
                    </Link>
                    
                    <button onClick={handleLogout} className="logout-btn">
                      <span className="icon">🚪</span>
                    </button>
                  </div>
                </>
              ) : (
                <Link to="/login" className="nav-link login-btn">
                  <span className="icon">🔑</span>
                  Войти
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
      
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Для Мам</h3>
              <p>Платформа, созданная с заботой о мамах и их детях</p>
            </div>
            <div className="footer-section">
              <p>© {new Date().getFullYear()} Для Мам</p>
              <p>Все права защищены с ❤️</p>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow-x: hidden;
        }
        
        .decorations {
          position: fixed;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
        }
        
        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%);
        }
        
        .circle-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          left: -100px;
          opacity: 0.3;
        }
        
        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          right: -50px;
          opacity: 0.2;
          background: radial-gradient(circle, var(--color-secondary-light) 0%, transparent 70%);
        }
        
        .circle-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 20%;
          opacity: 0.15;
        }
        
        .header {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          padding: 1rem 0;
          box-shadow: var(--shadow-medium);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.9);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--color-text);
          transition: var(--transition-medium);
        }
        
        .logo:hover {
          transform: translateY(-2px);
        }
        
        .logo-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        
        .logo-main {
          font-size: 1.8rem;
          font-weight: bold;
          background: linear-gradient(135deg, #FF6B8B 0%, #87CEEB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: var(--font-cursive);
        }
        
        .logo-sub {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin-top: -5px;
        }
        
        .nav {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          padding: 0.7rem 1.2rem;
          border-radius: var(--radius-medium);
          text-decoration: none;
          color: var(--color-text);
          font-weight: 500;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid transparent;
          transition: all var(--transition-medium);
        }
        
        .nav-link:hover {
          background: white;
          border-color: var(--color-primary);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }
        
        .nav-link:active {
          transform: translateY(-1px);
        }
        
        .create-btn {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
          color: white;
          font-weight: bold;
        }
        
        .create-btn:hover {
          background: linear-gradient(135deg, #FF8FA3 0%, #FFE44D 100%);
        }
        
        .login-btn {
          background: var(--color-success);
          color: var(--color-text);
        }
        
        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .user-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .user-name {
          font-weight: 600;
          color: var(--color-text);
        }
        
        .user-role-badge {
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-circle);
          font-size: 0.8rem;
          font-weight: bold;
          margin-left: 0.5rem;
        }
        
        .user-role-badge.parent {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        
        .user-role-badge.specialist {
          background: var(--color-secondary-light);
          color: var(--color-secondary);
        }
        
        .logout-btn {
          background: var(--color-danger);
          color: white;
          border: none;
          padding: 0.7rem;
          border-radius: var(--radius-medium);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-medium);
        }
        
        .logout-btn:hover {
          background: #FF9999;
          transform: rotate(15deg);
        }
        
        .main {
          flex: 1;
          padding: 2rem 0;
        }
        
        .footer {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
          padding: 2rem 0;
          margin-top: auto;
          border-top: 3px solid var(--color-border);
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        
        .footer-section h3 {
          font-family: var(--font-cursive);
          font-size: 1.8rem;
          color: var(--color-primary);
          margin-bottom: 0.5rem;
        }
        
        .footer-section p {
          color: var(--color-text-light);
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
          }
          
          .nav {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .logo-text {
            text-align: center;
          }
          
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}