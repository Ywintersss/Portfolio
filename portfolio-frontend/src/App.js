import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Projects from './pages/projects.jsx';
import Skills from './pages/skills.jsx';
import WorkExperience from './pages/workExperience.jsx';

function App() {
  const router = createBrowserRouter([
    {
      // parent route wraps child routes
      element: <Layout />,
      children : 
      [
        // Outlet is used to render child route components when the corresponding url is matched.
        { 
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/skills",
          element: <Skills />
        },
        {
          path: "/experience",
          element: <WorkExperience />
        }
      ]
    }
  ])


  return (
    <div className="App">
      {/* RouterProvider is used to render child routes */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
