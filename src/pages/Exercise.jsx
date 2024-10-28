import { Link } from 'react-router-dom';
import Main from '../components/layouts/Main';
import '../styles/SubjectMatter.css';

export default function Exercise() {
  return (
    <>
      <Main>
        <h3 className="fw-bold pb-3">Latihan Soal</h3>
        <div className="row">
          <div className="col">
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Pengantar SPLTV Latihan Soal 1</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">
                  Unsur pada SPLTV <br />
                  Menentukan variabel, koefisien, dan konstanta
                </p>
              </div>
            </Link>
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Pengantar SPLTV Latihan Soal 2</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">
                  Bentuk Umum SPLTV <br />
                  Menentukan variabel, koefisien, dan konstanta
                </p>
              </div>
            </Link>
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Pengantar SPLTV Latihan Soal 3</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">
                  Bentuk Umum SPLTV <br />
                  Menentukan variabel, koefisien, dan konstanta
                </p>
              </div>
            </Link>
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Metode Penyelesaian SPLTV Latihan Soal 1</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">Penyelesaian SPLTV dengan Metode Eliminasi</p>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Metode Penyelesaian SPLTV Latihan Soal 2</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">
                  Penyelesaian SPLTV dengan Metode Substitusi <br />
                </p>
              </div>
            </Link>
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Metode Penyelesaian SPLTV Latihan Soal 3</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">Penyelesaian SPLTV dengan Metode Campuran (Eliminasi & Substitusi)</p>
              </div>
            </Link>
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Penggunaan SPLTV Latihan Soal 1</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">Penggunaan SPLTV Latihan 1</p>
              </div>
            </Link>
            <Link to="" className="border d-flex rounded-3 mb-4 p-2 materi">
              <div className="content p-2 w-100">
                <h5 className="fw-bold p-2 d-inline-block">Penggunaan SPLTV Latihan Soal 2</h5>
                <hr className="my-0" />
                <p className="p-2 mb-0 fw-medium">Penggunaan SPLTV Latihan 2</p>
              </div>
            </Link>
          </div>
        </div>
      </Main>
    </>
  );
}
