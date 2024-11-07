
import React, { useState } from 'react';
import api, { setAuthHeader } from './api';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
         
            const response = await api.post('/login', { username, password });
            if (response.status === 200) {
                setMessage('Login exitoso');
                setAuthHeader(username, password); 
            }
        } catch (error) {
            setMessage('Error en el inicio de sesión');
            console.error('Error al autenticar:', error);
        }
    };

    return (
        <div className="App">
            <h1>Inicio de Sesión</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Iniciar sesión</button>
                 <button type="submit">Prueba</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default App;
