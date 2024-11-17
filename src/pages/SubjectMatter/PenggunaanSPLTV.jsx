import { useSearchParams } from 'react-router-dom';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';
import { useEffect, useRef, useState } from 'react';

export default function PenggunaanSPLTV() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') == 'materi';

  const [inputValues, setInputValues] = useState({
    input61: '',
    input62: '',
    input63: '',
    input64: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input61: false,
    input62: false,
    input63: false,
    input64: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const [isBlurred3, setIsBlurred3] = useState(true);
  const [isBlurred4, setIsBlurred4] = useState(true);
  const section = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid = savedStatus.statuses.input61;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input62;
      setIsBlurred2(!allValid2);
      const allValid3 = savedStatus.statuses.input63;
      setIsBlurred3(!allValid3);
      const allValid4 = savedStatus.statuses.input64;
      setIsBlurred4(!allValid4);
    }

    const sessionData = JSON.parse(localStorage.getItem('sessionData'));
    if (!isBlurred && !isBlurred2 && !isBlurred3 && !isBlurred4 && sessionData?.PenggunaanSPLTV) {
      return;
    } else {
      if (!isBlurred && section.current) {
        section.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!isBlurred2 && section2.current) {
        section2.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!isBlurred3 && section3.current) {
        section3.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!isBlurred4 && section4.current) {
        section4.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const newSessionData = {
          ...sessionData,
          PenggunaanSPLTV: true,
        };
        localStorage.setItem('sessionData', JSON.stringify(newSessionData));
      }
    }
  }, [isBlurred, isBlurred2, isBlurred3, isBlurred4]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input61' && value.replace(/\.|\s/g, '') == '9') {
      isValid = true;
    } else if (inputName === 'input62' && value.replace(/\.|\s/g, '') == '189') {
      isValid = true;
    } else if (inputName === 'input63' && value.replace(/\.|\s/g, '') == '3') {
      isValid = true;
    } else if (inputName === 'input64' && value.replace(/\.|\s/g, '') == '5') {
      isValid = true;
    }

    // Update state untuk value dan status validasi input tertentu
    const updatedValues = {
      ...inputValues,
      [inputName]: value,
    };
    const updatedStatuses = {
      ...inputStatuses,
      [inputName]: isValid,
    };

    setInputValues(updatedValues);
    setInputStatuses(updatedStatuses);

    // Simpan ke localStorage secara real-time
    const updatedStatus = {
      values: updatedValues,
      statuses: updatedStatuses,
    };
    localStorage.setItem('inputStatuses', JSON.stringify(updatedStatus));

    // Periksa apakah semua input sudah valid
    const allValid = updatedStatus.statuses.input61;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatus.statuses.input62;
    setIsBlurred2(!allValid2);
    const allValid3 = updatedStatus.statuses.input63;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatus.statuses.input64;
    setIsBlurred4(!allValid4);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Penggunaan SPLTV <span className="text-muted fw-medium ms-sm-2 fs-5">Pada Kehidupan Sehari-hari</span>
      </h3>
      <p>
        <b>Untuk apa kita mempelajari SPLTV?</b> <br />
        Seperti yang telah kalian pelajari sebelumnya, SPLTV dapat membantu kita memecahkan permasalahan dengan mengubah variabel yang diketahui ke dalam bentuk sistem persamaan linear. Kita harus mampu mengidentifikasi dan menerjemahkan
        soal cerita atau informasi ilmiah ke dalam kalimat matematika yang berbentuk sistem persamaan linear. Biasanya, SPLTV diaplikasikan atau diterapkan dalam bidang perdagangan, penjualan barang, maupun segala sesuatu yang dapat kalian
        terjemahkan ke bentuk sistem persamaan linear.
      </p>
      <p>
        <b> Perhatikan contoh berikut ini!</b> <br />
        Terdapat bilangan yang terdiri dari tiga angka. Jumlah ketiga angka tersebut adalah 16. Angka pertama dijumlahkan dengan angka kedua nilainya sama dengan angka ketiga dikurangi dua. Besar nilai bilangan tersebut adalah 21 dikali
        dengan jumlah ketiga angkanya kemudian dijumlahkan dengan 13. Berapa besar nilai bilangan tersebut?
      </p>
      <figure className="text-center">
        <img className="img-fluid" src="../img/ilustrasi-pengantar-spltv.png" alt="video ilustrasi" />
        <figcaption className="fst-italic fw-light">Ilustrasi [video]</figcaption>
      </figure>
      <p>
        <b>Penyelesaian:</b> <br />
        Berdasarkan pernyataan tersebut, kita dapat mengidentifikasi: <br />
        1. Misalkan bilangan tersebut adalah xyz, maka x menempati nilai ratusan, y menempati nilai puluhan, dan z menempati nilai satuan. Sehingga dapat kita dapat menuliskannya dengan 100x+10y+z <br />
        2. Jumlah ketiga angkanya adalah 16, sehingga x+y+z=16 <br />
        3. Angka pertama dijumlahkan dengan angka kedua nilainya sama dengan angka ketiga dikurangi dua, sehingga x+y=z-2 <br />
        4. Besar nilai bilangan tersebut adalah 21 dikali dengan jumlah ketiga angkanya kemudian dijumlahkan dengan 13, sehingga 21(x+y+z)+13=100x+10y+z
      </p>
      <p>
        Berdasarkan keempat identifikasi yang kita susun, <br />
        diketahui: <br />
      </p>
      <p>
        Persamaan 1 <br />x + y + z = 16 &emsp;&emsp;&emsp;............(1)
      </p>
      <p>
        Persamaan 2 <br />
        x + y = z - 2 <br />⇔ x + y - z = -2 &emsp;&emsp;&emsp;............(2)
      </p>
      <p>
        Persamaan 3 <br />
        21(x + y + z) + 13 = 100x + 10y + z <br />
        ⇔ 21x + 21y + 21z + 13 = 100x + 10y + z <br />
        ⇔ 21x - 100x + 21y - 10y + 21z - z = -13 <br />
        ⇔ -79x + 11y + 20z = -13 <br />⇔ 79x - 11y - 20z = 13 &emsp;&emsp;&emsp;............(3)
      </p>
      <p>
        Kita telah mendapatkan tiga persamaan linear, yaitu <br />
        x + y + z = 16 &emsp;&emsp;&emsp;............(1)
        <br />
        x + y - z = -2 &emsp;&emsp;&emsp;............(2)
        <br />
        79x - 11y - 20z = 13 &emsp;&emsp;&emsp;............(3)
      </p>
      <p>Untuk menyelesaikannya, kita dapat menggunakan tiga metode yang telah kalian pelajari. Di sini akan dicontohkan alternatif penyelesaian dengan metode campuran (eliminiasi dan substitusi).</p>
      <p>
        <b>Langkahnya adalah sebagai berikut</b> <br />
        <em>yuk lengkapi kolom rumpang pada setiap langkahnya untuk membantu mengasah kemampuan kalian</em>
      </p>
      <p>Eliminasi variabel x pada persamaan (1) dan (2)</p>
      <p className="mb-0">x + y + z = 16</p>
      <p className="d-inline-block mb-1 pe-5 pb-1 border-bottom border-black kurang position-relative">x + y - z = -2</p>
      <p className="mb-0 ps-4 ms-2">2z = 18</p>
      <div className="d-inline-block mb-2">
        <div className="d-flex gap-2 align-items-center">
          <p className="mb-0 ps-4 ms-3">z =</p>
          <input
            type="text"
            className={`form-control ${inputStatuses.input61 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input61 && !inputStatuses.input61 ? 'border-danger bg-danger-subtle' : ''}`}
            placeholder="..."
            style={{ width: '48px', textAlign: 'center' }}
            value={inputValues.input61}
            onChange={e => handleChange('input61', e)}
          />
          <p className="mb-0 ">............(4)</p>
        </div>
        <Tips>kedua ruas dibagi dengan 2</Tips>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>Eliminasi variabel x pada persamaan (1) dan (3)</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '800px' }}>
            <div className="" style={{ width: '200px' }}>
              <p>x + y + z = 16</p>
              <p>79x - 11y - 20z = 13</p>
            </div>
            <div className=" text-center" style={{ width: '100px' }}>
              <p>| ×11 |</p>
              <p>| ×1 |</p>
            </div>
            <div className="" style={{ width: '500px' }}>
              <p>11x + 11y + 11z = 176</p>
              <p className="d-inline-block mb-1 pb-3 border-bottom border-black tambah position-relative pe-5">79x - 11y - 20z = 13</p>
              <div className="d-flex gap-2 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <p className="mb-0 ps-4 ms-3">90x - 9z =</p>
                  <input
                    type="text"
                    className={`form-control ${inputStatuses.input62 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input62 && !inputStatuses.input62 ? 'border-danger bg-danger-subtle' : ''}`}
                    placeholder="..."
                    style={{ width: '64px', textAlign: 'center' }}
                    value={inputValues.input62}
                    onChange={e => handleChange('input62', e)}
                  />
                  <p className="mb-0 ">............(5)</p>
                </div>
                <Tips>hasil operasi pada ruas kanan</Tips>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>Substitusikan nilai variabel z atau persamaan (4) ke persamaan (5), sehingga</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '350px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>90x - 9z</p>
              <p>90x - 9(9)</p>
              <p>90x - 81</p>
              <p>90x</p>
              <p>90x</p>
              <p className="pt-2">x</p>
              <p className="pt-2">x</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '200px' }}>
              <p>189</p>
              <p>189</p>
              <p>189</p>
              <p>189 - 81</p>
              <p>270</p>
              <p className="mb-0 d-inline-block border-bottom border-black">270</p>
              <p className="mb-0">&nbsp;&nbsp;90</p>
              <div className="d-inline-block mb-2">
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="text"
                    className={`form-control ${inputStatuses.input63 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input63 && !inputStatuses.input63 ? 'border-danger bg-danger-subtle' : ''}`}
                    placeholder="..."
                    style={{ width: '64px', textAlign: 'center' }}
                    value={inputValues.input63}
                    onChange={e => handleChange('input63', e)}
                  />
                  <p className="mb-0 ">............(6)</p>
                </div>
                <Tips>hasil operasi pada ruas kanan</Tips>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>Setelah kita mengetahui nilai variabel x dan z, kita dapat mensubstitusikannya ke salah satu persamaan (1), (2), atau (3) untuk mengetahui nilai variabel y. Di sini kita substitusikan ke persamaan (1), maka</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '250px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>x + y + z</p>
              <p>3 + y + 9</p>
              <p>31 + y</p>
              <p>y</p>
              <p className="pt-2">y</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="pt-2">=</p>
            </div>
            <div className="" style={{ width: '100px' }}>
              <p>16</p>
              <p>16</p>
              <p>16</p>
              <p>16 - 11</p>
              <div className="d-inline-block mb-2">
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="text"
                    className={`form-control ${inputStatuses.input64 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input64 && !inputStatuses.input64 ? 'border-danger bg-danger-subtle' : ''}`}
                    placeholder="..."
                    style={{ width: '64px', textAlign: 'center' }}
                    value={inputValues.input64}
                    onChange={e => handleChange('input64', e)}
                  />
                </div>
                <Tips>hasil operasi pada ruas kanan</Tips>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={section4} className={`${isBlurred4 ? 'blur' : ''}`}>
        <p>Setelah kita menyelesaikan langkah-langkah tersebut, kita telah mengetahui nilai variabel x=3,y=4, dan z=9. Jadi, bilangan tersebut adalah 349.</p>

        <div className="d-flex justify-content-center py-4">
          <NextButton link={`/materi/penggunaan-spltv-2` + (from ? '?from=materi' : '')} />
        </div>
      </div>
    </Main>
  );
}
