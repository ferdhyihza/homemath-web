import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@popperjs/core/dist/umd/popper.min.js';
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
import BentukUmumSPLTV from './pages/SubjectMatter/BentukUmumSPLTV.jsx';
import BentukUmumSPLTV2 from './pages/SubjectMatter/BentukUmumSPLTV2.jsx';
import MetodePenyelesaianSPLTV from './pages/SubjectMatter/MetodePenyelesaianSPLTV.jsx';
import MetodePenyelesaianEliminasi from './pages/SubjectMatter/MetodePenyelesaianEliminasi.jsx';
import MetodePenyelesaianSubstitusi from './pages/SubjectMatter/MetodePenyelesaianSubstitusi.jsx';
import MetodePenyelesaianCampuran from './pages/SubjectMatter/MetodePenyelesaianCampuran.jsx';
import PenggunaanSPLTV from './pages/SubjectMatter/PenggunaanSPLTV.jsx';
import PenggunaanSPLTV2 from './pages/SubjectMatter/PenggunaanSPLTV2.jsx';
import PengantarSPLTV1 from './pages/Exercise/PengantarSPLTV1.jsx';
import PengantarSPLTV2 from './pages/Exercise/PengantarSPLTV2.jsx';
import PengantarSPLTV3 from './pages/Exercise/PengantarSPLTV3.jsx';

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
  {
    path: '/materi/bentuk-umum-spltv',
    element: <BentukUmumSPLTV />,
  },
  {
    path: '/materi/bentuk-umum-spltv-2',
    element: <BentukUmumSPLTV2 />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv',
    element: <MetodePenyelesaianSPLTV />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv/eliminasi',
    element: <MetodePenyelesaianEliminasi />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv/substitusi',
    element: <MetodePenyelesaianSubstitusi />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv/campuran',
    element: <MetodePenyelesaianCampuran />,
  },
  {
    path: '/materi/penggunaan-spltv',
    element: <PenggunaanSPLTV />,
  },
  {
    path: '/materi/penggunaan-spltv-2',
    element: <PenggunaanSPLTV2 />,
  },
  {
    path: '/latihan-soal/pengantar-spltv/1-unsur-pada-spltv',
    element: <PengantarSPLTV1 />,
  },
  {
    path: '/latihan-soal/pengantar-spltv/2-bentuk-umum-spltv',
    element: <PengantarSPLTV2 />,
  },
  {
    path: '/latihan-soal/pengantar-spltv/3-bentuk-umum-spltv',
    element: <PengantarSPLTV3 />,
  },
  {
    path: '/sesi/1-peta-konsep',
    element: <MindMap />,
  },
  {
    path: '/sesi/2-pengantar-spltv',
    element: <PengantarSPLTV />,
  },
  {
    path: '/sesi/3-unsur-pada-spltv',
    element: <UnsurPadaSPLTV />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
