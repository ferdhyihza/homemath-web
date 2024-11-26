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
      <h3 className="fw-bold pb-4 my-1">Latihan Soal</h3>
      <div className="row">
        <div className="col-sm-6">
          <ExerciseCard number="1" className={isUnsurPadaSPLTVDone ? '' : 'disabled text-secondary'} title="Pengantar SPLTV Latihan Soal 1" link="pengantar-spltv/1-unsur-pada-spltv">
            Unsur pada SPLTV: <br />
            Menentukan variabel, koefisien, dan konstanta
          </ExerciseCard>
          <ExerciseCard number="1" className={isBentukUmumSPLTVDone ? '' : 'disabled text-secondary'} title="Pengantar SPLTV Latihan Soal 2" link="pengantar-spltv/2-bentuk-umum-spltv">
            Bentuk Umum SPLTV: <br />
            Menentukan variabel, koefisien, dan konstanta
          </ExerciseCard>
          <ExerciseCard number="1" className={isBentukUmumSPLTV2Done ? '' : 'disabled text-secondary'} title="Pengantar SPLTV Latihan Soal 3" link="pengantar-spltv/3-bentuk-umum-spltv">
            Bentuk Umum SPLTV: <br />
            Menyusun Sistem Persamaan Linear Tiga Variabel
          </ExerciseCard>
        </div>
        <div className="col-sm-6">
          <ExerciseCard number="2" className={isMetodePenyelesaianEliminasiDone ? '' : 'disabled text-secondary'} title="Metode Penyelesaian SPLTV Latihan Soal 1" link="metode-penyelesaian-spltv/1-dengan-metode-eliminasi">
            Penyelesaian SPLTV dengan Metode Eliminasi
          </ExerciseCard>
          <ExerciseCard number="2" className={isMetodePenyelesaianSubstitusiDone ? '' : 'disabled text-secondary'} title="Metode Penyelesaian SPLTV Latihan Soal 2" link="metode-penyelesaian-spltv/2-dengan-metode-substitusi">
            Penyelesaian SPLTV dengan Metode Substitusi
          </ExerciseCard>
          <ExerciseCard number="2" className={isMetodePenyelesaianCampuranDone ? '' : 'disabled text-secondary'} title="Metode Penyelesaian SPLTV Latihan Soal 3" link="metode-penyelesaian-spltv/3-dengan-metode-campuran">
            Penyelesaian SPLTV dengan Metode Campuran (Eliminasi & Substitusi)
          </ExerciseCard>
          <ExerciseCard number="3" className={isPenggunaanSPLTVDone ? '' : 'disabled text-secondary'} title="Penggunaan SPLTV Latihan Soal 1" link="penggunaan-spltv/1">
            Penggunaan SPLTV Latihan 1
          </ExerciseCard>
          {/* <ExerciseCard className={isPenggunaanSPLTV2Done ? '' : 'disabled text-secondary'} title="Penggunaan SPLTV Latihan Soal 2" link="penggunaan-spltv/2">
            Penggunaan SPLTV Latihan 2
          </ExerciseCard> */}
        </div>
      </div>
    </Main>
  );
}
