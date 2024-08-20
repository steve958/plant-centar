import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminLogIn.css";

export default function AdminLogIn() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Proveri ispravnost lozinke
    if (password === 'stefanRetard') {
      // Postavi stanje autentifikacije
      localStorage.setItem('isAdminLoggedIn', 'true');
      // Preusmeri na Admin Panel
      navigate('/admin/panel');
    } else {
      alert('Pogrešna lozinka');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="admin-page-container">
      <div className="admin-input-wrapper">
        <div className="admin-password-container">
          <input
            type="password"
            placeholder="Unesite sifru"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown} 
          />
        </div>
        <div className="login-button-container">
          <button onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
}
