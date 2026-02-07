import Sidebar from "./sidebar";

export default function AdminLayout({ children }) {
    console.log("adminlayout rendu")
  return (
    <div className="admin-container">
      <Sidebar />

      <main className="admin-main">
        <header className="admin-header">
          <h2>Admin Panel</h2>
          <span>👤 Administrateur</span>
        </header>

        <section className="admin-content">
          {children}
        </section>
      </main>
    </div>
  );
}
