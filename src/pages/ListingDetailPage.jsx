import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWithAuth, getUser } from '../utils/api';

export function ListingDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [respondMessage, setRespondMessage] = useState('');
  const [responding, setResponding] = useState(false);
  const user = getUser();
  
  useEffect(() => {
    loadListing();
  }, [id]);
  
  const loadListing = async () => {
    try {
      const response = await fetchWithAuth(`/listings/${id}`);
      const data = await response.json();
      setListing(data);
    } catch (error) {
      console.error('Error loading listing:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleRespond = async (e) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (!respondMessage.trim()) {
      alert('Введите сообщение для отклика');
      return;
    }
    
    try {
      setResponding(true);
      const response = await fetchWithAuth(`/listings/${id}/respond`, {
        method: 'POST',
        body: JSON.stringify({ message: respondMessage }),
      });
      
      if (response.ok) {
        alert('Отклик отправлен успешно!');
        setRespondMessage('');
        loadListing(); // Обновляем данные объявления
      } else {
        const error = await response.json();
        alert(error.error || 'Ошибка при отправке отклика');
      }
    } catch (error) {
      console.error('Error responding:', error);
      alert('Ошибка при отправке отклика');
    } finally {
      setResponding(false);
    }
  };
  
  if (loading) {
    return <div>Загрузка...</div>;
  }
  
  if (!listing) {
    return <div>Объявление не найдено</div>;
  }
  
  const isOwner = user && user.id === listing.ownerUserId;
  const canRespond = user && !isOwner;
  
  return (
    <div className="listing-detail">
      <div className="listing-header">
        <h1>{listing.title}</h1>
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
      
      <div className="listing-content">
        <div className="description">
          <h2>Описание</h2>
          <p>{listing.description}</p>
        </div>
        
        <div className="details">
          <h2>Детали</h2>
          <div className="details-grid">
            {listing.priceValue && (
              <div className="detail-item">
                <strong>Цена:</strong>
                <span>{listing.priceValue} {listing.priceUnit || 'руб.'}</span>
              </div>
            )}
            
            {listing.locationText && (
              <div className="detail-item">
                <strong>Местоположение:</strong>
                <span>{listing.locationText}</span>
              </div>
            )}
            
            <div className="detail-item">
              <strong>Автор:</strong>
              <span>
                {listing.owner.firstName} {listing.owner.lastName}
                {listing.owner.role === 'specialist' && ' (Специалист)'}
              </span>
            </div>
          </div>
        </div>
        
        {canRespond && (
          <div className="respond-section">
            <h2>Откликнуться на объявление</h2>
            <form onSubmit={handleRespond}>
              <textarea
                value={respondMessage}
                onChange={(e) => setRespondMessage(e.target.value)}
                placeholder="Напишите сообщение автору..."
                rows="4"
                required
              />
              <button 
                type="submit" 
                disabled={responding}
                className="btn btn-primary"
              >
                {responding ? 'Отправка...' : 'Отправить отклик'}
              </button>
            </form>
          </div>
        )}
        
        {isOwner && (
          <div className="owner-section">
            <h2>Ваше объявление</h2>
            <p>Вы можете просмотреть отклики в личном кабинете</p>
            <button 
              onClick={() => navigate('/my')}
              className="btn btn-secondary"
            >
              Перейти в личный кабинет
            </button>
          </div>
        )}
        
        {!user && (
          <div className="auth-required">
            <h2>Чтобы откликнуться, нужно войти</h2>
            <button 
              onClick={() => navigate('/login')}
              className="btn btn-primary"
            >
              Войти через Telegram
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        .listing-detail {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .listing-header {
          margin-bottom: 2rem;
        }
        
        .listing-header h1 {
          margin: 0 0 1rem 0;
          font-size: 2rem;
        }
        
        .meta {
          display: flex;
          gap: 1rem;
          align-items: center;
          color: #666;
        }
        
        .kind {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
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
          background: #e9ecef;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
        }
        
        .listing-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .listing-content h2 {
          margin-top: 0;
          margin-bottom: 1rem;
        }
        
        .description {
          margin-bottom: 2rem;
        }
        
        .description p {
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        .details {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1rem;
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
        }
        
        .detail-item strong {
          margin-bottom: 0.25rem;
          color: #666;
        }
        
        .respond-section,
        .owner-section,
        .auth-required {
          margin-top: 2rem;
          padding: 1.5rem;
          border-radius: 8px;
        }
        
        .respond-section {
          background: #e7f3ff;
          border: 1px solid #b3d7ff;
        }
        
        .owner-section {
          background: #e8f5e9;
          border: 1px solid #c8e6c9;
        }
        
        .auth-required {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          text-align: center;
        }
        
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-family: inherit;
          font-size: 1rem;
          margin-bottom: 1rem;
          resize: vertical;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-primary {
          background: #007bff;
          color: white;
        }
        
        .btn-primary:hover {
          background: #0056b3;
        }
        
        .btn-secondary {
          background: #6c757d;
          color: white;
        }
        
        .btn-secondary:hover {
          background: #545b62;
        }
        
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}