import { Link } from 'react-router-dom';
import Main from '../components/layouts/Main';
import '../styles/SubjectMatter.css';

export default function SubjectMatter() {
  return (
    <>
      <Main>
        <h3 className="fw-bold pb-3">Materi</h3>
        <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
          <div className="number p-3 fs-1">01</div>
          <div className="content p-2 w-100">
            <h5 className="fw-bold p-2 d-inline-block">Pengantar SPLTV</h5>
            <hr className="my-0" />

            <ul className="p-1 mb-0 d-flex gap-3">
              <li>
                <Link to="">Pengantar SPLTV</Link>
              </li>
              <li>
                <Link to="">Unsur pada SPLTV</Link>
              </li>
              <li>
                <Link to="">Bentuk Umum SPLTV</Link>
              </li>
            </ul>
          </div>
        </Link>
        <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
          <div className="number p-3 fs-1">02</div>
          <div className="content p-2 w-100">
            <h5 className="fw-bold p-2 d-inline-block">Metode Penyelesaian SPLTV</h5>
            <hr className="my-0" />

            <ul className="p-1 mb-0 d-flex gap-3">
              <li>
                <Link to="">Metode Eliminasi</Link>
              </li>
              <li>
                <Link to="">Metode Substitusi</Link>
              </li>
              <li>
                <Link to="">Metode Campuran (Eliminasi & Substitusi)</Link>
              </li>
            </ul>
          </div>
        </Link>
        <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
          <div className="number p-3 fs-1">03</div>
          <div className="content p-2 w-100">
            <h5 className="fw-bold p-2 d-inline-block">Penggunaan SPLTV pada Kehidupan Sehari-hari</h5>
            <hr className="my-0" />

            <ul className="p-1 mb-0 d-flex gap-3">
              <li>
                <Link to="">Untuk apa kita mempelajari SPLTV?</Link>
              </li>
              <li>
                <Link to="">Sudahkah memahami untuk apa kita mempelajari SPLTV?</Link>
              </li>
            </ul>
          </div>
        </Link>
        <h3 className="fw-bold py-3">Lainnya</h3>
        <div className="row">
          <div className="col">
            <Link to="/latihan-soal" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Latihan Soal</h5>
                <hr className="my-0" />

                <ul className="p-1 mb-0 d-flex gap-3">
                  <li>Latihan Soal Materi 1</li>
                  <li>Latihan Soal Materi 2</li>
                  <li>Latihan Soal Materi 3</li>
                </ul>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Tes Formatif</h5>
                <hr className="my-0" />
                <ul className="p-1 mb-0 d-flex gap-3">
                  <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, odit!</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </Main>
    </>
  );
}
