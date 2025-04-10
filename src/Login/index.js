import { Button, Card, Form, Input } from 'antd';
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
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height:"100vh"}}>
            <Card style={{width: "350px", height: "350px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",}}>
                <div style={{fontSize: "28px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "-25px", marginBottom: "50px"}}>
                    <b>LOGIN</b>
                </div>
            <Form style={{width: "280px"}}>
                <Input placeholder='Insira o Usuário' value={username} onChange={(e) => setUsername(e.target.value)} style={{marginBottom: "10px"}}/>
                <Input.Password placeholder='Insira a Senha' value={password} onChange={(e) => setPassword(e.target.value)} style={{marginBottom: "10px"}}/>
                <Button onClick={handleLogin} style={{width: "280px", borderRadius: "12px"}}> Logar </Button>
                <p style={{textAlign: "center"}}>{message}</p>
            </Form>
            </Card>
            
        </div>
    );
};

export default Login;
