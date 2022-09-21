import { Route, Routes } from 'react-router-dom';
import './App.css';
import Stagiaire from './components/Stagiaire';
import ListeStagiaire from './pages/ListeStagiaire'
import Accueil from './pages/Accueil';
import Layout from './pages/Layout';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route  index element = {<Accueil/>}/>
          <Route path='stagiaire' element= {<Stagiaire/>} />
          <Route  path = "programme" />
          <Route  path = "affichage"/>
          <Route path = "listestagiaire" element={<ListeStagiaire/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;

 