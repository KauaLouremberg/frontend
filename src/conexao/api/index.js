import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para realizar login e obter o token JWT
export const login = async (username, password) => {
  try {
    const response = await api.post('token/', { username, password });
    // Armazenando os tokens no localStorage
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Função para renovar o token
export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem('refresh_token');
    const response = await api.post('token/refresh/', { refresh });
    // Armazenar novo token de acesso
    localStorage.setItem('access_token', response.data.access);
    return response.data.access;
  } catch (error) {
    console.error('Erro ao renovar token:', error);
    throw error;
  }
};

// Função para configurar o cabeçalho de autenticação
export const setAuthHeader = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
};
