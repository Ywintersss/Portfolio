import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout.jsx'
import Home from './pages/home.jsx'
import { Children } from 'react';

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
