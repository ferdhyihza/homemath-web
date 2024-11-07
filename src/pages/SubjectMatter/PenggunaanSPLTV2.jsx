import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';

export default function PenggunaanSPLTV2() {
  return (
    <Main>
      <h3 className="fw-bold pb-5 my-3">
        Penggunaan SPLTV <span className="text-muted fw-medium ms-2 fs-5">Pada Kehidupan Sehari-hari</span>
      </h3>
      <p>
        <b>Sudahkah memahami untuk ap akita mempelajari SPLTV?</b> <br />
        Untuk melatih kalian menerjemahkan soal cerita ke dalam bentuk sistem persamaan linear, mari kita coba lagi contoh berikut ini!
      </p>
      <figure className="text-center">
        <img src="../img/ilustrasi-pengantar-spltv.png" alt="video ilustrasi" />
        <figcaption className="fst-italic fw-light">Ilustrasi [video]</figcaption>
      </figure>
      <p>
        Rania memiliki beberapa gelang emas, silver, dan rose gold. Jumlah berat seluruh gelang Rania adalah 32 gram. Berat gelang rose gold adalah setengah dari dua kali berat gelang emas ditambah berat gelang silver. Berat gelang emas
        ditambah dengan dua kali berat gelang silver dan ditambah lagi dengan berat gelang rose gold adalah 40 gram. Maka, berat masing-masing gelang Rania adalah ...
      </p>
      <p>
        <b>Penyelesaian:</b> <br />
        Langkah pertama yang dapat kita lakukan adalah menentukan{' '}
        <span>
          <div className="d-inline-block position-relative">
            <Tips>
              salah satu unsur <br /> pada SPLTV
            </Tips>
            <input type="text" className="form-control d-inline-block" style={{ width: '100px', textAlign: 'center' }} placeholder="..." />
          </div>
        </span>
        . Misalkan <br />
        Berat gelang emas = e <br />
        Berat gelang silver = s <br />
        Berat gelang rose gold = r ½
      </p>
      <p>
        <b>Diketahui:</b> <br />
        Jumlah berat seluruh gelang adalah 32 gram, sehingga
      </p>
      <p>e + s + r = 32 &emsp;&emsp;&emsp;............(1)</p>
      <p>Berat gelang rose gold adalah setengah dari dua kali berat gelang emas ditambah berat gelang silver, sehingga</p>
      <div className="d-flex gap-1 mb-2 align-items-center">
        <p className="mb-0">r = </p>
        <div>
          <p className="border-bottom border-black mb-0">1</p>
          <p className="mb-0">2</p>
        </div>
        <p className="mb-0">(2e + s)</p>
      </div>
      <p>2r = 2e + s</p>
      <p>2e - 2r + s = 0 &emsp;&emsp;&emsp;............(2)</p>
      <p>Berat gelang emas dijumlahkan dengan dua kali berat gelang silver dan dijumlahkan lagi dengan berat gelang rose gold adalah 40 gram, sehingga</p>
      <p>e + 2s + r = 40 &emsp;&emsp;&emsp;............(3)</p>
      <p>Maka kita ketahui tiga persamaan, yaitu</p>
      <p>e + s + r = 32 &emsp;&emsp;&emsp;............(1)</p>
      <p>2e - 2r + s = 0 &emsp;&emsp;&emsp;............(2)</p>
      <p>e + 2s + r = 40 &emsp;&emsp;&emsp;............(3)</p>
      <p>Setelah kita mengubahnya dalam bentuk SPLTV, kita dapat menyelesaikannya dengan metode yang telah kita pelajari. Mari kita selesaikan dengan metode campuran (eliminasi & substitusi)</p>
      <p className="mb-0">
        Eliminasi variabel
        <span>
          <div className="d-inline-block position-relative mx-2">
            <input type="text" className="form-control d-inline-block" style={{ width: '48px', textAlign: 'center' }} placeholder="..." />
          </div>
        </span>
        pada persamaan (1) dan (2)
      </p>
      <div className="d-inline-block ms-4">
        <Tips>variabel yang dieliminasi pada langkah berikut</Tips>
      </div>
      <div className="row justify-content-center">
        <div className="col-2">
          <p>e + s + r = 32</p>
          <p>2e - 2r + s = 0</p>
        </div>
        <div className="col-1 text-center">
          <p>| ×2 |</p>
          <p>| ×1 |</p>
        </div>
        <div className="col-6">
          <p>2e + 2s + 2r = 64</p>
          <p className="d-inline-block mb-1 pb-3 border-bottom border-black kurang position-relative pe-5">2e - 2r + s = 0</p>
          <p className="ps-4 ms-2 pt-2">4r - s = 64 &emsp;&emsp;&emsp;............(4)</p>
        </div>
      </div>
      <p>Eliminasi variabel e pada persamaan (1) dan (3)</p>
      <p>e + s + r = 32</p>
      <p className="d-inline-block mb-1 pb-3 border-bottom border-black kurang position-relative pe-5">e + 2s + r = 40</p>
      <p className="ps-4 ms-2 pt-2">- s = -8 </p>
      <div className="d-flex gap-2 align-items-center mb-2">
        <p className="ps-4 ms-3 mb-0">s = </p>
        <input type="text" className="form-control d-inline-block" style={{ width: '48px', textAlign: 'center' }} placeholder="..." />
        <Tips>kedua ruas dibagi dengan -1</Tips>
      </div>
      <p>Substitusi nilai variabel s ke persamaan (4)</p>
      <p>4r - s = 64</p>
      <p>4r - 8 = 64</p>
      <p className="ps-4">4r = 64 + 8</p>
      <p className="ps-4">4r = 72</p>
      <div className="d-flex gap-2 align-items-center mb-2">
        <p className="ps-4 ms-2 mb-0">r = </p>
        <input type="text" className="form-control d-inline-block" style={{ width: '48px', textAlign: 'center' }} placeholder="..." />
        <Tips>kedua ruas dibagi dengan 4</Tips>
      </div>
      <p>Kita telah mengetahui nilai variabel s dan r, substitusikan nilai tersebut ke persamaan (1)</p>
      <p>e + s + r = 32</p>

      <p className="mb-0">
        e +
        <span className="mx-1">
          <input type="text" className="form-control d-inline-block" style={{ width: '48px', textAlign: 'center' }} placeholder="..." />
        </span>
        +
        <span className="mx-1">
          <input type="text" className="form-control d-inline-block" style={{ width: '48px', textAlign: 'center' }} placeholder="..." />
        </span>
        = 32
      </p>
      <div className="d-inline-block mb-2">
        <Tips>nilai variabel s dan r</Tips>
      </div>
      <p className="mb-0">
        e +
        <span className="mx-1">
          <input type="text" className="form-control d-inline-block" style={{ width: '48px', textAlign: 'center' }} placeholder="..." />
        </span>
        = 32
      </p>
      <div className="d-inline-block mb-2">
        <Tips>hasil penjumlahan nilai variabel s dan r</Tips>
      </div>
      <div className="d-flex gap-2 align-items-center mb-2">
        <p className=" mb-0">e = </p>
        <input type="text" className="form-control d-inline-block" style={{ width: '48px', textAlign: 'center' }} placeholder="..." />
        <Tips>
          kedua ruas dikurangi dengan hasil <br />
          penjumlahan nilai variabel s dan r
        </Tips>
      </div>
      <p>Maka, kita telah mengetahu bahwa nilai variabel e=10,s=8, dan r=18. Jadi, berat gelang emas adalah 10 gram, berat gelang silver adalah 8 gram, dan berat gelang rose gold adalah 18 gram.</p>
      <p>
        <b>Bagaimana? Mudah bukan mempelajari SPLTV.</b> Perbanyaklah Latihan untuk memudahkan kalian mengubah suatu persoalan ke dalam bentuk persamaan linear untuk diselesaikan.
      </p>

      <div className="d-flex justify-content-center py-4">
        <NextButton link="/materi" />
      </div>
    </Main>
  );
}
