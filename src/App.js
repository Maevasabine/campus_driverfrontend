import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import CoursDetail from "./Pages/Coursdetail";
import InscriptionCours from "./Pages/inscription";
import AjouterEnseignant from "./Pages/Admin/ajouterEnseignant";
import AjouterLecon from "./Pages/Admin/ajouterLecon";
import AjouterSection from "./Pages/Admin/ajouterSection";
import Ajoutercours from "./Pages/Admin/AjouterCours";
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
        <Route path="/Ajouter_cours/" element={<Ajoutercours />} />
        <Route path="/ajouterEnseignant/" element={<AjouterEnseignant />} />
        <Route path="/ajouterLecon/" element={<AjouterLecon />} />
        <Route path="/ajouterSection/" element={<AjouterSection />} />
        <Route path="/Admin" element={<AdminPage />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
