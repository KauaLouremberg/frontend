import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8000/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(`Bem-vindo, ${data.user}!`);
            localStorage.setItem('user', JSON.stringify(data.user)); // Salva o usuário no localStorage
        } else {
            setMessage(data.error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Login;
