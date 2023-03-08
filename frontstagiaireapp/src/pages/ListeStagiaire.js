import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import './ListeStagiaire.css';

export default function AlignItemsList() {

    const [listeStagiaire, setListeStagiaire] = useState([]);

    useEffect(() => {
    
        fetch("http://localhost:8080/stagiaire/read")
        .then(res => res.json())
        .then((resultat) => {
            setListeStagiaire(resultat);
            console.log(resultat)
        })
    }, [])

    return (
        <Container className='listestagiaire'>
            <h1> Liste des stagiaires</h1>
        <Paper style={{width: '100%'}}>
        <div className='entete'>
            <span>ID-STAGIAIRE</span>
            <span>NOM</span>
            <span>PRENOM</span>
            <span>ADRESSE</span>
          
        </div>
        {listeStagiaire.map(liste => (
                <Paper elevation={6} key={liste.id} className='paper'>
                    <span>{liste.idStagiaire}</span>
                    <span>{liste.nom_stagiaire}</span>
                    <span>{liste.prenom_stagiaire}</span>
                    <span>{liste.adresse}</span>
                   
                </Paper>
            )
        )}
        </Paper>
        </Container>
    
)}