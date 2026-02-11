import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import CoursDetail from "./Pages/Coursdetail";
import InscriptionCours from "./Pages/inscription";
import Ajouter_Enseignant from "./Pages/Admin/ajouterEnseignant";
import Ajouter_Lecon from "./Pages/Admin/ajouterLecon";
import Ajouter_Section from "./Pages/Admin/ajouterSection";
import Ajouter_cours from "./Pages/Admin/Ajouter_cours";
import Login from "./Pages/login";
import AdminPage from "./Pages/Admin/admindashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/cours/:id" element={<CoursDetail />} />
        <Route path="/inscription/:id" element={<InscriptionCours />} />
        <Route path="/connexion/" element={<Login />} />
        <Route path="/Ajouter_cours/" element={<Ajouter_cours />} />
        <Route path="/ajouterEnseignant/" element={<Ajouter_Enseignant />} />
        <Route path="/ajouterLecon/" element={<Ajouter_Lecon />} />
        <Route path="/ajouterSection/" element={<Ajouter_Section />} />
        <Route path="/Admin" element={<AdminPage />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
