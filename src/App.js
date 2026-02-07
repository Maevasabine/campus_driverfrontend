import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import CoursDetail from "./Pages/Coursdetail";
import InscriptionCours from "./Pages/inscription";
import Login from "./Pages/login";
import AdminLayout from "./Pages/Admin/adminlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/cours/:id" element={<CoursDetail />} />
        <Route path="/inscription/:id" element={<InscriptionCours />} />
        <Route path="/connexion/" element={<Login />} />

        <Route path="/Pages/Admin" element={<AdminLayout />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
