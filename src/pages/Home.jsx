import { Link, useLocation } from 'react-router-dom';
import NextButton from '../components/buttons/NextButton';
import '../styles/Home.css';
import Main from '../components/layouts/Main';
import Footer from '../components/layouts/Footer';
import PetunjukPenggunaan from '../components/layouts/PetunjukPenggunaan';
import { useEffect, useRef } from 'react';

export default function Home() {
  const sessionData = JSON.parse(localStorage.getItem('sessionData') || '{}');
  const isDoTest = sessionData?.PenggunaanSPLTV2;

  const petunjukPenggunaanSection = useRef(null);
  const location = useLocation();
  const query = location.search;
  const cleanQuery = query.startsWith('?') ? query.substring(1) : query;
  const isPetunjuk = cleanQuery === 'petunjuk-penggunaan';

  useEffect(() => {
    if (isPetunjuk && petunjukPenggunaanSection.current) {
      petunjukPenggunaanSection.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isPetunjuk]);

  return (
    <Main>
      <section className=" bg-darkblue rounded-4 mb-4" id="hero">
        <div className="row p-4 flex-sm-row-reverse justify-content-center justify-content-sm-between">
          <div id="hero-image" className="col-sm-4 mb-3 mb-sm-0 row d-none d-sm-flex" style={{ height: '300px' }}>
            <div className="col-8">
              <img className="rounded-4 img-fluid w-100 h-100 object-fit-cover" src="/img/hero1.png" alt="hero image 1" />
            </div>
            <div className="col-4">
              <img className="rounded-4 img-fluid w-100 h-100 object-fit-cover" src="/img/hero2.png" alt="hero image 2" />
            </div>
          </div>
          <div className="col-sm-8 pe-sm-4 d-flex flex-column jusify-content-center justify-content-sm-between">
            <h1 className="py-sm-3 py-2 fw-bold lh-base" id="title">
              SISTEM PERSAMAAN LINEAR TIGA VARIABEL (SPLTV)
            </h1>
            <p className="fw-light mb-0 rounded-4 p-2" style={{ backgroundColor: '#14141450' }}>
              Ingatkah kalian pada materi program linear atau Sistem Persamaan Linear Dua Variabel yang telah kalian dapatkan pada jenjang SLTP? Pada materi tersebut, kalian telah mengenal variabel, koefisien, dan konstanta.
              <br />
              Pembelajaran kali ini, kalian akan diajak untuk mempelajari materi terkait dengan variabel yang tidak hanya terdiri satu atau dua variabel, melainkan tiga variabel...
              <br />
              Yups,
              <br />
              Sistem Persamaan Linear Tiga Variabel (SPLTV)
            </p>
          </div>
        </div>
        <div className="px-5 pt-0 py-4">
          <div className="row p-sm-4 py-4 menu-wrapper rounded-4 justify-content-around gap-2">
            <div className="col-12 col-sm-auto text-center">
              <NextButton link="/peta-konsep" />
            </div>
            <Link to="/peta-konsep" className="col py-2 rounded-1 mx-3 menu d-flex justify-content-start justify-content-sm-center align-items-center">
              <img src="../icon/icon-peta-konsep.png" width={32} alt="icon-peta-konsep" className="me-1" />
              Peta Konsep
            </Link>
            <Link to="/materi" className="col py-2 rounded-1 mx-3 menu d-flex justify-content-start justify-content-sm-center align-items-center">
              <img src="../icon/icon-materi.png" width={32} alt="icon-materi" className="me-1" /> Materi
            </Link>
            <Link to="/latihan-soal" className="col py-2 rounded-1 mx-3 menu d-flex justify-content-start justify-content-sm-center align-items-center">
              <img src="../icon/icon-latihan-soal.png" width={32} alt="icon-latihan-soal" className="me-1" /> Latihan Soal
            </Link>
            {isDoTest ? (
              <Link to="/tes-formatif" className="col py-2 rounded-1 mx-3 menu d-flex justify-content-start justify-content-sm-center align-items-center">
                <img src="../icon/icon-tes-formatif.png" width={32} alt="icon-tes-formatif" className="me-1" /> Tes Formatif
              </Link>
            ) : (
              <a type="button" className={` col py-2 rounded-1 mx-3 menu d-flex justify-content-start justify-content-sm-center align-items-center`} data-bs-toggle="modal" data-bs-target={`#modalAlert`}>
                <img src="../icon/icon-tes-formatif.png" width={32} alt="icon-tes-formatif" className="me-1" /> Tes Formatif
              </a>
            )}
          </div>
        </div>
      </section>
      <div ref={petunjukPenggunaanSection}></div>
      <PetunjukPenggunaan />
      <Footer />
    </Main>
  );
}
