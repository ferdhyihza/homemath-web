import Main from '../components/layouts/Main';
import ExerciseCard from '../components/ExerciseCard.jsx';
import '../styles/SubjectMatter.css';

export default function Exercise() {
  return (
    <>
      <Main>
        <h3 className="fw-bold pb-3">Latihan Soal</h3>
        <div className="row">
          <div className="col">
            <ExerciseCard title="Pengantar SPLTV Latihan Soal 1" link="">
              Unsur pada SPLTV <br />
              Menentukan variabel, koefisien, dan konstanta
            </ExerciseCard>
            <ExerciseCard title="Pengantar SPLTV Latihan Soal 2" link="">
              Bentuk Umum SPLTV <br />
              Menentukan variabel, koefisien, dan konstanta
            </ExerciseCard>
            <ExerciseCard title="Pengantar SPLTV Latihan Soal 3" link="">
              Bentuk Umum SPLTV <br />
              Menentukan variabel, koefisien, dan konstanta
            </ExerciseCard>
            <ExerciseCard title="Metode Penyelesaian SPLTV Latihan Soal 1" link="">
              Penyelesaian SPLTV dengan Metode Eliminasi
            </ExerciseCard>
          </div>
          <div className="col">
            <ExerciseCard title="Metode Penyelesaian SPLTV Latihan Soal 2" link="">
              Penyelesaian SPLTV dengan Metode Substitusi
            </ExerciseCard>
            <ExerciseCard title="Metode Penyelesaian SPLTV Latihan Soal 3" link="">
              Penyelesaian SPLTV dengan Metode Campuran (Eliminasi & Substitusi)
            </ExerciseCard>
            <ExerciseCard title="Penggunaan SPLTV Latihan Soal 1" link="">
              Penggunaan SPLTV Latihan 1
            </ExerciseCard>
            <ExerciseCard title="Penggunaan SPLTV Latihan Soal 2" link="">
              Penggunaan SPLTV Latihan 2
            </ExerciseCard>
          </div>
        </div>
      </Main>
    </>
  );
}
