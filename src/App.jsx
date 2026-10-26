import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <section className="page-content">
      <p className="eyebrow">Gradeberries</p>
      <h1>Your school dashboard starts here.</h1>
      <p className="lede">
        A React app ready for the Gradeberries interface and client-side data.
      </p>
      <Link className="action" to="/about">
        View the about page <span aria-hidden="true">-&gt;</span>
      </Link>
    </section>
  );
}

function About() {
  return (
    <section className="page-content">
      <p className="eyebrow">About</p>
      <h1>Built with React.</h1>
      <p className="lede">
        This page demonstrates client-side routing on GitHub Pages.
      </p>
      <Link className="action" to="/">
        Back home <span aria-hidden="true">-&gt;</span>
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Gradeberries home">
          <span className="brand-mark" aria-hidden="true">G</span>
          <span>Gradeberries</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer>Gradeberries</footer>
    </div>
  );
}
