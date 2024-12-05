import Main from '../components/layouts/Main';
import ExerciseCard from '../components/ExerciseCard.jsx';
import '../styles/SubjectMatter.css';
import { useEffect, useState } from 'react';

export default function Exercise() {
  const [isUnsurPadaSPLTVDone, setIsUnsurPadaSPLTVDone] = useState(false);
  const [isBentukUmumSPLTVDone, setIsBentukUmumSPLTVDone] = useState(false);
  const [isBentukUmumSPLTV2Done, setIsBentukUmumSPLTV2Done] = useState(false);

  const [isMetodePenyelesaianEliminasiDone, setIsMetodePenyelesaianEliminasiDone] = useState(false);
  const [isMetodePenyelesaianSubstitusiDone, setIsMetodePenyelesaianSubstitusiDone] = useState(false);
  const [isMetodePenyelesaianCampuranDone, setIsMetodePenyelesaianCampuranDone] = useState(false);

  const [isPenggunaanSPLTVDone, setIsPenggunaanSPLTVDone] = useState(false);
  // const [isPenggunaanSPLTV2Done, setIsPenggunaanSPLTV2Done] = useState(false);

  useEffect(() => {
    const sessionData = JSON.parse(localStorage.getItem('sessionData'));

    if (sessionData?.UnsurPadaSPLTV) {
      setIsUnsurPadaSPLTVDone(true);
    }
    if (sessionData?.BentukUmumSPLTV) {
      setIsBentukUmumSPLTVDone(true);
    }
    if (sessionData?.BentukUmumSPLTV2) {
      setIsBentukUmumSPLTV2Done(true);
    }

    if (sessionData?.MetodePenyelesaianEliminasi) {
      setIsMetodePenyelesaianEliminasiDone(true);
    }
    if (sessionData?.MetodePenyelesaianSubstitusi) {
      setIsMetodePenyelesaianSubstitusiDone(true);
    }
    if (sessionData?.MetodePenyelesaianCampuran) {
      setIsMetodePenyelesaianCampuranDone(true);
    }

    if (sessionData?.PenggunaanSPLTV) {
      setIsPenggunaanSPLTVDone(true);
    }
    // if (sessionData?.PenggunaanSPLTV2) {
    //   setIsPenggunaanSPLTV2Done(true);
    // }
  }, []);

  return (
    <Main>
      <div className="row">
        <div className="col-sm-6">
          <h3 className="fw-bold pb-4 my-1">Latihan Soal Materi 1</h3>
          <ExerciseCard number="1" className={isUnsurPadaSPLTVDone ? '' : 'disabled text-secondary'} title="Pengantar SPLTV" link="pengantar-spltv/1-unsur-pada-pltv">
            Menentukan variabel, koefisien, dan konstanta
          </ExerciseCard>
          <ExerciseCard number="2" className={isBentukUmumSPLTVDone ? '' : 'disabled text-secondary'} title="Pengantar SPLTV" link="pengantar-spltv/2-bentuk-umum-spltv">
            Menentukan Persamaan Linear Tiga Variabel
          </ExerciseCard>
          <ExerciseCard number="3" className={isBentukUmumSPLTV2Done ? '' : 'disabled text-secondary'} title="Pengantar SPLTV" link="pengantar-spltv/3-bentuk-umum-spltv">
            Menyusun Sistem Persamaan Linear Tiga Variabel
          </ExerciseCard>
        </div>
        <div className="col-sm-6">
          <h3 className="fw-bold pb-4 my-1">Latihan Soal Materi 2</h3>
          <ExerciseCard number="1" className={isMetodePenyelesaianEliminasiDone ? '' : 'disabled text-secondary'} title="Metode Penyelesaian SPLTV " link="metode-penyelesaian-spltv/1-dengan-metode-eliminasi">
            Metode Eliminasi
          </ExerciseCard>
          <ExerciseCard number="2" className={isMetodePenyelesaianSubstitusiDone ? '' : 'disabled text-secondary'} title="Metode Penyelesaian SPLTV" link="metode-penyelesaian-spltv/2-dengan-metode-substitusi">
            Metode Substitusi
          </ExerciseCard>
          <ExerciseCard number="3" className={isMetodePenyelesaianCampuranDone ? '' : 'disabled text-secondary'} title=" Metode Penyelesaian SPLTV" link="metode-penyelesaian-spltv/3-dengan-metode-campuran">
            Metode Campuran (Eliminasi & Substitusi)
          </ExerciseCard>
          {/* <ExerciseCard className={isPenggunaanSPLTV2Done ? '' : 'disabled text-secondary'} title="Penggunaan SPLTV Latihan Soal 2" link="penggunaan-spltv/2">
            Penggunaan SPLTV Latihan 2
          </ExerciseCard> */}
        </div>
        <div className="col-sm-6">
          <h3 className="fw-bold pb-4 my-1">Latihan Soal Materi 3</h3>
          <ExerciseCard number="1" className={isPenggunaanSPLTVDone ? '' : 'disabled text-secondary'} title="Penggunaan SPLTV" link="penggunaan-spltv/1">
            Pada Kehidupan Sehari-hari
          </ExerciseCard>
        </div>
      </div>
    </Main>
  );
}
