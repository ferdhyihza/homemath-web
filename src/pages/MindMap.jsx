import NextButton from '../components/buttons/NextButton';
import Main from '../components/layouts/Main';

export default function MindMap() {
  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">Peta Konsep Materi</h3>
      <img src="../peta-konsep.png" alt="Gambar Peta Konsep Materi" className="img-fluid w-100 border p-4 rounded-3" />
      <div className="d-flex justify-content-center py-4">
        <NextButton link="/materi/pengantar-spltv" />
      </div>
    </Main>
  );
}
