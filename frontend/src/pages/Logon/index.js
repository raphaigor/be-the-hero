import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './style.css'

import logoHeroes from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon(props) {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', {id});

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      
      history.push('/profile');
    } catch (error) {
      alert('Erro ao logar!')
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoHeroes} alt="Logo Heroes" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="SUA ID" value={id} onChange={e => setId(e.target.value)} />
          <button type="submit" className="button">ENTRAR</button>
          <Link to="/register" className="back-link">
            <FiLogIn size={18} color="#e02041" />
            Não tenho Cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="" />
    </div>
  );
}

export default Logon;
