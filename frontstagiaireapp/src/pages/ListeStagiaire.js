export default function AlignItemsList() {

    const [listeStagiaire, setListeStagiaire] = React.useState('');

    React.useEffect(() => {
        fetch("http://localhost:8090/student/read")
        .then(response => response.json())
        .then((resultat) => {
            setListeStagiaire(resultat);
        })
    }, [])

    return <div>
        {listeStagiaire.map(liste => (
            Name: {liste.nom}
        ))}
    </div>
}