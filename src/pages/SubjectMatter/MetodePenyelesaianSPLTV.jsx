import { useEffect } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import { useSearchParams } from 'react-router-dom';

export default function MetodePenyelesaianSPLTV() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') == 'materi';

  const sessionData = JSON.parse(localStorage.getItem('sessionData'));

  useEffect(() => {
    if (sessionData?.MetodePenyelesaianSPLTV) return;
    const newSessionData = {
      ...sessionData,
      MetodePenyelesaianSPLTV: true,
    };
    localStorage.setItem('sessionData', JSON.stringify(newSessionData));
  }, [sessionData]);

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Metode Penyelesaian SPLTV <span className="text-muted fw-medium ms-sm-2 fs-5">Eliminasi, Substitusi, dan Campuran (Eliminasi & Substitusi)</span>
      </h3>
      <p className="fw-bold">
        Sudah dapat menyusun soal cerita menjadi bentuk SPLTV? <br />
        Lantas bagaimana menyelesaikannya?
      </p>
      <p>
        Hampir mirip dengan Sistem Persamaan Linear Dua Variabel (SPLDV) yang dapat menggunakan metode eliminasi dan substitusi, pada penyelesaian SPLTV terdapat tiga alternatif metode penyelesaian, yaitu metode eliminaasi, substitusi, dan
        metode campuran (eliminasi dan subtirusi). Untuk lebih jelasnya, yuk simak dan ikuti pembelajaran berikut!
      </p>
      <p>
        <b> Metode Eliminasi</b> <br />
        Metode eliminasi ini dilakukan dengan mengeliminasi atau menghilangkan salah satu variabel dari tiga variabel yang ada.
      </p>
      <p>
        <b> Metode Substitusi</b> <br />
        Metode subtitusi dilakukan dengan menyatakan salah satu variabel yang ada ke dalam variabel lainnya.
      </p>
      <p>
        <b> Metode Campuran (Eliminasi & Substitusi)</b> <br />
        Metode ini merupakan metode penyelesaian dengan menggabungkan metode eliminasi dan subtitusi. Kita bisa menggunakan kedua metode tersebut sesuai informasi yang telah didapatkan.
      </p>
      <p>Untuk lebih jelasnya, akan dijabarkan pada pembelajaran berikut ini.</p>

      <div className="d-flex justify-content-center py-4">
        <NextButton link={`/materi/metode-penyelesaian-spltv/eliminasi` + (from ? '?from=materi' : '')}></NextButton>
      </div>
    </Main>
  );
}
