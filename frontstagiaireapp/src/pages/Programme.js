import './Programme.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Programme() {
    
    const [titre, setTitre] = useState('');
    const [duree, setDuree] = useState('');

    const programClick = (e) => {
        e.preventDefault()
        const programme = {titre, duree};
        console.log(programme);
        fetch("http://localhost:8090/programme/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(programme)
        }).then(() => {
            console.log("programme créer")
        }) 
    }

    return <div className='programme'>
        <h1>Bonjour</h1>
        <form className="formulaire">
            <ul style={{listStyleType: 'none'}} className='input'>
              
                <li>
                    <span>
                        <label>Nom</label>
                        <input type='text' value={titre} onChange={(e) =>setTitre(e.target.value)} required></input>
                    </span>
                </li>
                <li>
                    <span>
                        <label>Durée</label>
                        <input type='text' value={duree} onChange={(e) => setDuree(e.target.value)} required></input>
                    </span>
                </li>
            </ul>
            <input type='submit' className='btnProgramme' value='Ajouter' onClick={programClick}></input>

            <NavLink to='/listeprogramme'>
                AfficherLaListe
            </NavLink>
        </form>
    </div>
}