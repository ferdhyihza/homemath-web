import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import MindMap from './pages/MindMap.jsx';
import SubjectMatter from './pages/SubjectMatter.jsx';
import Exercise from './pages/Exercise.jsx';
import PengantarSPLTV from './pages/SubjectMatter/PengantarSPLTV.jsx';
import ErrorPage from './pages/404.jsx';
import UnsurPadaSPLTV from './pages/SubjectMatter/UnsurPadaSPLTV.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/peta-konsep',
    element: <MindMap />,
  },
  {
    path: '/materi',
    element: <SubjectMatter />,
  },
  {
    path: '/latihan-soal',
    element: <Exercise />,
  },
  {
    path: '/materi/pengantar-spltv',
    element: <PengantarSPLTV />,
  },
  {
    path: '/materi/unsur-pada-spltv',
    element: <UnsurPadaSPLTV />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
