import Hero from "./components/Hero";
import "./App.css";

import Works, { projects } from "./components/Work";
import ProjectDetail from "./components/ProjectDetail";

import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import WalkCycle from "./components/WalkCycle";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";


function ProjectPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  return <ProjectDetail project={project} onBack={() => navigate("/")} />;
}

function HomePage() {
  return (
    <div className="app">
      <Hero />
      <Works />
      <WalkCycle/>
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
