import { Link } from 'react-router-dom';
import Main from '../components/layouts/Main';
import '../styles/SubjectMatter.css';
import SubjectMatterCard from '../components/SubjectMatterCard';
import { useEffect, useState } from 'react';

export default function SubjectMatter() {
  const [isPengantarSPLTVDone, setIsPengantarSPLTVDone] = useState(false);
  const [isUnsurPadaSPLTVDone, setIsUnsurPadaSPLTVDone] = useState(false);
  const [, setIsBentukUmumSPLTVDone] = useState(false);
  const [isBentukUmumSPLTV2Done, setIsBentukUmumSPLTV2Done] = useState(false);
  const [progressPengantarSPLTV, setProgressPengantarSPLTV] = useState('0');

  const [isMetodePenyelesaianSPLTVDone, setIsMetodePenyelesaianSPLTVDone] = useState(false);
  const [isMetodePenyelesaianEliminasiDone, setIsMetodePenyelesaianEliminasiDone] = useState(false);
  const [isMetodePenyelesaianSubstitusiDone, setIsMetodePenyelesaianSubstitusiDone] = useState(false);
  const [isMetodePenyelesaianCampuranDone, setIsMetodePenyelesaianCampuranDone] = useState(false);
  const [progressMetodePenyelesaianSPLTV, setProgressMetodePenyelesaianSPLTV] = useState('0');

  const [, setIsPenggunaanSPLTVDone] = useState(false);
  const [isPenggunaanSPLTV2Done, setIsPenggunaanSPLTV2Done] = useState(false);
  const [progressPenggunaanSPLTV, setProgressPenggunaanSPLTV] = useState('0');

  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    if (sessionData?.PengantarSPLTV) {
      setIsPengantarSPLTVDone(true);
      setProgressPengantarSPLTV(25);
    }
    if (sessionData?.UnsurPadaSPLTV) {
      setIsUnsurPadaSPLTVDone(true);
      setProgressPengantarSPLTV(50);
    }
    if (sessionData?.BentukUmumSPLTV) {
      setIsBentukUmumSPLTVDone(true);
      setProgressPengantarSPLTV(75);
    }
    if (sessionData?.BentukUmumSPLTV2) {
      setIsBentukUmumSPLTV2Done(true);
      setProgressPengantarSPLTV(100);
    }

    if (sessionData?.MetodePenyelesaianSPLTV) {
      setIsMetodePenyelesaianSPLTVDone(true);
      setProgressMetodePenyelesaianSPLTV(25);
    }
    if (sessionData?.MetodePenyelesaianEliminasi) {
      setIsMetodePenyelesaianEliminasiDone(true);
      setProgressMetodePenyelesaianSPLTV(50);
    }
    if (sessionData?.MetodePenyelesaianSubstitusi) {
      setIsMetodePenyelesaianSubstitusiDone(true);
      setProgressMetodePenyelesaianSPLTV(75);
    }
    if (sessionData?.MetodePenyelesaianCampuran) {
      setIsMetodePenyelesaianCampuranDone(true);
      setProgressMetodePenyelesaianSPLTV(100);
    }

    if (sessionData?.PenggunaanSPLTV) {
      setIsPenggunaanSPLTVDone(true);
      setProgressPenggunaanSPLTV(50);
    }
    if (sessionData?.PenggunaanSPLTV2) {
      setIsPenggunaanSPLTV2Done(true);
      setProgressPenggunaanSPLTV(100);
    }
  }, []);

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">Materi</h3>
      <SubjectMatterCard number="01" title="Pengantar SPLTV" link="pengantar-spltv" progress={progressPengantarSPLTV}>
        <li>
          {' '}
          <span>
            <Link to="pengantar-spltv">Pengantar SPLTV </Link>
          </span>
        </li>
        <li>
          {isPengantarSPLTVDone ? (
            <span>
              <Link to="unsur-pada-spltv">Unsur pada SPLTV</Link>{' '}
            </span>
          ) : (
            <span className="text-secondary fw-light">Unsur pada SPLTV</span>
          )}
        </li>
        <li>
          {isUnsurPadaSPLTVDone ? (
            <span>
              <Link to="bentuk-umum-spltv">Bentuk Umum SPLTV </Link>{' '}
            </span>
          ) : (
            <span className="text-secondary fw-light">Bentuk Umum SPLTV</span>
          )}
        </li>
      </SubjectMatterCard>
      <SubjectMatterCard number="02" title="Metode Penyelesaian SPLTV" link="metode-penyelesaian-spltv" progress={progressMetodePenyelesaianSPLTV} className={isBentukUmumSPLTV2Done ? '' : 'disabled text-secondary'}>
        <li>{isBentukUmumSPLTV2Done ? <Link to="metode-penyelesaian-spltv">Macam-macam Metode Penyelesaian SPLTV</Link> : <span className="text-secondary fw-light">Macam-macam Metode Penyelesaian SPLTV</span>}</li>
        <li>{isMetodePenyelesaianSPLTVDone ? <Link to="metode-penyelesaian-spltv/eliminasi">Metode Eliminasi</Link> : <span className="text-secondary fw-light">Metode Eliminasi</span>}</li>
        <li>{isMetodePenyelesaianEliminasiDone ? <Link to="metode-penyelesaian-spltv/substitusi">Metode Substitusi</Link> : <span className="text-secondary fw-light">Metode Substitusi</span>}</li>
        <li>
          {isMetodePenyelesaianSubstitusiDone ? <Link to="metode-penyelesaian-spltv/campuran">Metode Campuran (Eliminasi & Substitusi)</Link> : <span className="text-secondary fw-light">Metode Campuran (Eliminasi & Substitusi)</span>}
        </li>
      </SubjectMatterCard>
      <SubjectMatterCard number="03" title="Penggunaan SPLTV pada Kehidupan Sehari-hari" link="penggunaan-spltv" progress={progressPenggunaanSPLTV} className={isMetodePenyelesaianCampuranDone ? '' : 'disabled text-secondary'}>
        <li>{isMetodePenyelesaianCampuranDone ? <Link to="penggunaan-spltv">Untuk apa kita mempelajari SPLTV?</Link> : <span className="text-secondary fw-light">Untuk apa kita mempelajari SPLTV?</span>}</li>
      </SubjectMatterCard>
      <h3 className="fw-bold py-3">Lainnya</h3>
      <div className="row mb-2">
        <div className="col-6">
          <SubjectMatterCard title="Latihan Soal" link="/latihan-soal">
            <li>Latihan Soal Materi 1</li>
            <li>Latihan Soal Materi 2</li>
            <li>Latihan Soal Materi 3</li>
          </SubjectMatterCard>
        </div>
        <div className="col-6">
          <SubjectMatterCard title="Tes Formatif" link="/tes-formatif" className={isPenggunaanSPLTV2Done ? '' : 'disabled text-secondary'}>
            <li>Kerjakan tes berikut sebagai evaluasi pemahamanmu terhadap SPLTV</li>
          </SubjectMatterCard>
        </div>
      </div>
    </Main>
  );
}
