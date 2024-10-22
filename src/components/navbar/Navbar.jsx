import './navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary py-3 fixed-top">
        <div className="container">
          {/* Toggler */}
          <button className="btn px-3 text-bg-darkblue" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="bi bi-chevron-right"></i>
          </button>
          {/* Brand */}
          <h3 className=" fw-bold" href="#">
            HOMEMATH
          </h3>
          {/* User */}
          <div className="d-flex">
            <img className="me-2" src="/avatar-icon.png" width={50} alt="" />
            <div className="d-none d-md-flex flex-column justify-content-center">
              <h5 className="mb-0 fw-bold">Betty Agustina</h5>
              <p className="mb-0">Tadris Matematika</p>
            </div>
          </div>

          {/* Offcanvas */}
          <div className="offcanvas offcanvas-start text-bg-darkblue" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link fw-medium text-light fs-5" aria-current="page" href="/">
                    <i className="bi bi-house me-3"></i>Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">
                    <i className="bi bi-diagram-2 me-3"></i>Peta Konsep
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">
                    <i className="bi bi-book me-3"></i>Materi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">
                    <i className="bi bi-journal-text me-3"></i> Latihan Soal
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fs-5" href="#">
                    <i className="bi bi-journals me-3"></i> Tes Formatif
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
