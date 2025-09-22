import { Button, Card, Form, Input } from 'antd';
import React, { useState } from 'react';
import { login } from '../conexao/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(username, password);
            navigate('/dashboard')
        } catch (error) {
            console.log('Deu ruim')
        }
    };

    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height:"100vh"}}>
            <Card style={{width: "350px", height: "350px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",}}>
                <div style={{fontSize: "28px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: "-25px", marginBottom: "50px"}}>
                    <b>LOGIN</b>
                </div>
            <Form style={{width: "280px"}}>
                <Form.Item rules={[{required: true, message: 'Por favor insira o nome de usuário.'}]}>
                    <Input 
                        placeholder='Insira o Usuário' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        style={{marginBottom: "10px"}}
                    />
                </Form.Item>
                
                <Form.Item rules={[{required: true}]}>
                    <Input.Password 
                        placeholder='Insira a Senha' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        style={{marginBottom: "10px"}}
                    />
                </Form.Item>
                
                <Button 
                    onClick={(e) => handleSubmit(e)} 
                    style={{width: "280px", borderRadius: "12px"}}
                > 
                    Logar 

                </Button>
            </Form>
            </Card>
            
        </div>
    );
};

export default Login;
