import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWithAuth, getUser } from '../utils/api';

export function HomePage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ listings: 0, users: 0 });
  const user = getUser();
  
  useEffect(() => {
    loadListings();
    loadStats();
  }, []);
  
  const loadListings = async () => {
    try {
      const response = await fetchWithAuth('/listings');
      const data = await response.json();
      setListings(data.slice(0, 6)); // Показываем только 6 последних
    } catch (error) {
      console.error('Error loading listings:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const loadStats = async () => {
    // Моковые данные для статистики
    setStats({
      listings: 42,
      users: 156
    });
  };
  
  const categories = [
    { icon: '👶', name: 'Няня', color: '#FFB6C1' },
    { icon: '📚', name: 'Репетитор', color: '#87CEEB' },
    { icon: '🎪', name: 'Аниматор', color: '#98FB98' },
    { icon: '📸', name: 'Фотограф', color: '#FFD700' },
    { icon: '🧸', name: 'Воспитатель', color: '#FFB6C1' },
    { icon: '💬', name: 'Психолог', color: '#87CEEB' },
  ];
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Загружаем лучшие предложения...</p>
      </div>
    );
  }
  
  return (
    <div className="home-page">
      {/* Герой-секция */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">Найдите помощь</span>
            <span className="hero-title-line">для вашего ребёнка</span>
            <span className="hero-subtitle">с любовью и заботой ❤️</span>
          </h1>
          
          <p className="hero-description">
            Платформа, созданная мамами для мам. Здесь вы найдёте проверенных специалистов,
            надёжных нянь и помощников, которые станут частью вашей семьи.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{stats.listings}+</span>
              <span className="stat-label">активных объявлений</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.users}+</span>
              <span className="stat-label">довольных мам</span>
            </div>
          </div>
          
          <div className="hero-actions">
            {user ? (
              <Link to="/listings/new" className="btn btn-primary btn-large">
                <span className="icon">✨</span>
                Создать объявление
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary btn-large">
                <span className="icon">👩‍👧</span>
                Присоединиться к сообществу
              </Link>
            )}
            
            <Link to="#listings" className="btn btn-secondary btn-large">
              <span className="icon">🔍</span>
              Найти помощника
            </Link>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="floating-icon">👶</div>
          <div className="floating-icon">🧸</div>
          <div className="floating-icon">📚</div>
        </div>
      </section>
      
      {/* Категории */}
      <section className="categories-section">
        <h2 className="section-title">
          <span className="section-title-icon">🎯</span>
          Найдите нужную категорию
        </h2>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="category-card"
            //   style={{ '--category-color': category.color } as React.CSSProperties}
            >
              <div className="category-icon" style={{ backgroundColor: category.color }}>
                {category.icon}
              </div>
              <h3 className="category-name">{category.name}</h3>
              <div className="category-dots">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="dot" style={{ backgroundColor: category.color }}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Лента объявлений */}
      <section className="listings-section" id="listings">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-title-icon">🌟</span>
            Свежие объявления
          </h2>
          <Link to="#" className="view-all-link">
            Все объявления <span className="arrow">→</span>
          </Link>
        </div>
        
        {listings.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">👶</div>
            <h3>Пока нет объявлений</h3>
            <p>Будьте первыми, кто создаст объявление!</p>
            {user && (
              <Link to="/listings/new" className="btn btn-primary">
                Создать первое объявление
              </Link>
            )}
          </div>
        ) : (
          <div className="listings-grid">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </section>
      
      {/* Преимущества */}
      <section className="benefits-section">
        <h2 className="section-title">
          <span className="section-title-icon">💖</span>
          Почему мамы выбирают нас
        </h2>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🔒</div>
            <h3>Безопасность</h3>
            <p>Все специалисты проходят проверку, чтобы вы могли быть спокойны</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">🤝</div>
            <h3>Доверие</h3>
            <p>Отзывы от реальных мам помогут сделать правильный выбор</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">💬</div>
            <h3>Поддержка</h3>
            <p>Мы всегда на связи и готовы помочь в любой ситуации</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">🎯</div>
            <h3>Точно в цель</h3>
            <p>Находите именно то, что нужно, благодаря умной системе поиска</p>
          </div>
        </div>
      </section>
      
      {/* CTA секция */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Готовы найти идеального помощника?</h2>
          <p className="cta-description">
            Присоединяйтесь к сообществу заботливых мам и специалистов
          </p>
          
          <div className="cta-actions">
            {user ? (
              <Link to="/listings/new" className="btn btn-primary btn-large">
                <span className="icon">🚀</span>
                Создать объявление
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary btn-large">
                <span className="icon">👩‍👧‍👦</span>
                Начать сейчас
              </Link>
            )}
          </div>
        </div>
        
        <div className="cta-decoration">
          <div className="heart-animation">❤️</div>
        </div>
      </section>
      
      <style jsx>{`
        .home-page {
          animation: fadeIn 0.8s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary-light) 100%);
          border-radius: var(--radius-large);
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-medium);
        }
        
        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 2;
        }
        
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        .hero-title-line {
          display: block;
          font-family: var(--font-cursive);
          color: var(--color-primary);
        }
        
        .hero-subtitle {
          display: block;
          font-size: 1.5rem;
          color: var(--color-text-light);
          margin-top: 0.5rem;
        }
        
        .hero-description {
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
        }
        
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--color-primary);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .hero-decoration {
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
        
        .floating-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
        }
        
        .floating-icon:nth-child(2) {
          animation-delay: 0.5s;
          margin-left: 2rem;
        }
        
        .floating-icon:nth-child(3) {
          animation-delay: 1s;
          margin-left: 1rem;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        /* Categories */
        .categories-section {
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--color-text);
        }
        
        .section-title-icon {
          font-size: 1.5em;
        }
        
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
        }
        
        .category-card {
          background: var(--color-card);
          border-radius: var(--radius-medium);
          padding: 1.5rem;
          text-align: center;
          transition: var(--transition-medium);
          border: 2px solid transparent;
          cursor: pointer;
        }
        
        .category-card:hover {
          transform: translateY(-10px);
          border-color: var(--category-color);
          box-shadow: var(--shadow-hover);
        }
        
        .category-icon {
          width: 70px;
          height: 70px;
          border-radius: var(--radius-circle);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1rem;
          transition: var(--transition-medium);
        }
        
        .category-card:hover .category-icon {
          transform: scale(1.1) rotate(10deg);
        }
        
        .category-name {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }
        
        .category-dots {
          display: flex;
          justify-content: center;
          gap: 0.3rem;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-circle);
          opacity: 0.3;
        }
        
        .category-card:hover .dot {
          opacity: 0.7;
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        
        /* Listings */
        .listings-section {
          margin-bottom: 3rem;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .view-all-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition-medium);
        }
        
        .view-all-link:hover {
          gap: 1rem;
          color: var(--color-secondary);
        }
        
        .arrow {
          transition: var(--transition-medium);
        }
        
        .view-all-link:hover .arrow {
          transform: translateX(5px);
        }
        
        .listings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .empty-state {
          text-align: center;
          padding: 3rem;
          background: var(--color-card);
          border-radius: var(--radius-medium);
          border: 2px dashed var(--color-border);
        }
        
        .empty-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        /* Benefits */
        .benefits-section {
          margin-bottom: 3rem;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .benefit-card {
          background: var(--color-card);
          padding: 2rem;
          border-radius: var(--radius-medium);
          text-align: center;
          transition: var(--transition-medium);
          border: 2px solid transparent;
        }
        
        .benefit-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-5px);
          box-shadow: var(--shadow-soft);
        }
        
        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          transition: var(--transition-medium);
        }
        
        .benefit-card:hover .benefit-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .benefit-card h3 {
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        
        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-radius: var(--radius-large);
          padding: 4rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          color: white;
        }
        
        .cta-content {
          position: relative;
          z-index: 2;
        }
        
        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .cta-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .heart-animation {
          position: absolute;
          font-size: 5rem;
          animation: heartbeat 1.5s ease-in-out infinite;
          opacity: 0.1;
        }
        
        .heart-animation:nth-child(1) {
          top: 20%;
          left: 10%;
        }
        
        .heart-animation:nth-child(2) {
          bottom: 20%;
          right: 10%;
          animation-delay: 0.5s;
        }
        
        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border-radius: var(--radius-medium);
          border: none;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition-medium);
          font-size: 1rem;
        }
        
        .btn-large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }
        
        .btn-secondary {
          background: white;
          color: var(--color-text);
          border: 2px solid var(--color-primary);
        }
        
        .btn-secondary:hover {
          background: var(--color-primary-light);
          transform: translateY(-3px);
        }
        
        /* Loading */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          gap: 1rem;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 4px solid var(--color-primary-light);
          border-top-color: var(--color-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .listings-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-decoration {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

// Компонент карточки объявления
function ListingCard({ listing }) {
  const getKindIcon = (kind) => {
    return kind === 'search' ? '🔍 Ищут' : '💼 Предлагают';
  };
  
  return (
    <Link to={`/listings/${listing.id}`} className="listing-card-link">
      <div className="listing-card">
        <div className="listing-header">
          <div className={`listing-kind ${listing.kind}`}>
            <span className="kind-icon">
              {listing.kind === 'search' ? '🔍' : '💼'}
            </span>
            {getKindIcon(listing.kind)}
          </div>
          
          {listing.priceValue && (
            <div className="listing-price">
              <span className="price-value">{listing.priceValue}</span>
              <span className="price-unit">{listing.priceUnit || 'руб.'}</span>
            </div>
          )}
        </div>
        
        <h3 className="listing-title">{listing.title}</h3>
        
        <p className="listing-description">
          {listing.description.length > 120 
            ? `${listing.description.substring(0, 120)}...` 
            : listing.description}
        </p>
        
        <div className="listing-footer">
          <div className="listing-category">
            <span className="category-icon">🏷️</span>
            {listing.category}
          </div>
          
          <div className="listing-author">
            <span className="author-icon">👤</span>
            {listing.owner?.firstName} {listing.owner?.lastName}
            {listing.owner?.role === 'specialist' && ' 👨‍🏫'}
          </div>
        </div>
        
        {listing.locationText && (
          <div className="listing-location">
            <span className="location-icon">📍</span>
            {listing.locationText}
          </div>
        )}
      </div>
      
      <style jsx>{`
        .listing-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        
        .listing-card {
          background: var(--color-card);
          border-radius: var(--radius-medium);
          padding: 1.5rem;
          height: 100%;
          transition: var(--transition-medium);
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
        }
        
        .listing-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-medium);
        }
        
        .listing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .listing-kind {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          border-radius: var(--radius-circle);
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .listing-kind.search {
          background: var(--color-success);
          color: var(--color-text);
        }
        
        .listing-kind.offer {
          background: var(--color-accent);
          color: var(--color-text);
        }
        
        .listing-price {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          font-weight: bold;
        }
        
        .price-value {
          font-size: 1.2rem;
          color: var(--color-primary);
        }
        
        .price-unit {
          font-size: 0.9rem;
          color: var(--color-text-light);
        }
        
        .listing-title {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: var(--color-text);
          line-height: 1.3;
        }
        
        .listing-description {
          color: var(--color-text-light);
          margin-bottom: 1.5rem;
          line-height: 1.5;
          flex: 1;
        }
        
        .listing-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .listing-category,
        .listing-author,
        .listing-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--color-text-light);
        }
        
        .listing-location {
          padding-top: 0.8rem;
          border-top: 1px solid var(--color-border);
        }
      `}</style>
    </Link>
  );
}