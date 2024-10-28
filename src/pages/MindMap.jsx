import NextButton from '../components/buttons/NextButton';
import Sidebar from '../components/layouts/Sidebar';

export default function MindMap() {
  return (
    <>
      <Sidebar>
        <h3 className="fw-bold">Peta Konsep Materi</h3>
        <img src="peta-konsep.png" alt="Gambar Peta Konsep Materi" className="img-fluid w-100 border p-4 rounded-3" />
        <div className="d-flex justify-content-center pt-4">
          <NextButton link="/materi" />
        </div>
      </Sidebar>
    </>
  );
}
