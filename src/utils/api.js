const API_BASE = import.meta.env.DEV ? '/api' : 'http://localhost:3001';

// Получить токен из localStorage
function getToken() {
  return localStorage.getItem('token');
}

// Установить токен
function setToken(token) {
  localStorage.setItem('token', token);
}

// Удалить токен
function removeToken() {
  localStorage.removeItem('token');
}

// Получить пользователя из localStorage
function getUser() {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

// Установить пользователя
function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// Удалить пользователя
function removeUser() {
  localStorage.removeItem('user');
}

// Обёртка для fetch с авторизацией
async function fetchWithAuth(url, options = {}) {
  const token = getToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  console.log(`API Request: ${API_BASE}${url}`);
  
  try {
    const response = await fetch(`${API_BASE}${url}`, {
      ...options,
      headers,
    });
    
    // Если токен просрочен, делаем logout
    if (response.status === 403) {
      removeToken();
      removeUser();
      window.location.href = '/login';
      throw new Error('Сессия истекла');
    }
    
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Telegram WebApp инициализация
async function initTelegramAuth() {
  if (!window.Telegram?.WebApp) {
    console.log('Telegram WebApp not detected');
    return null;
  }
  
  const initData = window.Telegram.WebApp.initData;
  if (!initData) {
    console.log('No initData in Telegram WebApp');
    return null;
  }
  
  console.log('Initializing Telegram auth...');
  
  try {
    const response = await fetch('/api/auth/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ initData }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Telegram auth failed');
    }
    
    const data = await response.json();
    setToken(data.token);
    setUser(data.user);
    
    console.log('Telegram auth successful:', data.user);
    return data.user;
  } catch (error) {
    console.error('Telegram auth error:', error);
    return null;
  }
}

// DEV авторизация
async function devLogin(role) {
  try {
    const response = await fetch('/api/auth/dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'DEV auth failed');
    }
    
    const data = await response.json();
    setToken(data.token);
    setUser(data.user);
    
    return data.user;
  } catch (error) {
    console.error('DEV auth error:', error);
    throw error;
  }
}

// Выход
function logout() {
  removeToken();
  removeUser();
  window.location.href = '/';
}

export {
  API_BASE,
  getToken,
  setToken,
  removeToken,
  getUser,
  setUser,
  removeUser,
  fetchWithAuth,
  initTelegramAuth,
  devLogin,
  logout
};