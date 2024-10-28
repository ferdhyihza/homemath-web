import NextButton from '../components/buttons/NextButton';
import Navbar from '../components/layouts/Navbar';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <div className="sticky-top bg-white">
        <div className="container">
          <Navbar />
        </div>
      </div>
      <section className="container bg-darkblue" id="hero">
        <div className="row p-5">
          <div className="col-7 pe-4 d-flex flex-column justify-content-between">
            <h1 className="py-3 fw-bold lh-base" id="title">
              SISTEM PERSAMAAN LINEAR TIGA VARIABEL <br />
              (SPLTV)
            </h1>
            <p className="fw-light">
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
          <div className="row p-4 menu-wrapper rounded-4 justify-content-around gap-3">
            <div className="col-1 ">
              <NextButton link="/peta-konsep" />
            </div>
            <a href="/peta-konsep" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <i className="bi bi-diagram-2 me-2"></i>Peta Konsep
            </a>
            <a href="" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <i className="bi bi-book me-2"></i>Materi
            </a>
            <a href="" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <i className="bi bi-journal-text me-2"></i> Latihan Soal
            </a>
            <a href="" className="col rounded-1 mx-3 menu d-flex justify-content-center align-items-center">
              <i className="bi bi-journals me-2"></i> Tes Formatif
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
