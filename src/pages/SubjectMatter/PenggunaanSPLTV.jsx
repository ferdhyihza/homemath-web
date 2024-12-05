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
    inputr7: '',
    inputr8: '',
    inputr9: '',
    inputr10: '',
    inputr11: '',
    inputr12: '',
    inputr13: '',
    inputr14: '',
    inputr15: '',
    inputr16: '',
    inputr17: '',
    inputr18: '',
    inputr19: '',
    inputr20: '',
    inputr21: '',
    inputr22: '',
    inputr23: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input61: false,
    input62: false,
    input63: false,
    input64: false,
    inputr7: false,
    inputr8: false,
    inputr9: false,
    inputr10: false,
    inputr11: false,
    inputr12: false,
    inputr13: false,
    inputr14: false,
    inputr15: false,
    inputr16: false,
    inputr17: false,
    inputr18: false,
    inputr19: false,
    inputr20: false,
    inputr21: false,
    inputr22: false,
    inputr23: false,
  });
  const [isBlurred0, setIsBlurred0] = useState(true);
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const [isBlurred3, setIsBlurred3] = useState(true);
  const [isBlurred4, setIsBlurred4] = useState(true);
  const section0 = useRef(null);
  const section = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const [sessionData] = useState(JSON.parse(localStorage.getItem('sessionData')));

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid0 = savedStatus.statuses.inputr7 && savedStatus.statuses.inputr8 && savedStatus.statuses.inputr9;
      setIsBlurred0(!allValid0);
      const allValid = savedStatus.statuses.input61;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input62 && savedStatus.statuses.inputr10 && savedStatus.statuses.inputr11;
      setIsBlurred2(!allValid2);
      const allValid3 =
        savedStatus.statuses.input63 &&
        savedStatus.statuses.inputr12 &&
        savedStatus.statuses.inputr13 &&
        savedStatus.statuses.inputr14 &&
        savedStatus.statuses.inputr15 &&
        savedStatus.statuses.inputr16 &&
        savedStatus.statuses.inputr17 &&
        savedStatus.statuses.inputr18 &&
        savedStatus.statuses.inputr19 &&
        savedStatus.statuses.inputr20 &&
        savedStatus.statuses.inputr21 &&
        savedStatus.statuses.inputr22 &&
        savedStatus.statuses.inputr23;
      setIsBlurred3(!allValid3);
      const allValid4 = savedStatus.statuses.input64;
      setIsBlurred4(!allValid4);
    }

    if (!isBlurred0 && !isBlurred && !isBlurred2 && !isBlurred3 && !isBlurred4 && sessionData?.PenggunaanSPLTV) {
      return;
    } else {
      if (!isBlurred0 && section0.current) {
        section0.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
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
  }, [isBlurred0, isBlurred, isBlurred2, isBlurred3, isBlurred4, sessionData]);

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
    } else if (inputName === 'input64' && value.replace(/\.|\s/g, '') == '4') {
      isValid = true;
    } else if (inputName === 'inputr7' && value.replace(/\.|\s/g, '') == 'x+y+z=16') {
      isValid = true;
    } else if (inputName === 'inputr8' && value.replace(/\.|\s/g, '') == 'x+y-z=-2') {
      isValid = true;
    } else if (inputName === 'inputr9' && value.replace(/\.|\s/g, '') == '79x-11y-20z=13') {
      isValid = true;
    } else if (inputName === 'inputr10' && value.replace(/\.|\s/g, '') == '176') {
      isValid = true;
    } else if (inputName === 'inputr11' && value.replace(/\.|\s/g, '') == '90x') {
      isValid = true;
    } else if (inputName === 'inputr12' && value.replace(/\.|\s/g, '') == '90x') {
      isValid = true;
    } else if (inputName === 'inputr13' && value.replace(/\.|\s/g, '') == '90x') {
      isValid = true;
    } else if (inputName === 'inputr14' && value.replace(/\.|\s/g, '') == '90x') {
      isValid = true;
    } else if (inputName === 'inputr15' && value.replace(/\.|\s/g, '') == '90x') {
      isValid = true;
    } else if (inputName === 'inputr16' && value.replace(/\.|\s/g, '') == '90x') {
      isValid = true;
    } else if (inputName === 'inputr17' && value.replace(/\.|\s/g, '') == '189') {
      isValid = true;
    } else if (inputName === 'inputr18' && value.replace(/\.|\s/g, '') == '189') {
      isValid = true;
    } else if (inputName === 'inputr19' && value.replace(/\.|\s/g, '') == '189') {
      isValid = true;
    } else if (inputName === 'inputr20' && value.replace(/\.|\s/g, '') == '189+81') {
      isValid = true;
    } else if (inputName === 'inputr21' && value.replace(/\.|\s/g, '') == '270') {
      isValid = true;
    } else if (inputName === 'inputr22' && value.replace(/\.|\s/g, '') == '270') {
      isValid = true;
    } else if (inputName === 'inputr23' && value.replace(/\.|\s/g, '') == '90') {
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
    const allValid0 = updatedStatus.statuses.inputr7 && updatedStatus.statuses.inputr8 && updatedStatus.statuses.inputr9;
    setIsBlurred0(!allValid0);
    const allValid = updatedStatus.statuses.input61;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatus.statuses.input62 && updatedStatus.statuses.inputr10 && updatedStatus.statuses.inputr11;
    setIsBlurred2(!allValid2);
    const allValid3 =
      updatedStatus.statuses.input63 &&
      updatedStatus.statuses.inputr12 &&
      updatedStatus.statuses.inputr13 &&
      updatedStatus.statuses.inputr14 &&
      updatedStatus.statuses.inputr15 &&
      updatedStatus.statuses.inputr16 &&
      updatedStatus.statuses.inputr17 &&
      updatedStatus.statuses.inputr18 &&
      updatedStatus.statuses.inputr19 &&
      updatedStatus.statuses.inputr20 &&
      updatedStatus.statuses.inputr21 &&
      updatedStatus.statuses.inputr22 &&
      updatedStatus.statuses.inputr23;
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
        Naura menemukan tiga benda di atas meja ruang kelas, dadu, kelereng, dan bidak catur. Terdapat catatan informasi mengenai berat ketiga benda tersebut dalam satuan Newton. Informasi mengatakan jumlah berat ketiga benda tersebut
        adalah 16. Berat dadu dijumlahkan dengan berat kelereng sama dengan berat bidak catur dikurangi dua. 79 kali berat dadu dikurangi 11 kali berat kelereng dan dikurangi lagi dengan 20 kali berat bidak catur sama dengan 13. Berapa
        berat masing-masing benda tersebut?
      </p>
      <figure className="text-center">
        <img className="img-fluid" src="/img/penggunaan-spltv.png" alt="video ilustrasi" style={{ maxWidth: '144px' }} />
        {/* <figcaption className="fst-italic fw-light">Ilustrasi [video]</figcaption> */}
      </figure>
      <p>
        <b>Penyelesaian:</b> <br />
        Kita susun terlebih dahulu informasi yang didapatkan sebagai berikut. <br />
        1. Terdapat tiga benda, dadu, kelereng, dan bidak catur yang ingin diketahui masing-masing beratnya. Sehingga dapat kita misalkan berat ketiga benda tersebut menjadi variabel. Misalkan berat dadu adalah x, berat kelereng adalah y,
        dan berat bidak catur adalah z. <br />
        2. Jumlah berat ketiga benda tersebut adalah 16. Sehingga x + y + z = 16. <br />
        3. Berat dadu dijumlahkan dengan berat kelereng sama dengan berat bidak catur dikurangi dua. Sehingga x + y = z - 2. <br />
        4. 79 kali berat dadu dikurangi 11 kali berat kelereng dan dikurangi lagi dengan 20 kali berat bidak catur sama dengan 13. Sehingga 79x - 11y - 20z = 13.
      </p>
      <p>
        Berdasarkan informasi di atas, kita telah mendapatkan tiga persamaan linear, yaitu <br />
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
        79x - 11y - 20z = 13 &emsp;&emsp;&emsp;............(3)
      </p>
      <p>
        Kita telah mendapatkan tiga persamaan linear, yaitu <br />
        <span>
          <input
            className={`form-control my-1 d-inline-block ${inputStatuses.inputr7 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr7 && !inputStatuses.inputr7 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '200px' }}
            value={inputValues.inputr7}
            onChange={e => handleChange('inputr7', e)}
          />
        </span>
        &emsp;&emsp;&emsp;............(1)
        <br />
        <span>
          <input
            className={`form-control my-1 d-inline-block ${inputStatuses.inputr8 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr8 && !inputStatuses.inputr8 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '200px' }}
            value={inputValues.inputr8}
            onChange={e => handleChange('inputr8', e)}
          />
        </span>
        &emsp;&emsp;&emsp;............(2)
        <br />
        <span>
          <input
            className={`form-control my-1 d-inline-block ${inputStatuses.inputr9 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr9 && !inputStatuses.inputr9 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '200px' }}
            value={inputValues.inputr9}
            onChange={e => handleChange('inputr9', e)}
          />
        </span>
        &emsp;&emsp;&emsp;............(3)
      </p>
      <div className={`${isBlurred0 ? 'blur' : ''}`}>
        <p ref={section0}>Untuk menyelesaikannya, kita dapat menggunakan tiga metode yang telah kalian pelajari. Di sini akan dicontohkan alternatif penyelesaian dengan metode campuran (eliminiasi dan substitusi).</p>
        <p>
          <b>Langkahnya adalah sebagai berikut</b> <br />
          <em>yuk lengkapi kolom rumpang pada setiap langkahnya untuk membantu mengasah kemampuan kalian</em>
        </p>
        <p>1. Eliminasi variabel x pada persamaan (1) dan (2) dengan mengurangi persamaan (1) dengan persamaan (2). Sehingga,</p>
        <p className="mb-0">x + y + z = 16</p>
        <p className="d-inline-block mb-1 pe-5 pb-1 border-bottom border-black kurang position-relative">x + y - z = -2</p>
        <p className="mb-0 ps-4 ms-2">2z = 18</p>
        <div className="d-flex ps-4 ms-2 gap-2">
          <div className="d-inline-block">
            <p className="border-bottom border-black mb-0 d-inline-block">2z</p>
            <p className="text-center mb-0">2</p>
          </div>
          <span>=</span>
          <div className="d-inline-block">
            <p className="border-bottom border-black mb-0 d-inline-block">18</p>
            <p className="text-center mb-0">2</p>
          </div>
        </div>
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
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>
          2. Eliminasi variabel x pada persamaan (1) dan (3) dengan menjumlahkan persamaan (1) dengan persamaan (3). Namun, terlebih dahulu kita kalikan persamaan (1) dengan 11 dan kalikan persamaan (3) dengan 1 agar koefisien variabel x
          habis dijumlahkan. Sehingga,
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '800px' }}>
            <div className="" style={{ width: '200px' }}>
              <p>x + y + z = 16</p>
              <p>79x - 11y - 20z = 13</p>
            </div>
            <div className=" text-center" style={{ width: '100px' }}>
              <p>
                | <b>×11</b> |
              </p>
              <p>
                | <b>×1</b> |
              </p>
            </div>
            <div className="" style={{ width: '500px' }}>
              <p className="mb-1">
                11x + 11y + 11z ={' '}
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr10 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr10 && !inputStatuses.inputr10 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '48px' }}
                    value={inputValues.inputr10}
                    onChange={e => handleChange('inputr10', e)}
                  />
                </span>
              </p>
              <p className="d-inline-block mb-1 pb-3 border-bottom border-black tambah position-relative pe-5">79x - 11y - 20z = 13</p>
              <div className="d-flex mt-2 gap-2 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                  <p className="mb-0 ps-4 ms-3">
                    <span>
                      <input
                        className={`form-control d-inline-block ${inputStatuses.inputr11 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr11 && !inputStatuses.inputr11 ? 'border-danger bg-danger-subtle' : ''}`}
                        type="text"
                        placeholder="..."
                        style={{ textAlign: 'center', width: '64px' }}
                        value={inputValues.inputr11}
                        onChange={e => handleChange('inputr11', e)}
                      />
                    </span>{' '}
                    - 9z =
                  </p>
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
        <p ref={section2}>3. Selanjutnya, kita bisa mensubstitusikan nilai variabel z atau persamaan (4) ke dalam persamaan (5), sehingga</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '400px' }}>
            <div className=" text-end" style={{ width: '150px' }}>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr12 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr12 && !inputStatuses.inputr12 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr12}
                    onChange={e => handleChange('inputr12', e)}
                  />
                </span>{' '}
                - 9z
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr13 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr13 && !inputStatuses.inputr13 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr13}
                    onChange={e => handleChange('inputr13', e)}
                  />
                </span>{' '}
                - 9(9)
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr14 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr14 && !inputStatuses.inputr14 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr14}
                    onChange={e => handleChange('inputr14', e)}
                  />
                </span>{' '}
                - 81
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr15 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr15 && !inputStatuses.inputr15 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr15}
                    onChange={e => handleChange('inputr15', e)}
                  />
                </span>
                <span> - 81 + 81</span>
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr16 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr16 && !inputStatuses.inputr16 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr16}
                    onChange={e => handleChange('inputr16', e)}
                  />
                </span>
              </p>
              <div className="d-inline-block pt-4">
                <p className="border-bottom border-black mb-0 d-inline-block">90x</p>
                <p className="text-center">90</p>
              </div>
              <p className="pt-3">x</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p className="mb-4 mt-1">=</p>
              <p className="mb-3 pb-1">=</p>
              <p className="mb-4">=</p>
              <p className="mb-4">=</p>
              <p className="mb-4">=</p>
              <p className="pt-4">=</p>
              <p className="pt-4 mt-4">=</p>
            </div>
            <div className="" style={{ width: '200px' }}>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr17 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr17 && !inputStatuses.inputr17 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr17}
                    onChange={e => handleChange('inputr17', e)}
                  />
                </span>
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr18 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr18 && !inputStatuses.inputr18 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr18}
                    onChange={e => handleChange('inputr18', e)}
                  />
                </span>
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr19 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr19 && !inputStatuses.inputr19 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr19}
                    onChange={e => handleChange('inputr19', e)}
                  />
                </span>
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr20 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr20 && !inputStatuses.inputr20 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '128px' }}
                    value={inputValues.inputr20}
                    onChange={e => handleChange('inputr20', e)}
                  />
                </span>
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr21 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr21 && !inputStatuses.inputr21 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr21}
                    onChange={e => handleChange('inputr21', e)}
                  />
                </span>
              </p>
              <p className="mb-2 pb-2 d-inline-block border-bottom border-black">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr22 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr22 && !inputStatuses.inputr22 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr22}
                    onChange={e => handleChange('inputr22', e)}
                  />
                </span>
              </p>
              <p className="mb-2">
                <span>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputr23 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputr23 && !inputStatuses.inputr23 ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '64px' }}
                    value={inputValues.inputr23}
                    onChange={e => handleChange('inputr23', e)}
                  />
                </span>
              </p>
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
        <p ref={section3}>
          4. Setelah kita mengetahui nilai variabel x dan z, kita dapat mensubstitusikannya ke salah satu persamaan (1), (2), atau (3) untuk mengetahui nilai variabel y. Di sini kita coba substitusikan ke persamaan (1), maka
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '250px' }}>
            <div className=" text-end" style={{ width: '100px' }}>
              <p>x + y + z</p>
              <p>3 + y + 9</p>
              <p>12 + y</p>
              <p>12 - 12 + y</p>
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
              <p>16 - 12</p>
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
        <p>5. Setelah kita menyelesaikan langkah-langkah tersebut, kita telah mengetahui nilai variabel x = 3, y = 4, dan z = 9.</p>
        <p>Ingat kembali bahwa berat dadu adalah x, berat kelereng adalah y, dan berat bidak catur adalah z. Jadi, berat dadu adalah 3 Newton, berat kelereng adalah 4 Newton, dan berat bidak catur adalah 9 Newton.</p>
        <div className="d-flex justify-content-center py-4">
          <NextButton link={`/materi/penggunaan-spltv-2` + (from ? '?from=materi' : '')}></NextButton>
        </div>
      </div>
    </Main>
  );
}
