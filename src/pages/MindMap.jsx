import NextButton from '../components/buttons/NextButton';
import Main from '../components/layouts/Main';

export default function MindMap() {
  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">Peta Konsep Materi</h3>
      <img src="/img/peta-konsep.png" alt="Gambar Peta Konsep Materi" className="img-fluid w-100 border p-4 rounded-3 mb-5" />
      <div className="d-flex gap-2 align-items-center mb-4">
        <img src="/icon/icon-tujuan-pembelajaran.png" width={48} height={48} alt="" />
        <div>
          <h3 className="fw-bold">Capaian dan Tujuan Pembelajaran</h3>
          <p className="mb-0">Sistem Persamaan Linear Tiga Variabel (SPLTV)</p>
        </div>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold">Capaian Pembelajaran</h5>
        <p>Capaian pembelajaran materi SPLTV pada media ini adalah peserta didik dapat menyelesaikan masalah yang berkaitan dengan sistem persamaan linear tiga variabel.</p>
      </div>
      <div className="mb-4">
        <h5 className="fw-bold">Tujuan Pembelajaran</h5>
        <p>Tujuan pembelajaran dijabarkan pada poin-poin berikut.</p>
        <ul className="list-group list-group-numbered">
          <li className="list-group-item d-flex">
            <div className="ms-2">Peserta didik dapat memahami unsur dan bentuk umum SPLTV </div>
          </li>
          <li className="list-group-item d-flex">
            <div className="ms-2">Peserta didik dapat menyusun model matematika dari masalah konstektual yang disajikan </div>
          </li>
          <li className="list-group-item d-flex">
            <div className="ms-2">Peserta didik dapat menyelesaikan/menentukan himpunan penyelesaian dari permasalahan yang berkaitan dengan SPLTV yang disajikan</div>
          </li>
        </ul>
      </div>
      <section className="text-center bg-lightblue rounded-2 px-2 pb-2 px-sm-5">
        <p className=" p-2 m-0 pb-0 fw-light">
          Sudah memahami capaian dan tujuan pembelajaran? <br /> Siapkan dirimu untuk mengikuti rangkaian pembelajaran kali ini!
        </p>
      </section>

      <div className="d-flex justify-content-center py-4">
        <NextButton link="/materi/pengantar-spltv" />
      </div>
    </Main>
  );
}
