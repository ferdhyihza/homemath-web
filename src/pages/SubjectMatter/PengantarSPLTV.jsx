import { useEffect } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import { useSearchParams } from 'react-router-dom';

export default function PengantarSPLTV() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') == 'materi';

  const sessionData = JSON.parse(localStorage.getItem('sessionData'));

  useEffect(() => {
    if (sessionData?.PengantarSPLTV) return;
    const newSessionData = {
      ...sessionData,
      PengantarSPLTV: true,
    };
    localStorage.setItem('sessionData', JSON.stringify(newSessionData));
  }, [sessionData]);

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">Pengantar SPLTV</h3>
      <p>Untuk mempelajari tentang Sistem Persamaan Linear Tiga Variabel (SPLTV), tentunya kita harus mengenal terlebih dahulu bentuk dari sistem persamaan linear tersebut. Coba kita perhatikan cerita berikut!</p>
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-lg-3 gap-1">
        <img className="" src="../../img/ilustrasi-pengantar-spltv-2.png" alt="Gambar ilustrasi pembelian kain di toko oleh beberapa konveksi" />
        <img className=" " src="../../img/ilustrasi-pengantar-spltv.png" alt="Gambar ilustrasi pembelian kain di toko oleh beberapa konveksi" />
      </div>
      <p className="text-center mt-2 fst-italic">Ilustrasi pembelian kain di toko oleh beberapa konveksi</p>
      <p>
        Beberapa pengusaha konveksi di daerah Kota Blitar, akan memproduksi baju seragam sekolah pada masa awal tahun ajaran baru. Salah satu toko tekstil terkenal di Kota Blitar menjadi pilihan utama para pengusaha untuk membeli bahan
        baku.
      </p>
      <ul className="list-group mb-2">
        <li className="list-group-item">
          Konveksi Roshima menghabiskan Rp20.700.000 untuk membeli: <br />
          • 4 gulung kain warna putih <br />
          • 6 gulung kain warna abu-abu <br />• 3 gulung kain warna cokelat
        </li>
        <li className="list-group-item">
          Sedangkan SM Bordir menghabiskan Rp24.000.000 untuk membeli: <br />
          • 5 gulung kain warna putih <br />
          • 5 gulung kain warna abu-abu <br />• 5 gulung kain warna cokelat
        </li>
        <li className="list-group-item">
          Konveksi ketiga, yaitu Sportees menghabiskan Rp19.700.000 untuk membeli: <br />• 2 gulung kain warna putih <br />
          • 3 gulung kain warna abu-abu <br />• 7 gulung kain warna cokelat
        </li>
      </ul>
      <p>
        Di sisi lain, konveksi Berkarya ingin merintis usahanya dengan memulai membeli bahan kain di toko tersebut. Namun, ia hanya memiliki informasi total harga kain dari konveksi Roshima dan SM Bordir. Bagaimana ia akan mengetahui harga
        setiap gulung warna kain?
      </p>
      <p>Dari cerita tersebut, teman-teman dapat mengetahui harga setiap gulung warna kain dengan memanfaatkan SPLTV lho…</p>
      <p>
        <b>Lantas Bagaimana cara untuk mengetahui harga setiap gulung warna kain?</b>
        <br /> Yuk ikuti rangkain belajar kali ini
      </p>

      <div className="d-flex justify-content-center py-4">
        <NextButton link={'/materi/unsur-pada-spltv' + (from ? '?from=materi' : '')}></NextButton>
      </div>
    </Main>
  );
}
