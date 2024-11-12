import { Link } from 'react-router-dom';
import Main from '../components/layouts/Main';
import '../styles/SubjectMatter.css';
import SubjectMatterCard from '../components/SubjectMatterCard';
import { useEffect, useState } from 'react';

export default function SubjectMatter() {
  const [isPengantarSPLTVDone, setIsPengantarSPLTVDone] = useState(false);
  const [isUnsurPadaSPLTVDone, setIsUnsurPadaSPLTVDone] = useState(false);
  const [isBentukUmumSPLTVDone, setIsBentukUmumSPLTVDone] = useState(false);
  const [isBentukUmumSPLTV2Done, setIsBentukUmumSPLTV2Done] = useState(false);

  const [isMetodePenyelesaianSPLTVDone, setIsMetodePenyelesaianSPLTVDone] = useState(false);
  const [isMetodePenyelesaianEliminasiDone, setIsMetodePenyelesaianEliminasiDone] = useState(false);
  const [isMetodePenyelesaianSubstitusiDone, setIsMetodePenyelesaianSubstitusiDone] = useState(false);
  const [isMetodePenyelesaianCampuranDone, setIsMetodePenyelesaianCampuranDone] = useState(false);

  const [, setIsPenggunaanSPLTVDone] = useState(false);
  const [isPenggunaanSPLTV2Done, setIsPenggunaanSPLTV2Done] = useState(false);

  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    if (sessionData?.PengantarSPLTV) setIsPengantarSPLTVDone(true);
    if (sessionData?.UnsurPadaSPLTV) setIsUnsurPadaSPLTVDone(true);
    if (sessionData?.BentukUmumSPLTV) setIsBentukUmumSPLTVDone(true);
    if (sessionData?.BentukUmumSPLTV2) setIsBentukUmumSPLTV2Done(true);

    if (sessionData?.MetodePenyelesaianSPLTV) setIsMetodePenyelesaianSPLTVDone(true);
    if (sessionData?.MetodePenyelesaianEliminasi) setIsMetodePenyelesaianEliminasiDone(true);
    if (sessionData?.MetodePenyelesaianSubstitusi) setIsMetodePenyelesaianSubstitusiDone(true);
    if (sessionData?.MetodePenyelesaianCampuran) setIsMetodePenyelesaianCampuranDone(true);

    if (sessionData?.PenggunaanSPLTV) setIsPenggunaanSPLTVDone(true);
    if (sessionData?.PenggunaanSPLTV2) setIsPenggunaanSPLTV2Done(true);
  }, []);

  return (
    <Main>
      <h3 className="fw-bold pb-3">Materi</h3>
      <SubjectMatterCard number="01" title="Pengantar SPLTV" link="pengantar-spltv">
        <li>
          <Link to="pengantar-spltv">Pengantar SPLTV </Link>
          {isPengantarSPLTVDone ? '✅' : '🔃'}
        </li>
        <li>
          {isPengantarSPLTVDone ? (
            <>
              <Link to="unsur-pada-spltv">Unsur pada SPLTV</Link>
              {isUnsurPadaSPLTVDone ? '✅' : isPengantarSPLTVDone ? '🔃' : ''}
            </>
          ) : (
            <span className="text-secondary">Unsur pada SPLTV</span>
          )}
        </li>
        <li>
          {isUnsurPadaSPLTVDone ? (
            <>
              <Link to="bentuk-umum-spltv">Bentuk Umum SPLTV </Link>
              {isBentukUmumSPLTV2Done ? '✅' : isUnsurPadaSPLTVDone ? '🔃' : ''}
            </>
          ) : (
            <span className="text-secondary">Bentuk Umum SPLTV</span>
          )}
        </li>
      </SubjectMatterCard>
      <SubjectMatterCard number="02" title="Metode Penyelesaian SPLTV" link="metode-penyelesaian-spltv">
        <li>
          {isBentukUmumSPLTVDone && isBentukUmumSPLTV2Done ? (
            <>
              <Link to="metode-penyelesaian-spltv">Macam-macam Metode Penyelesaian SPLTV</Link>
              {isMetodePenyelesaianSPLTVDone ? '✅' : isBentukUmumSPLTV2Done ? '🔃' : ''}
            </>
          ) : (
            <span className="text-secondary">Macam-macam Metode Penyelesaian SPLTV</span>
          )}
        </li>
        <li>
          {isMetodePenyelesaianSPLTVDone ? (
            <>
              <Link to="metode-penyelesaian-spltv/eliminasi">Metode Eliminasi</Link>
              {isMetodePenyelesaianEliminasiDone ? '✅' : isMetodePenyelesaianSPLTVDone ? '🔃' : ''}
            </>
          ) : (
            <span className="text-secondary">Metode Eliminasi</span>
          )}
        </li>
        <li>
          {isMetodePenyelesaianEliminasiDone ? (
            <>
              <Link to="metode-penyelesaian-spltv/substitusi">Metode Substitusi</Link>
              {isMetodePenyelesaianSubstitusiDone ? '✅' : isMetodePenyelesaianEliminasiDone ? '🔃' : ''}
            </>
          ) : (
            <span className="text-secondary">Metode Substitusi</span>
          )}
        </li>
        <li>
          {isMetodePenyelesaianSubstitusiDone ? (
            <>
              <Link to="metode-penyelesaian-spltv/campuran">Metode Campuran (Eliminasi & Substitusi)</Link>
              {isMetodePenyelesaianCampuranDone ? '✅' : isMetodePenyelesaianSubstitusiDone ? '🔃' : ''}
            </>
          ) : (
            <span className="text-secondary">Metode Campuran (Eliminasi & Substitusi)</span>
          )}
        </li>
      </SubjectMatterCard>
      <SubjectMatterCard number="03" title="Penggunaan SPLTV pada Kehidupan Sehari-hari" link="penggunaan-spltv">
        <li>
          {isMetodePenyelesaianCampuranDone ? (
            <>
              <Link to="penggunaan-spltv">Untuk apa kita mempelajari SPLTV?</Link>
              {isPenggunaanSPLTV2Done ? '✅' : isMetodePenyelesaianCampuranDone ? '🔃' : ''}
            </>
          ) : (
            <span className="text-secondary">Untuk apa kita mempelajari SPLTV?</span>
          )}
        </li>
      </SubjectMatterCard>
      <h3 className="fw-bold py-3">Lainnya</h3>
      <div className="row">
        <div className="col">
          <SubjectMatterCard title="Latihan Soal" link="/latihan-soal">
            <li>Latihan Soal Materi 1</li>
            <li>Latihan Soal Materi 2</li>
            <li>Latihan Soal Materi 3</li>
          </SubjectMatterCard>
        </div>
        <div className="col">
          <SubjectMatterCard title="Tes Formatif" link="">
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, odit!</li>
          </SubjectMatterCard>
        </div>
      </div>
    </Main>
  );
}
