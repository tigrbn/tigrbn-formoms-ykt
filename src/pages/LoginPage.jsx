import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { devLogin, initTelegramAuth, getUser } from '../utils/api';

export function LoginPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const isRealTelegram = window.Telegram?.WebApp?.initData;
    
    if (isRealTelegram) {
      handleTelegramLogin();
    } else {
      setLoading(false);
      
      const user = getUser();
      if (user) {
        navigate('/');
      }
    }
  }, []);
  
  const handleTelegramLogin = async () => {
    try {
      setLoading(true);
      const user = await initTelegramAuth();
      
      if (user) {
        navigate('/');
      } else {
        setError('Telegram авторизация не сработала. Используйте DEV-вход.');
        setLoading(false);
      }
    } catch (err) {
      setError('Ошибка авторизации через Telegram');
      setLoading(false);
    }
  };
  
  const handleDevLogin = async (role) => {
    try {
      setLoading(true);
      setError('');
      await devLogin(role);
      navigate('/');
    } catch (err) {
      setError('Ошибка DEV авторизации');
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="login-loading">
        <div className="loading-hearts">
          <span>❤️</span>
          <span>💖</span>
          <span>💕</span>
        </div>
        <p>Подключаемся...</p>
      </div>
    );
  }
  
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Декоративные элементы */}
        <div className="login-decoration">
          <div className="decoration-item item-1">👶</div>
          <div className="decoration-item item-2">🧸</div>
          <div className="decoration-item item-3">📚</div>
        </div>
        
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span className="logo-icon">👶</span>
              <h1>Для Мам</h1>
            </div>
            <p className="login-subtitle">Сообщество заботливых родителей</p>
          </div>
          
          <div className="login-content">
            <h2 className="login-title">Добро пожаловать!</h2>
            
            {window.Telegram?.WebApp ? (
              <div className="telegram-login-section">
                <div className="telegram-icon">📱</div>
                <p className="login-message">Вы открыли приложение в Telegram</p>
                
                <button 
                  onClick={handleTelegramLogin}
                  className="btn btn-telegram"
                >
                  <span className="btn-icon">🔗</span>
                  Войти через Telegram
                </button>
                
                <div className="login-divider">
                  <span>или</span>
                </div>
                
                <p className="dev-message">Используйте DEV-вход для тестирования:</p>
              </div>
            ) : (
              <div className="browser-login-section">
                <div className="browser-icon">🌐</div>
                <p className="login-message">
                  Вы открыли приложение в браузере.<br />
                  Доступен только DEV-вход для разработки:
                </p>
              </div>
            )}
            
            {error && (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                {error}
              </div>
            )}
            
            <div className="dev-login-buttons">
              <button 
                onClick={() => handleDevLogin('parent')}
                className="btn btn-parent"
              >
                <span className="btn-icon">👩‍👧</span>
                <div className="btn-content">
                  <span className="btn-title">Я - Мама</span>
                  <span className="btn-subtitle">Ищу помощь для ребёнка</span>
                </div>
                <span className="btn-arrow">→</span>
              </button>
              
              <button 
                onClick={() => handleDevLogin('specialist')}
                className="btn btn-specialist"
              >
                <span className="btn-icon">👨‍🏫</span>
                <div className="btn-content">
                  <span className="btn-title">Я - Специалист</span>
                  <span className="btn-subtitle">Предлагаю свои услуги</span>
                </div>
                <span className="btn-arrow">→</span>
              </button>
            </div>
            
            <div className="login-note">
              <p className="note-icon">💡</p>
              <p>
                <strong>Примечание:</strong> В реальном приложении вход возможен только через Telegram WebApp.
                DEV-вход работает только в режиме разработки.
              </p>
            </div>
            
            <div className="login-features">
              <div className="feature">
                <span className="feature-icon">🔒</span>
                <span>Безопасно</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🤝</span>
                <span>Надёжно</span>
              </div>
              <div className="feature">
                <span className="feature-icon">❤️</span>
                <span>С заботой</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
        }
        
        .login-loading {
          text-align: center;
        }
        
        .loading-hearts {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .loading-hearts span {
          display: inline-block;
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        .loading-hearts span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .loading-hearts span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        .login-container {
          position: relative;
          width: 100%;
          max-width: 500px;
        }
        
        .login-decoration {
          position: absolute;
          top: -50px;
          right: -50px;
          bottom: -50px;
          left: -50px;
          pointer-events: none;
          z-index: 1;
        }
        
        .decoration-item {
          position: absolute;
          font-size: 3rem;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        .item-1 {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }
        
        .item-2 {
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }
        
        .item-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }
        
        .login-card {
          background: var(--color-card);
          border-radius: var(--radius-large);
          padding: 3rem;
          box-shadow: var(--shadow-medium);
          position: relative;
          z-index: 2;
          border: 3px solid var(--color-primary-light);
        }
        
        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .login-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .logo-icon {
          font-size: 3rem;
        }
        
        .login-logo h1 {
          font-size: 2.5rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: var(--font-cursive);
        }
        
        .login-subtitle {
          color: var(--color-text-light);
          font-size: 1.1rem;
        }
        
        .login-content {
          text-align: center;
        }
        
        .login-title {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: var(--color-text);
        }
        
        .telegram-login-section,
        .browser-login-section {
          margin-bottom: 2rem;
        }
        
        .telegram-icon,
        .browser-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }
        
        .login-message {
          color: var(--color-text);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .dev-message {
          color: var(--color-text-light);
          margin: 1.5rem 0;
          font-size: 0.9rem;
        }
        
        .login-divider {
          display: flex;
          align-items: center;
          margin: 1.5rem 0;
          color: var(--color-text-light);
        }
        
        .login-divider::before,
        .login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }
        
        .login-divider span {
          padding: 0 1rem;
        }
        
        .error-message {
          background: var(--color-danger);
          color: var(--color-text);
          padding: 1rem;
          border-radius: var(--radius-small);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          animation: shake 0.5s ease;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .dev-login-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .btn {
          display: flex;
          align-items: center;
          padding: 1.2rem 1.5rem;
          border-radius: var(--radius-medium);
          border: none;
          cursor: pointer;
          transition: var(--transition-medium);
          font-size: 1rem;
          width: 100%;
          text-align: left;
        }
        
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }
        
        .btn:active {
          transform: translateY(-1px);
        }
        
        .btn-telegram {
          background: linear-gradient(135deg, #0088cc 0%, #34b7f1 100%);
          color: white;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 600;
        }
        
        .btn-parent {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, white 100%);
          border: 2px solid var(--color-primary);
          color: var(--color-text);
        }
        
        .btn-specialist {
          background: linear-gradient(135deg, var(--color-secondary-light) 0%, white 100%);
          border: 2px solid var(--color-secondary);
          color: var(--color-text);
        }
        
        .btn-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .btn-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        
        .btn-title {
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }
        
        .btn-subtitle {
          font-size: 0.9rem;
          opacity: 0.7;
        }
        
        .btn-arrow {
          font-size: 1.2rem;
          transition: var(--transition-medium);
        }
        
        .btn:hover .btn-arrow {
          transform: translateX(5px);
        }
        
        .login-note {
          background: var(--color-primary-light);
          padding: 1rem;
          border-radius: var(--radius-small);
          margin-bottom: 1.5rem;
          text-align: left;
        }
        
        .note-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .login-note p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--color-text);
        }
        
        .login-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        
        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-light);
        }
        
        .feature-icon {
          font-size: 1.5rem;
        }
        
        @media (max-width: 600px) {
          .login-card {
            padding: 2rem;
          }
          
          .login-logo {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .login-features {
            flex-direction: column;
            gap: 1rem;
          }
          
          .decoration-item {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}