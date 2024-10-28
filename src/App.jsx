import Sidebar from './components/layouts/Sidebar';
import Navbar from './components/layouts/Navbar';
import NavbarFluid from './components/layouts/NavbarFluid';
import NextButton from './components/buttons/NextButton';

// import Home from './pages/Home';

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarFluid />
      {/* <Home /> */}
      <Sidebar quotes="">
        <h3 className="fw-bold">Peta Konsep Materi</h3>
        <img src="peta-konsep.png" alt="Gambar Peta Konsep Materi" className="img-fluid w-100 border p-4 rounded-3" />
        <div className="d-flex justify-content-center pt-4">
          <NextButton link="/materi" />
        </div>
      </Sidebar>
    </>
  );
}
