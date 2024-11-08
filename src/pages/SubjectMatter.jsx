import { Link } from 'react-router-dom';
import Main from '../components/layouts/Main';
import '../styles/SubjectMatter.css';
import SubjectMatterCard from '../components/SubjectMatterCard';

export default function SubjectMatter() {
  return (
    <Main>
      <h3 className="fw-bold pb-3">Materi</h3>
      <SubjectMatterCard number="01" title="Pengantar SPLTV" link="pengantar-spltv">
        <li>
          <Link to="pengantar-spltv">Pengantar SPLTV</Link>
        </li>
        <li>
          <Link to="unsur-pada-spltv">Unsur pada SPLTV</Link>
        </li>
        <li>
          <Link to="bentuk-umum-spltv">Bentuk Umum SPLTV</Link>
        </li>
      </SubjectMatterCard>
      <SubjectMatterCard number="02" title="Metode Penyelesaian SPLTV" link="metode-penyelesaian-spltv">
        <li>
          <Link to="metode-penyelesaian-spltv/eliminasi">Metode Eliminasi</Link>
        </li>
        <li>
          <Link to="metode-penyelesaian-spltv/substitusi">Metode Substitusi</Link>
        </li>
        <li>
          <Link to="metode-penyelesaian-spltv/campuran">Metode Campuran (Eliminasi & Substitusi)</Link>
        </li>
      </SubjectMatterCard>
      <SubjectMatterCard number="03" title="Penggunaan SPLTV pada Kehidupan Sehari-hari" link="penggunaan-spltv">
        <li>
          <Link to="penggunaan-spltv">Untuk apa kita mempelajari SPLTV?</Link>
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
