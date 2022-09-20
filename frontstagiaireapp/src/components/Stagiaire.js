import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import './stagiaire.css';

export default function Stagiaire() {

    const paperStyle = {padding: '50px 20px', width: 600, margin: "20px auto"};
    const [nom_stagiaire, setNom] = useState('');
    const [prenom_stagiaire, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');

    const handleClick=(e) => {
        e.preventDefault()
        const stagiaire= {nom_stagiaire, prenom_stagiaire, adresse}
        console.log(stagiaire);
        fetch("http://localhost:8090/stagiaire/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(stagiaire)
        }).then(() =>{
            console.log("Le stagiaire a été ajouté avec succès");
        })
    }

  return (
    <Container>
        <Paper elevation={3} style = {paperStyle}>
            <h1>Ajouter un stagiaire</h1>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="filled-basic" label="Nom stagiaire" variant="filled" value={nom_stagiaire} onChange={(e)=>setNom(e.target.value)}/>
        <TextField id="filled-basic" label="Prénom stagiaire" variant="filled" value={prenom_stagiaire} onChange={(e)=>setPrenom(e.target.value)} />
        <TextField id="filled-basic" label="Adresse" variant="filled" value={adresse} onChange={(e)=>setAdresse(e.target.value)}/>

        </Box>

        <Button variant="contained" onClick={handleClick}>Ajouter</Button>

        </Paper>
    </Container>
  );
}