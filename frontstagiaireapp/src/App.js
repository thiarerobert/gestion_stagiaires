import { Route, Routes } from 'react-router-dom';
import './App.css';
import Stagiaire from './components/Stagiaire';
import Programme from './pages/Programme';
import ListeProgramme from './pages/ListeProgramme';
import ListeStagiaire from './pages/ListeStagiaire';
import Accueil from './pages/Accueil';
import Layout from './pages/Layout';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route  index element = {<Accueil/>}/>
          <Route path='stagiaire' element= {<Stagiaire/>} />
          <Route  path = "programme" element = {<Programme/>}/>
          <Route  path = "affichage"/>
          <Route path = "listestagiaire" element={<ListeStagiaire/>}/>
          <Route path = "listeprogramme" element={<ListeProgramme/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;


 