import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './style.css'

import logoHeroes from '../../assets/logo.svg';

function Profile(props) {
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId]);

  async function handleDelete(id) {

    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch(error) {
      alert('Erro ao DELETAR')
    }

  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }
  
  return (
    <div className="profile-container">
      <header>
        <img src={logoHeroes} alt="Logo Heroes" />
        <span>Bem vindo, {ongName}</span>
        <Link to="/incident/new" className="button">
          Cadastrar novo Caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e04120" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso</strong>
            <p>{incident.title}</p>

            <strong>Descrição</strong>
            <p>{incident.description}</p>

            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }</p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;