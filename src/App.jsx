import { Link, Route, Routes } from "react-router-dom";

function Login() {
  return (
    <section className="max-w-[680px]"></section>
  );
}

function Header() {
  return (
<header className="border-b-3 border-berry-400 px-10 py-2 bg-berry-200">      
    <Link
        className="text-xl font-medium"
        to="/"
        aria-label="Gradeberry home"
      >
        <span>Gradeberries</span>
      </Link>
    </header>
  );
}

function Grades() {
  return (
    <section className="max-w-[680px]">
      <p className="mt-0 mb-[18px] text-[12px] font-bold text-berry-800 uppercase">
        About
      </p>
      <h1 className="m-0 max-w-[620px] text-[clamp(38px,7vw,72px)] leading-[1.04]">
        Built with React.
      </h1>
      <p className="mt-6 mb-7 max-w-[500px] text-[18px] leading-[1.6] text-berry-900">
        This page demonstrates client-side routing on GitHub Pages.
      </p>
      <Link
        className="inline-flex items-center gap-[10px] rounded-sm text-[15px] font-bold text-berry-800 hover:text-berry-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry-700"
        to="/"
      >
        Back home <span aria-hidden="true">-&gt;</span>
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen min-w-[320px] flex-col bg-berry-50 font-sans font-normal text-berry-950 antialiased [font-synthesis:none] [text-rendering:optimizeLegibility]">
      <Header />
      <main className="grid flex-1 content-center px-[clamp(20px,12vw,180px)] py-[72px] max-[520px]:py-14">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </main>

      <footer className="border-t border-berry-200 px-[clamp(20px,6vw,88px)] py-5 text-[13px] text-berry-800">
        Gradeberries
      </footer>
    </div>
  );
}
