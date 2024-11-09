import { useLocation } from 'react-router-dom';
import NextButton from '../components/buttons/NextButton';
import Main from '../components/layouts/Main';

export default function MindMap() {
  const location = useLocation();
  const isSession = location.pathname.includes('/sesi/');

  return (
    <Main>
      <h3 className="fw-bold pb-3">Peta Konsep Materi</h3>
      <img src="../peta-konsep.png" alt="Gambar Peta Konsep Materi" className="img-fluid w-100 border p-4 rounded-3" />
      {isSession ? (
        <div className="d-flex justify-content-center py-4">
          <NextButton link="/sesi/2-pengantar-spltv" />
        </div>
      ) : (
        ''
      )}
    </Main>
  );
}
