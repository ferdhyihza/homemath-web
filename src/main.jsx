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
import AuthorizedRoute from './components/AuthorizedRoutes.jsx';
import AccessDenied from './pages/403.jsx';
import FormativeTest from './pages/FormativeTest.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/access-denied',
    element: <AccessDenied />,
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
    element: <AuthorizedRoute element={<UnsurPadaSPLTV />} requiredKey="PengantarSPLTV" />,
  },
  {
    path: '/materi/bentuk-umum-spltv',
    element: <AuthorizedRoute element={<BentukUmumSPLTV />} requiredKey="UnsurPadaSPLTV" />,
  },
  {
    path: '/materi/bentuk-umum-spltv-2',
    element: <AuthorizedRoute element={<BentukUmumSPLTV2 />} requiredKey="BentukUmumSPLTV" />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv',
    element: <AuthorizedRoute element={<MetodePenyelesaianSPLTV />} requiredKey="BentukUmumSPLTV2" />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv/eliminasi',
    element: <AuthorizedRoute element={<MetodePenyelesaianEliminasi />} requiredKey="MetodePenyelesaianSPLTV" />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv/substitusi',
    element: <AuthorizedRoute element={<MetodePenyelesaianSubstitusi />} requiredKey="MetodePenyelesaianEliminasi" />,
  },
  {
    path: '/materi/metode-penyelesaian-spltv/campuran',
    element: <AuthorizedRoute element={<MetodePenyelesaianCampuran />} requiredKey="MetodePenyelesaianSubstitusi" />,
  },
  {
    path: '/materi/penggunaan-spltv',
    element: <AuthorizedRoute element={<PenggunaanSPLTV />} requiredKey="MetodePenyelesaianCampuran" />,
  },
  {
    path: '/materi/penggunaan-spltv-2',
    element: <AuthorizedRoute element={<PenggunaanSPLTV2 />} requiredKey="PenggunaanSPLTV" />,
  },
  {
    path: '/tes-formatif',
    element: <AuthorizedRoute element={<FormativeTest />} requiredKey="PenggunaanSPLTV2" />,
  },
  {
    path: '/latihan-soal/pengantar-spltv/1-unsur-pada-spltv',
    element: <AuthorizedRoute element={<PengantarSPLTV1 />} requiredKey="UnsurPadaSPLTV" />,
  },
  {
    path: '/latihan-soal/pengantar-spltv/2-bentuk-umum-spltv',
    element: <AuthorizedRoute element={<PengantarSPLTV2 />} requiredKey="BentukUmumSPLTV" />,
  },
  {
    path: '/latihan-soal/pengantar-spltv/3-bentuk-umum-spltv',
    element: <AuthorizedRoute element={<PengantarSPLTV3 />} requiredKey="BentukUmumSPLTV2" />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
