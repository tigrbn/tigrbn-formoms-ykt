import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchWithAuth, getUser } from '../utils/api';

const CATEGORIES = [
  'Няня',
  'Репетитор',
  'Аниматор',
  'Фотограф',
  'Воспитатель',
  'Психолог',
  'Логопед',
  'Врач',
  'Другое'
];

export function CreateListingPage() {
  const navigate = useNavigate();
  const user = getUser();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    kind: 'search',
    category: '',
    title: '',
    description: '',
    priceValue: '',
    priceUnit: 'руб.',
    locationText: ''
  });
  
  // Проверяем авторизацию
  if (!user) {
    navigate('/login');
    return null;
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.category || !formData.title || !formData.description) {
      alert('Заполните обязательные поля: категория, заголовок и описание');
      return;
    }
    
    try {
      setLoading(true);
      
      const response = await fetchWithAuth('/listings', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          priceValue: formData.priceValue ? parseInt(formData.priceValue) : null
        }),
      });
      
      if (response.ok) {
        const listing = await response.json();
        navigate(`/listings/${listing.id}`);
      } else {
        const error = await response.json();
        alert(error.error || 'Ошибка при создании объявления');
      }
    } catch (error) {
      console.error('Error creating listing:', error);
      alert('Ошибка при создании объявления');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="create-listing">
      <h1>Создать объявление</h1>
      
      <form onSubmit={handleSubmit} className="listing-form">
        <div className="form-group">
          <label>Тип объявления *</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="kind"
                value="search"
                checked={formData.kind === 'search'}
                onChange={handleChange}
              />
              <span>Ищу (нужен специалист)</span>
            </label>
            
            <label className="radio-label">
              <input
                type="radio"
                name="kind"
                value="offer"
                checked={formData.kind === 'offer'}
                onChange={handleChange}
              />
              <span>Предлагаю (я специалист)</span>
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label>Категория *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Выберите категорию</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Заголовок *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Например: Ищу няню для ребёнка 3 лет"
            required
            maxLength={100}
          />
        </div>
        
        <div className="form-group">
          <label>Описание *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Подробно опишите вашу ситуацию, требования или предложение..."
            rows="6"
            required
          />
        </div>
        
        <div className="price-location-row">
          <div className="form-group">
            <label>Цена</label>
            <div className="price-input">
              <input
                type="number"
                name="priceValue"
                value={formData.priceValue}
                onChange={handleChange}
                placeholder="1000"
                min="0"
              />
              <select
                name="priceUnit"
                value={formData.priceUnit}
                onChange={handleChange}
              >
                <option value="руб.">руб.</option>
                <option value="руб./час">руб./час</option>
                <option value="руб./день">руб./день</option>
                <option value="руб./мес.">руб./мес.</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Местоположение</label>
            <input
              type="text"
              name="locationText"
              value={formData.locationText}
              onChange={handleChange}
              placeholder="Город или район"
              maxLength={50}
            />
          </div>
        </div>
        
        <div className="form-actions">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn btn-secondary"
          >
            Отмена
          </button>
          
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Создание...' : 'Создать объявление'}
          </button>
        </div>
      </form>
      
      <style>{`
        .create-listing {
          max-width: 700px;
          margin: 0 auto;
        }
        
        h1 {
          margin-bottom: 2rem;
        }
        
        .listing-form {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: #333;
        }
        
        .radio-group {
          display: flex;
          gap: 2rem;
        }
        
        .radio-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        
        .radio-label input[type="radio"] {
          margin: 0;
        }
        
        select,
        input[type="text"],
        input[type="number"],
        textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 1rem;
          font-family: inherit;
        }
        
        textarea {
          resize: vertical;
        }
        
        .price-location-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .price-input {
          display: flex;
          gap: 0.5rem;
        }
        
        .price-input input {
          flex: 1;
        }
        
        .price-input select {
          width: auto;
          min-width: 100px;
        }
        
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #dee2e6;
        }
        
        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
        }
        
        .btn-primary {
          background: #007bff;
          color: white;
        }
        
        .btn-primary:hover {
          background: #0056b3;
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }
        
        .btn-secondary {
          background: #6c757d;
          color: white;
        }
        
        .btn-secondary:hover {
          background: #545b62;
        }
      `}</style>
    </div>
  );
}