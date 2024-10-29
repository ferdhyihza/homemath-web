import { Link, useLocation } from 'react-router-dom';
import '../../styles/Navbar.css';

export default function NavbarContent() {
  const location = useLocation();
  const isMateriPage = location.pathname.includes('/materi/');

  return (
    <>
      <div className="row w-100">
        <div className="col-4">
          {/* Toggler */}
          <button className="btn px-3 bg-darkblue" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="col-4 text-center">
          {/* Brand */}
          <h4 className=" fw-bold" id="navbar-title">
            HOMEMATH
          </h4>
        </div>
        <div className="col-4 d-flex justify-content-end">
          {/* User */}
          {isMateriPage ? (
            <div className="d-flex flex-column justify-content-center">
              <h6 className="mb-0 fw-bold text-end">SPLTV</h6>
              <p className="mb-0 text-end" style={{ fontSize: '14px' }}>
                Sistem Persamaan Linear Tiga Variabel
              </p>
            </div>
          ) : (
            <div className="d-flex">
              <img className="me-2" src="/avatar-icon.png" style={{ width: '40px', height: '40px' }} alt="" />
              <div className="d-none d-md-flex flex-column justify-content-center">
                <h6 className="mb-0 fw-bold">Betty Agustina</h6>
                <p className="mb-0" style={{ fontSize: '14px' }}>
                  Tadris Matematika
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start bg-darkblue" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn px-3 bg-white ms-auto mt-2" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="offcanvas-body pt-0 ps-5 ms-3">
          <div className="mb-5">
            <h3 className="fw-bold">HomeMath</h3>
            <p className="fs-5">Materi Belajar</p>
          </div>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2">
            <li className="nav-item d-flex">
              <Link to="/" className="nav-link fw-medium text-light fs-5">
                <i className="bi bi-house me-3"></i>Beranda
              </Link>
            </li>
            <li className="nav-item d-flex">
              <Link to="/peta-konsep" className="nav-link text-light fs-5">
                <i className="bi bi-diagram-2 me-3"></i>Peta Konsep
              </Link>
            </li>
            <li className="nav-item d-flex">
              <Link to="/materi" className="nav-link text-light fs-5">
                <i className="bi bi-book me-3"></i>Materi
              </Link>
            </li>
            <li className="nav-item d-flex">
              <Link to="/latihan-soal" className="nav-link text-light fs-5" href="#">
                <i className="bi bi-journal-text me-3"></i> Latihan Soal
              </Link>
            </li>
            <li className="nav-item d-flex">
              <a className="nav-link text-light fs-5" href="#">
                <i className="bi bi-journals me-3"></i> Tes Formatif
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
