import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchWithAuth, getUser } from '../utils/api';

export function MyPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('listings');
  const [myListings, setMyListings] = useState([]);
  const [myResponses, setMyResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = getUser();
  
  // Проверяем авторизацию
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  
  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [activeTab, user]);
  
  const loadData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'listings') {
        const response = await fetchWithAuth('/me/listings');
        const data = await response.json();
        setMyListings(data);
      } else {
        const response = await fetchWithAuth('/me/responses');
        const data = await response.json();
        setMyResponses(data);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  if (!user) {
    return null;
  }
  
  return (
    <div className="my-page">
      <div className="profile-header">
        <h1>Личный кабинет</h1>
        <div className="user-info">
          <p>
            <strong>{user.firstName} {user.lastName}</strong>
            <span className="role-badge">{user.role === 'parent' ? 'Родитель' : 'Специалист'}</span>
          </p>
          <p>@{user.username || 'без username'}</p>
        </div>
      </div>
      
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'listings' ? 'active' : ''}`}
          onClick={() => setActiveTab('listings')}
        >
          Мои объявления
        </button>
        <button
          className={`tab ${activeTab === 'responses' ? 'active' : ''}`}
          onClick={() => setActiveTab('responses')}
        >
          Мои отклики
        </button>
      </div>
      
      <div className="tab-content">
        {loading ? (
          <div className="loading">Загрузка...</div>
        ) : activeTab === 'listings' ? (
          <MyListings listings={myListings} />
        ) : (
          <MyResponses responses={myResponses} />
        )}
      </div>
      
      <style>{`
        .my-page {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .profile-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          border-radius: 8px;
          margin-bottom: 2rem;
        }
        
        .user-info {
          margin-top: 1rem;
        }
        
        .role-badge {
          background: rgba(255,255,255,0.2);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          margin-left: 1rem;
          font-size: 0.9rem;
        }
        
        .tabs {
          display: flex;
          border-bottom: 2px solid #dee2e6;
          margin-bottom: 2rem;
        }
        
        .tab {
          padding: 1rem 2rem;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          font-size: 1rem;
          cursor: pointer;
          color: #666;
          transition: all 0.2s;
        }
        
        .tab:hover {
          color: #007bff;
        }
        
        .tab.active {
          color: #007bff;
          border-bottom-color: #007bff;
          font-weight: bold;
        }
        
        .loading {
          text-align: center;
          padding: 3rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}

function MyListings({ listings }) {
  if (listings.length === 0) {
    return (
      <div className="empty-state">
        <p>У вас пока нет объявлений</p>
        <Link to="/listings/new" className="btn btn-primary">
          Создать первое объявление
        </Link>
      </div>
    );
  }
  
  return (
    <div className="listings-list">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-item">
          <div className="listing-main">
            <h3>
              <Link to={`/listings/${listing.id}`}>
                {listing.title}
              </Link>
            </h3>
            <p className="description">{listing.description.slice(0, 150)}...</p>
            <div className="meta">
              <span className={`kind ${listing.kind}`}>
                {listing.kind === 'search' ? 'Ищут' : 'Предлагают'}
              </span>
              <span className="category">{listing.category}</span>
              <span className="date">
                {new Date(listing.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
          
          <div className="responses-count">
            <span className="count">{listing.responses.length}</span>
            <span>откликов</span>
          </div>
        </div>
      ))}
      
      <style>{`
        .empty-state {
          text-align: center;
          padding: 3rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .listings-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .listing-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        
        .listing-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 5px rgba(0,0,0,0.15);
        }
        
        .listing-main {
          flex: 1;
        }
        
        .listing-main h3 {
          margin: 0 0 0.5rem 0;
        }
        
        .listing-main h3 a {
          color: #333;
          text-decoration: none;
        }
        
        .listing-main h3 a:hover {
          color: #007bff;
        }
        
        .description {
          color: #666;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        
        .meta {
          display: flex;
          gap: 1rem;
          font-size: 0.9rem;
        }
        
        .kind {
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-weight: bold;
        }
        
        .kind.search {
          background: #d4edda;
          color: #155724;
        }
        
        .kind.offer {
          background: #d1ecf1;
          color: #0c5460;
        }
        
        .category {
          color: #666;
        }
        
        .date {
          color: #999;
        }
        
        .responses-count {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }
        
        .count {
          font-size: 1.5rem;
          font-weight: bold;
          color: #007bff;
        }
      `}</style>
    </div>
  );
}

function MyResponses({ responses }) {
  if (responses.length === 0) {
    return (
      <div className="empty-state">
        <p>У вас пока нет откликов</p>
        <p>Найдите интересные объявления и отправьте отклик!</p>
      </div>
    );
  }
  
  return (
    <div className="responses-list">
      {responses.map((response) => (
        <div key={response.id} className="response-item">
          <div className="response-header">
            <h3>
              <Link to={`/listings/${response.listing.id}`}>
                {response.listing.title}
              </Link>
            </h3>
            <span className="date">
              {new Date(response.createdAt).toLocaleDateString()}
            </span>
          </div>
          
          <div className="response-content">
            <p className="message">{response.message || 'Без сообщения'}</p>
          </div>
          
          <div className="response-footer">
            <div className="author">
              Автор: {response.listing.owner.firstName} {response.listing.owner.lastName}
              {response.listing.owner.role === 'specialist' && ' (Специалист)'}
            </div>
          </div>
        </div>
      ))}
      
      <style>{`
        .responses-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .response-item {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .response-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .response-header h3 {
          margin: 0;
        }
        
        .response-header h3 a {
          color: #333;
          text-decoration: none;
        }
        
        .response-header h3 a:hover {
          color: #007bff;
        }
        
        .date {
          color: #999;
          font-size: 0.9rem;
        }
        
        .response-content {
          margin-bottom: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 4px;
        }
        
        .message {
          margin: 0;
          line-height: 1.4;
        }
        
        .response-footer {
          color: #666;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}