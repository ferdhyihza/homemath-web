import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';
import { useSearchParams } from 'react-router-dom';

export default function PenggunaanSPLTV2() {
  const [searchParams] = useSearchParams();
  const fromMateri = searchParams.get('from') == 'materi';

  const [inputValues, setInputValues] = useState({
    input65: '',
    input66: '',
    input67: '',
    input68: '',
    input69: '',
    input70: '',
    input71: '',
    input72: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input65: false,
    input66: false,
    input67: false,
    input68: false,
    input69: false,
    input70: false,
    input71: false,
    input72: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const [isBlurred3, setIsBlurred3] = useState(true);
  const [isBlurred4, setIsBlurred4] = useState(true);
  const [isBlurred5, setIsBlurred5] = useState(true);
  const section = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);

  const [sessionData] = useState(JSON.parse(localStorage.getItem('sessionData')));

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid = savedStatus.statuses.input65;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input66;
      setIsBlurred2(!allValid2);
      const allValid3 = savedStatus.statuses.input67;
      setIsBlurred3(!allValid3);
      const allValid4 = savedStatus.statuses.input68;
      setIsBlurred4(!allValid4);
      const allValid5 = savedStatus.statuses.input69 && savedStatus.statuses.input70 && savedStatus.statuses.input71 && savedStatus.statuses.input72;
      setIsBlurred5(!allValid5);

      if (!isBlurred && !isBlurred2 && !isBlurred3 && !isBlurred4 && !isBlurred5 && sessionData?.PenggunaanSPLTV2) {
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
        }
        if (!isBlurred5 && section5.current) {
          section5.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const newSessionData = {
            ...sessionData,
            PenggunaanSPLTV2: true,
          };
          localStorage.setItem('sessionData', JSON.stringify(newSessionData));
        }
      }
    }
  }, [isBlurred, isBlurred2, isBlurred3, isBlurred4, isBlurred5, sessionData]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input65' && value.replace(/\.|\s/g, '') == 'variabel') {
      isValid = true;
    } else if (inputName === 'input66' && value.replace(/\.|\s/g, '') == 'e') {
      isValid = true;
    } else if (inputName === 'input67' && value.replace(/\.|\s/g, '') == '8') {
      isValid = true;
    } else if (inputName === 'input68' && value.replace(/\.|\s/g, '') == '18') {
      isValid = true;
    } else if (inputName === 'input69' && value.replace(/\.|\s/g, '') == '8') {
      isValid = true;
    } else if (inputName === 'input70' && value.replace(/\.|\s/g, '') == '18') {
      isValid = true;
    } else if (inputName === 'input71' && value.replace(/\.|\s/g, '') == '26') {
      isValid = true;
    } else if (inputName === 'input72' && value.replace(/\.|\s/g, '') == '6') {
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
    const allValid = updatedStatus.statuses.input65;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatus.statuses.input66;
    setIsBlurred2(!allValid2);
    const allValid3 = updatedStatus.statuses.input67;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatus.statuses.input68;
    setIsBlurred4(!allValid4);
    const allValid5 = updatedStatus.statuses.input69 && updatedStatus.statuses.input70 && updatedStatus.statuses.input71 && updatedStatus.statuses.input72;
    setIsBlurred5(!allValid5);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Penggunaan SPLTV <span className="text-muted fw-medium ms-sm-2 fs-5">Pada Kehidupan Sehari-hari</span>
      </h3>
      <p>
        <b>Sudahkah memahami untuk apa kita mempelajari SPLTV?</b> <br />
        Untuk melatih kalian menerjemahkan soal cerita ke dalam bentuk sistem persamaan linear, mari kita coba lagi contoh berikut ini!
      </p>
      <div className="d-flex justify-content-center">
        <figure className="text-center w-25">
          <img className="img-fluid" src="/img/emas.jpg" alt="gambar gelang" />
          <figcaption className="fst-italic fw-light">gambar gelang</figcaption>
        </figure>
      </div>
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
            <input
              type="text"
              className={`form-control d-inline-block ${inputStatuses.input65 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input65 && !inputStatuses.input65 ? 'border-danger bg-danger-subtle' : ''}`}
              style={{ width: '100px', textAlign: 'center' }}
              placeholder="..."
              value={inputValues.input65}
              onChange={e => handleChange('input65', e)}
            />
          </div>
        </span>
        . Misalkan <br />
        Berat gelang emas = e <br />
        Berat gelang silver = s <br />
        Berat gelang rose gold = r
      </p>
      <div className={isBlurred ? 'blur' : ''}>
        <p ref={section}>
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
        <div className="d-inline-block ms-4">
          <Tips>variabel yang dieliminasi pada langkah berikut</Tips>
        </div>
        <p className="mb-0">
          Eliminasi variabel
          <span>
            <div className="d-inline-block position-relative mx-2">
              <input
                type="text"
                className={`form-control d-inline-block ${inputStatuses.input66 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input66 && !inputStatuses.input66 ? 'border-danger bg-danger-subtle' : ''}`}
                style={{ width: '48px', textAlign: 'center' }}
                placeholder="..."
                value={inputValues.input66}
                onChange={e => handleChange('input66', e)}
              />
            </div>
          </span>
          pada persamaan (1) dan (2)
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '550px' }}>
            <div className="" style={{ width: '150px' }}>
              <p>e + s + r = 32</p>
              <p>2e - 2r + s = 0</p>
            </div>
            <div className=" text-center" style={{ width: '100px' }}>
              <p>
                | <b>×2</b> |
              </p>
              <p>
                | <b>×1</b> |
              </p>
            </div>
            <div className="" style={{ width: '300px' }}>
              <p>2e + 2s + 2r = 64</p>
              <p className="d-inline-block mb-1 pb-3 border-bottom border-black kurang position-relative pe-5">2e - 2r + s = 0</p>
              <p className="ps-4 ms-2 pt-2">4r - s = 64 &emsp;&emsp;&emsp;............(4)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={isBlurred2 ? 'blur' : ''}>
        <p ref={section2}>Eliminasi variabel e pada persamaan (1) dan (3)</p>
        <p>e + s + r = 32</p>
        <p className="d-inline-block mb-1 pb-3 border-bottom border-black kurang position-relative pe-5">e + 2s + r = 40</p>
        <p className="ps-4 ms-2 pt-2">- s = -8 </p>
        <div className="d-flex gap-2 align-items-center mb-2">
          <p className="ps-2 mb-0">- s (-1) = -8 (-1) </p>
          <Tips>kedua ruas dibagi dengan -1</Tips>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2">
          <p className="ps-4 ms-3 mb-0">s = </p>
          <input
            type="text"
            className={`form-control d-inline-block ${inputStatuses.input67 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input67 && !inputStatuses.input67 ? 'border-danger bg-danger-subtle' : ''}`}
            style={{ width: '48px', textAlign: 'center' }}
            placeholder="..."
            value={inputValues.input67}
            onChange={e => handleChange('input67', e)}
          />
        </div>
      </div>

      <div className={isBlurred3 ? 'blur' : ''}>
        <p ref={section3}>Substitusi nilai variabel s ke persamaan (4)</p>
        <p>4r - s = 64</p>
        <p>4r - 8 = 64</p>
        <p className="">4r -8 + 8 = 64 + 8</p>
        <p className="ps-4 mb-2">4r = 72</p>
        <div className="d-flex ms-3 gap-2 align-items-center">
          <div className="d-inline-block">
            <p className="border-bottom border-black mb-0 d-inline-block">4r</p>
            <p className="text-center mb-0">4</p>
          </div>
          <span> = </span>
          <div className="d-inline-block">
            <p className="border-bottom border-black mb-0 d-inline-block">72</p>
            <p className="text-center mb-0">4</p>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center mb-2">
          <p className="ps-4 ms-2 mb-0">r = </p>
          <input
            type="text"
            className={`form-control d-inline-block ${inputStatuses.input68 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input68 && !inputStatuses.input68 ? 'border-danger bg-danger-subtle' : ''}`}
            style={{ width: '48px', textAlign: 'center' }}
            placeholder="..."
            value={inputValues.input68}
            onChange={e => handleChange('input68', e)}
          />
          <Tips>kedua ruas dibagi dengan 4</Tips>
        </div>
      </div>

      <div className={isBlurred4 ? 'blur' : ''}>
        <p ref={section4}>Kita telah mengetahui nilai variabel s dan r, substitusikan nilai tersebut ke persamaan (1)</p>
        <p>e + s + r = 32</p>

        <p className="mb-0">
          e +
          <span className="mx-1">
            <input
              type="text"
              className={`form-control d-inline-block ${inputStatuses.input69 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input69 && !inputStatuses.input69 ? 'border-danger bg-danger-subtle' : ''}`}
              style={{ width: '48px', textAlign: 'center' }}
              placeholder="..."
              value={inputValues.input69}
              onChange={e => handleChange('input69', e)}
            />
          </span>
          +
          <span className="mx-1">
            <input
              type="text"
              className={`form-control d-inline-block ${inputStatuses.input70 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input70 && !inputStatuses.input70 ? 'border-danger bg-danger-subtle' : ''}`}
              style={{ width: '48px', textAlign: 'center' }}
              placeholder="..."
              value={inputValues.input70}
              onChange={e => handleChange('input70', e)}
            />
          </span>
          = 32
        </p>
        <div className="d-inline-block mb-2">
          <Tips>nilai variabel s dan r</Tips>
        </div>
        <p className="mb-0">
          e +
          <span className="mx-1">
            <input
              type="text"
              className={`form-control d-inline-block ${inputStatuses.input71 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input71 && !inputStatuses.input71 ? 'border-danger bg-danger-subtle' : ''}`}
              style={{ width: '48px', textAlign: 'center' }}
              placeholder="..."
              value={inputValues.input71}
              onChange={e => handleChange('input71', e)}
            />
          </span>
          = 32
        </p>
        <div className="d-inline-block mb-2">
          <Tips>hasil penjumlahan nilai variabel s dan r</Tips>
        </div>
        <p className="mb-2">e + 26 - 26 = 32 - 26</p>
        <div className="d-flex gap-2 align-items-center mb-2">
          <p className=" mb-0">e = </p>
          <input
            type="text"
            className={`form-control d-inline-block ${inputStatuses.input72 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input72 && !inputStatuses.input72 ? 'border-danger bg-danger-subtle' : ''}`}
            style={{ width: '48px', textAlign: 'center' }}
            placeholder="..."
            value={inputValues.input72}
            onChange={e => handleChange('input72', e)}
          />
          <Tips>
            kedua ruas dikurangi dengan hasil <br />
            penjumlahan nilai variabel s dan r
          </Tips>
        </div>
      </div>

      <div ref={section5} className={isBlurred5 ? 'blur' : ''}>
        <p>Maka, kita telah mengetahu bahwa nilai variabel e=6,s=8, dan r=18. Jadi, berat gelang emas adalah 6 gram, berat gelang silver adalah 8 gram, dan berat gelang rose gold adalah 18 gram.</p>
        <p>
          <b>Bagaimana? Mudah bukan mempelajari SPLTV.</b> Perbanyaklah Latihan untuk memudahkan kalian mengubah suatu persoalan ke dalam bentuk persamaan linear untuk diselesaikan.
        </p>

        <div className="d-flex justify-content-center py-4">
          <NextButton confirmation={sessionData?.PenggunaanSPLTV2} backToSubjectMatter={fromMateri && sessionData?.PenggunaanSPLTV2} goToFormativeTest={true} link={fromMateri && sessionData?.PenggunaanSPLTV2 ? '/materi' : '/tes-formatif'}>
            Tes Formatif
          </NextButton>
        </div>
      </div>
    </Main>
  );
}
