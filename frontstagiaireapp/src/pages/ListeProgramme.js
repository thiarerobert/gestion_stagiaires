import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import './ListeStagiaire.css';
import poubelle from '../ressources/poubelle.png';

export default function AlignItemsList() {

    const [listeProgramme, setListProgramme] = useState([]);
    const numeroProgramme = useState('');

    useEffect(() => {
    
        fetch("http://localhost:8090/programme/read")
        .then(res => res.json())
        .then((resultat) => {
            setListProgramme(resultat);
            console.log(resultat)
        })
    }, [])

    const delProgramme = (e) => {
        e.preventDefault()
        const id = {numeroProgramme};
    
        fetch("http://localhost:8090/programme/delete/{numeroProgramme}", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(id)
        }).then(() => {
            console.log("programme créer")
        }) 
    }
    return (
        <Container className='listestagiaire'>
            <h1> Liste des stagiaires</h1>
        <Paper style={{width: '100%'}}>
        <div className='entete'>
            <span>ID-PROGRAMME</span>
            <span>TITRE</span>
            <span>DUREE</span>
            <span>SUPPRIMER</span>
          
        </div>
        {listeProgramme.map(programme => (
                <Paper elevation={6} key={programme.id} className='paper'>
                    <span>{programme.numeroPogramme}</span>
                    <span>{programme.titre}</span>
                    <span>{programme.duree}</span>
                    <button style={{background:"none", border:"none"}} onClick={delProgramme}>
                        <img src={poubelle} style={{width: "30px"}} alt="Bouton delete"/>
                    </button>
                </Paper>
            )
        )}
        
        </Paper>
        </Container>
        
    
)}