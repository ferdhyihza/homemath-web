import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';

export default function NavbarContent() {
  const location = useLocation();
  const isMateriPage = location.pathname.includes('/materi/');
  const isLatsolPage = location.pathname.includes('/latihan-soal/');
  const isTesFormatifPage = location.pathname.includes('/tes-formatif');

  const sessionData = JSON.parse(localStorage.getItem('sessionData') || '{}');
  const isDoTest = sessionData?.PenggunaanSPLTV2;

  return (
    <>
      <div className="row w-100 align-items-center justify-content-between">
        <div className="col-4">
          {/* Toggler */}
          <button className="btn px-3 pt-1 pb-2 bg-darkblue" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="bi bi-list fs-5"></i>
          </button>
        </div>
        <div className="col-4 px-0 text-center d-flex justify-content-center">
          {/* Brand */}
          <h4 className="text-end text-lg-center fw-bold mb-0" id="navbar-title">
            HOMEMATH
          </h4>
        </div>
        <div className="col-4 justify-content-end">
          {/* User */}
          {isMateriPage || isLatsolPage || isTesFormatifPage ? (
            <div className="d-flex flex-column justify-content-center">
              <h6 className="mb-0 text-end">SPLTV</h6>
              <p className="mb-0 d-none d-sm-block text-end" style={{ fontSize: '14px' }}>
                Sistem Persamaan Linear Tiga Variabel
              </p>
            </div>
          ) : (
            <div className="d-flex justify-content-end gap-sm-2">
              <img className="" src="/icon/logo-sekolah.png" style={{ width: '40px', height: '40px' }} alt="" />
              <div className="d-none d-md-flex flex-column justify-content-center">
                <h6 className="mb-0 fw-bold">MAN Kota Blitar</h6>
                <p className="mb-0" style={{ fontSize: '14px' }}>
                  Sukorejo, Blitar
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start bg-darkblue" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header ">
          <button type="button" className="btn px-3 bg-white ms-auto mt-2" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="offcanvas-body pt-0 ps-5 ms-3">
          <div className="mb-5">
            <h4 className="fw-bold">HomeMath</h4>
            <p className="">Materi Belajar</p>
          </div>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-1">
            <li className="nav-item d-flex">
              <Link to="/" className="nav-link fw-medium text-light ">
                <img src="/icon/icon-beranda.png" width={32} alt="icon-beranda" className="me-2" /> Beranda
              </Link>
            </li>
            <li className="nav-item d-flex">
              <Link to="/peta-konsep" className="nav-link text-light ">
                <img src="/icon/icon-peta-konsep.png" width={32} alt="icon-peta-konsep" className="me-2" /> Peta Konsep
              </Link>
            </li>
            <li className="nav-item d-flex">
              <Link to="/materi" className="nav-link text-light ">
                <img src="/icon/icon-materi.png" width={32} alt="icon-materi" className="me-2" /> Materi
              </Link>
            </li>
            <li className="nav-item d-flex">
              <Link to="/latihan-soal" className="nav-link text-light ">
                <img src="/icon/icon-latihan-soal.png" width={32} alt="icon-latihan-soal" className="me-2" /> Latihan Soal
              </Link>
            </li>
            <li className="nav-item d-flex">
              {isDoTest ? (
                <Link to="/tes-formatif" className="nav-link text-light ">
                  <img src="/icon/icon-tes-formatif.png" width={32} alt="icon-tes-formatif" className="me-2" /> Tes Formatif
                </Link>
              ) : (
                <a type="button" className={`nav-link text-light `} data-bs-toggle="modal" data-bs-target={`#modalAlert`}>
                  <img src="/icon/icon-tes-formatif.png" width={32} alt="icon-tes-formatif" className="me-2" /> Tes Formatif
                </a>
              )}
            </li>
          </ul>
        </div>
        <li className="ps-5 ms-3 pb-5">
          <Link to="/?petunjuk-penggunaan" smooth={true} duration={500} className="nav-link fw-medium text-light ">
            <img src="/icon/icon-petunjuk.png" width={32} alt="icon petunjuk penggunaan" className="me-2" /> Petunjuk Penggunaan
          </Link>
        </li>
      </div>
    </>
  );
}
