import NextButton from '../components/buttons/NextButton';
import Main from '../components/layouts/Main';

export default function MindMap() {
  return (
    <>
      <Main>
        <h3 className="fw-bold pb-3">Peta Konsep Materi</h3>
        <img src="peta-konsep.png" alt="Gambar Peta Konsep Materi" className="img-fluid w-100 border p-4 rounded-3" />
        <div className="d-flex justify-content-center pt-4">
          <NextButton to="/materi" />
        </div>
      </Main>
    </>
  );
}