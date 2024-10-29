import { Link } from 'react-router-dom';
import NextButton from '../components/buttons/NextButton';
import '../styles/Home.css';
import Main from '../components/layouts/Main';
import Footer from '../components/layouts/Footer';

export default function Home() {
  return (
    <Main>
      <section className=" bg-darkblue rounded-4" id="hero">
        <div className="row p-5">
          <div className="col-7 pe-4 d-flex flex-column justify-content-between">
            <h1 className="py-3 fw-bold lh-base" id="title">
              SISTEM PERSAMAAN LINEAR TIGA VARIABEL <br />
              (SPLTV)
            </h1>
            <p className="fw-light rounded-4 p-2" style={{ backgroundColor: '#14141450' }}>
              Ingatkah kalian pada materi program linear atau Sistem Persamaan Linear Dua Variabel yang telah kalian dapatkan pada jenjang SLTP? Pada materi tersebut, kalian telah mengenal variabel, koefisien, dan konstanta.
              <br />
              Pembelajaran kali ini, kalian akan diajak untuk mempelajari materi terkait dengan variabel yang tidak hanya terdiri satu atau dua variabel, melainkan tiga variabel...
              <br />
              Yups,
              <br />
              Sistem Persamaan Linear Tiga Variabel (SPLTV)
            </p>
          </div>
          <div className="col-3 p-0 pe-3">
            <img className="rounded-4 img-fluid w-100 h-100 object-fit-cover" src="hero1.png" alt="" />
          </div>
          <div className="col-2 ps-3">
            <img className="rounded-4 img-fluid w-100 h-100 object-fit-cover" src="hero2.png" alt="" />
          </div>
        </div>
        <div className="p-5 pt-0">
          <div className="row p-4 menu-wrapper rounded-4 justify-content-around gap-2">
            <div className="col-auto">
              <NextButton link="/peta-konsep" />
            </div>
            <Link to="/peta-konsep" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <img src="../icon/icon-peta-konsep.png" alt="icon-peta-konsep" className="me-1" />
              Peta Konsep
            </Link>
            <Link to="/materi" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <img src="../icon/icon-materi.png" alt="icon-materi" className="me-1" /> Materi
            </Link>
            <Link to="/latihan-soal" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <img src="../icon/icon-latihan-soal.png" alt="icon-latihan-soal" className="me-1" /> Latihan Soal
            </Link>
            <Link to="" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <img src="../icon/icon-tes-formatif.png" alt="icon-tes-formatif" className="me-1" /> Tes Formatif
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </Main>
  );
}
