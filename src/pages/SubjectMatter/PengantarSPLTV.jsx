import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';

export default function PengantarSPLTV() {
  return (
    <Main>
      <h3 className="fw-bold pb-3">Pengantar SPLTV</h3>
      <div className="d-flex justify-content-center py-4">
        <NextButton link="/unsur-pada-spltv" />
      </div>
    </Main>
  );
}
