import { setAuthHeader, refreshToken } from '../conexao/api';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Configura o cabeçalho de autorização com o token
        setAuthHeader();

        // Simule uma requisição para um endpoint protegido
        const response = await fetch('http://127.0.0.1:8000/protected-endpoint/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });

        if (response.status === 401) {
          // Caso o token expire, tenta renovar com o refresh token
          const newToken = await refreshToken();
          setAuthHeader(); // Atualiza o cabeçalho de autenticação
          // Tente novamente a requisição com o novo token
          const retryResponse = await fetch('http://127.0.0.1:8000/protected-endpoint/', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${newToken}`,
            },
          });
          const data = await retryResponse.json();
          setData(data);
        } else {
          const data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.error('Erro ao acessar dados protegidos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
