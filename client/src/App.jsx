import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './style.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {

  const {currUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  const queryClient = new QueryClient()

  // Using router-dom outlet
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? 'dark': 'light'}`}>
          <Navbar />
          <div style={{display: 'flex'}}>
            <Leftbar />
            <div style={{flex: 6}}>
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currUser) {
      return <Navigate to='/login' />
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
  <div>
     <RouterProvider router={router} />
  </div>
  )
}

export default App
