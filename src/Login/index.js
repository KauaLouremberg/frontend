import { Button, Card, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../conexao/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        api.post("login/", { username, password }).then(({ data }) => {
            setMessage(`Bem-vindo, ${data.user}!`);
            localStorage.setItem('user', data.user); // Salva o usuário no localStorage
            navigate("/dashboard")
        }).catch(error => {
            setMessage(error.error)
        })

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
