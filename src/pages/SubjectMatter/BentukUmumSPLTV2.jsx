import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';
import { useSearchParams } from 'react-router-dom';

export default function BentukUmumSPLTV2() {
  const [searchParams] = useSearchParams();
  const fromMateri = searchParams.get('from') == 'materi';

  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    inputt1: '',
    inputt2: '',
    inputt3: '',
    inputt4: '',
    inputt5: '',
    inputt6: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
    input5: false,
    input6: false,
    input7: false,
    inputt1: false,
    inputt2: false,
    inputt3: false,
    inputt4: false,
    inputt5: false,
    inputt6: false,
  });
  const [isBlurred0, setIsBlurred0] = useState(true);
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const section0 = useRef(null);
  const section = useRef(null);
  const section2 = useRef(null);
  const [sessionData] = useState(JSON.parse(localStorage.getItem('sessionData')));

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    if (savedStatus) {
      setInputValues(savedStatus.values);
      setInputStatuses(savedStatus.statuses);
      // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
      const allValid0 = savedStatus.statuses.inputt1 && savedStatus.statuses.inputt2 && savedStatus.statuses.inputt3 && savedStatus.statuses.inputt4 && savedStatus.statuses.inputt5 && savedStatus.statuses.inputt6;
      setIsBlurred0(!allValid0);
      const allValid = savedStatus.statuses.input1 && savedStatus.statuses.input2 && savedStatus.statuses.input3;
      setIsBlurred(!allValid);
      const allValid2 = savedStatus.statuses.input4 && savedStatus.statuses.input5 && savedStatus.statuses.input6 && savedStatus.statuses.input7;
      setIsBlurred2(!allValid2);
    }

    if (!isBlurred0 && !isBlurred && !isBlurred2 && sessionData?.BentukUmumSPLTV2) {
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
        const newSessionData = {
          ...sessionData,
          BentukUmumSPLTV2: true,
        };
        localStorage.setItem('sessionData', JSON.stringify(newSessionData));
      }
    }
  }, [isBlurred0, isBlurred, isBlurred2, sessionData]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input1' && value === 'x') {
      isValid = true;
    } else if (inputName === 'input2' && value === 'y') {
      isValid = true;
    } else if (inputName === 'input3' && value === 'z') {
      isValid = true;
    } else if (inputName === 'input4' && value.replace(/\./g, '') == '24000000') {
      isValid = true;
    } else if (inputName === 'input5' && value == '2') {
      isValid = true;
    } else if (inputName === 'input6' && value == '7') {
      isValid = true;
    } else if (inputName === 'input7' && value.replace(/\./g, '') == '19700000') {
      isValid = true;
    } else if (inputName === 'inputt1' && value.replace(/\./g, '') == '20700000') {
      isValid = true;
    } else if (inputName === 'inputt2' && value.replace(/\./g, '') == '5') {
      isValid = true;
    } else if (inputName === 'inputt3' && value.replace(/\./g, '') == '24000000') {
      isValid = true;
    } else if (inputName === 'inputt4' && value.replace(/\./g, '') == '2') {
      isValid = true;
    } else if (inputName === 'inputt5' && value.replace(/\./g, '') == '7') {
      isValid = true;
    } else if (inputName === 'inputt6' && value.replace(/\./g, '') == '19700000') {
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
    const allValid0 = updatedStatus.statuses.inputt1 && updatedStatus.statuses.inputt2 && updatedStatus.statuses.inputt3 && updatedStatus.statuses.inputt4 && updatedStatus.statuses.inputt5 && updatedStatus.statuses.inputt6;
    setIsBlurred0(!allValid0);
    const allValid = updatedStatuses.input1 && updatedStatuses.input2 && updatedStatuses.input3;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatuses.input4 && updatedStatuses.input5 && updatedStatuses.input6 && updatedStatuses.input7;
    setIsBlurred2(!allValid2);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">Bentuk Umum SPLTV</h3>
      <p className="fw-bold">
        Ingatkah teman-teman pada cerita pada awal pembelajaran yang telah kalian pelajari kali ini? <br />
        Apakah dapat kita selesaikan dengan SPLTV?
      </p>
      <p>
        Setelah memahami bentuk umum SPLTV, teman-teman dapat mengubah cerita tersebut ke dalam bentuk SPLTV untuk diselesaikan. <br />
        Yuk kita coba mengubahnya ke dalam bentuk SPLTV
      </p>
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
      <p>
        <b>Penyelesaian:</b> <br />
        Langkah pertama, kita dapat mengidentifikasi apa saja unsur yang muncul pada cerita tersebut. Kita mengetahui terdapat kain warna putih, warna abu-abu, dan warna cokelat, ketiga warna kain tersebut merupakan unsur variabel. Jumlah
        dari banyaknya tiap kain yang dibeli oleh konveksi, merupakan koefisien. Adapun jumlah total biaya yang harus dibayarkan untuk membeli kain, merupakan konstanta.
      </p>
      <p>
        <b>Yuk coba ilustrasi berikut!</b> <br />
        Untuk memudahkan kalian, kita bisa menyusunnya dalam bentuk tabel seperti berikut.
      </p>
      <div className="overflow-x-auto">
        <table className="table table-bordered text-center align-middle">
          <thead>
            <tr className="align-middle">
              <th>Konveksi</th>
              <th>Banyak kain warna putih (gulung)</th>
              <th>Banyak kain warna abu-abu (gulung)</th>
              <th>Banyak kain warna cokelat (gulung)</th>
              <th>Biaya yang dibutuhkan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Konveksi Roshima</td>
              <td>4</td>
              <td>6</td>
              <td>3</td>
              <td>
                Rp {''}
                <input
                  className={`form-control d-inline-block ${inputStatuses.inputt1 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt1 && !inputStatuses.inputt1 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '128px' }}
                  value={inputValues.inputt1}
                  onChange={e => handleChange('inputt1', e)}
                />
              </td>
            </tr>
            <tr>
              <td>SM Bordir</td>
              <td>
                <input
                  className={`form-control d-inline-block ${inputStatuses.inputt2 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt2 && !inputStatuses.inputt2 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '48px' }}
                  value={inputValues.inputt2}
                  onChange={e => handleChange('inputt2', e)}
                />
              </td>
              <td>5</td>
              <td>5</td>
              <td>
                Rp {''}
                <input
                  className={`form-control d-inline-block ${inputStatuses.inputt3 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt3 && !inputStatuses.inputt3 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '128px' }}
                  value={inputValues.inputt3}
                  onChange={e => handleChange('inputt3', e)}
                />
              </td>
            </tr>
            <tr>
              <td>Sportees</td>
              <td>
                <input
                  className={`form-control d-inline-block ${inputStatuses.inputt4 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt4 && !inputStatuses.inputt4 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '48px' }}
                  value={inputValues.inputt4}
                  onChange={e => handleChange('inputt4', e)}
                />
              </td>
              <td>3</td>
              <td>
                <input
                  className={`form-control d-inline-block ${inputStatuses.inputt5 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt5 && !inputStatuses.inputt5 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '48px' }}
                  value={inputValues.inputt5}
                  onChange={e => handleChange('inputt5', e)}
                />
              </td>
              <td>
                Rp {''}
                <input
                  className={`form-control d-inline-block ${inputStatuses.inputt6 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt6 && !inputStatuses.inputt6 ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '128px' }}
                  value={inputValues.inputt6}
                  onChange={e => handleChange('inputt6', e)}
                />
              </td>
            </tr>
            <tr>
              <td>Konveksi Berkarya</td>
              <td>?</td>
              <td>?</td>
              <td>?</td>
              <td style={{ backgroundColor: '#D9D9D9' }}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={`${isBlurred0 ? 'blur' : ''}`}>
        <p ref={section0}>Dengan melihat tabel tersebut, kita dapat memisalkan setiap gulung warna kain sebagai variabel yang ingin kita ketahui nilainya.</p>
        <p className="text-center fst-italic my-4">Lengkapi kotak kosong berikut dengan variabel yang mewakili harga satu gulung kain warna putih adalah x, warna abu-abu adalah y, dan warna cokelat adalah z</p>
        <div className="d-flex justify-content-center gap-3 align-items-center my-4">
          <input
            className={`form-control ${inputStatuses.input1 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input1 && !inputStatuses.input1 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '50px' }}
            value={inputValues.input1}
            onChange={e => handleChange('input1', e)}
          />
          <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
          <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
            Harga satu gulung kain <br />
            warna putih
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center my-4">
          <input
            className={`form-control ${inputStatuses.input2 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input2 && !inputStatuses.input2 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '50px' }}
            value={inputValues.input2}
            onChange={e => handleChange('input2', e)}
          />
          <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
          <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
            Harga satu gulung kain <br />
            warna abu-abu
          </p>
        </div>
        <div className="d-flex justify-content-center gap-3 align-items-center my-4">
          <input
            className={`form-control ${inputStatuses.input3 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input3 && !inputStatuses.input3 ? 'border-danger bg-danger-subtle' : ''}`}
            type="text"
            placeholder="..."
            style={{ textAlign: 'center', width: '50px' }}
            value={inputValues.input3}
            onChange={e => handleChange('input3', e)}
          />
          <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
          <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">
            Harga satu gulung kain <br />
            warna cokelat
          </p>
        </div>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>Selanjutnya, kita dapat menentukan besaran koefisien dan konstanta untuk melengkapi persamaan tersebut.</p>
        <p>Coba perhatikan kembali tabel yang kita susun. Banyak gulungan kain yang dibeli oleh setiap konveksi merupakan koefisien dan biaya yang dibutuhkan merupakan konstanta.</p>
        <p>
          Jadi, kita telah mengetahui mana yang merupakan koefisien dan konstanta untuk kita ubah menjadi persamaan linear. <b>Yuk kita coba menyusunnya menjadi SPLTV yang dapat kita selesaikan dengan kegiatan berikut!</b>
        </p>

        <p className="text-center mt-4 mb-1">Misalkan informasi dari konveksi Roshima menjadi persamaan (1), maka</p>
        <div className="row justify-content-center align-items-center mb-4 gap-1">
          <div className="col-5 col-sm-3 text-center p-2 border border-2 border-blue rounded-2 ">4x + 6y + 3z</div>
          <div className="col-1 justify-content-center d-flex justify-content-center p-0">
            <p className="bg-blue-subtle  text-center py-1 px-2 rounded-2 mb-0">=</p>
          </div>
          <div className="col-5 col-sm-3 text-center p-2 border border-2 border-blue rounded-2 ">20.700.000</div>
        </div>

        <p className="text-center mt-4 mb-1">Misalkan informasi dari SM Bordir menjadi persamaan (2), maka</p>
        <div className="row justify-content-center align-items-start mb-2 gap-1">
          <div className="col-5 col-sm-3 text-center p-2 border border-2 border-blue rounded-2 ">5x + 5y + 5z</div>
          <div className="col-1 justify-content-center d-flex justify-content-center p-0">
            <p className="bg-blue-subtle  text-center py-1 px-2 rounded-2 mb-0 mt-2">=</p>
          </div>
          <div className="col-5 col-sm-3 px-0">
            <div
              className={`text-center p-2 border border-2 border-blue rounded-2 ${inputStatuses.input4 ? 'border-success bg-success-subtle disabled' : ''} ${
                inputValues.input4 && !inputStatuses.input4 ? 'border-danger bg-danger-subtle' : ''
              }`}
            >
              <input
                className={`border-0 w-100  ${inputStatuses.input4 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input4 && !inputStatuses.input4 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center' }}
                value={inputValues.input4}
                onChange={e => handleChange('input4', e)}
              />
            </div>
            <Tips>isikan konstanta yang diketahui</Tips>
          </div>
        </div>

        <p className="text-center mt-4 mb-1">Misalkan informasi dari Sportees menjadi persamaan (3), maka</p>
        <div className="row justify-content-center align-items-start mb-4 gap-1">
          <div className="col-5 col-sm-3 px-0 text-center ">
            <div
              className={`d-flex p-2 border border-2 border-blue rounded-2 align-items-center justify-content-center ${inputStatuses.input5 || inputStatuses.input6 ? 'border-success bg-success-subtle' : ''} ${
                (inputValues.input5 && !inputStatuses.input5) || (inputValues.input6 && !inputStatuses.input6) ? 'border-danger bg-danger-subtle' : ''
              } ${inputStatuses.input5 && inputStatuses.input6 ? 'disabled' : ''}`}
            >
              <input
                className={`border-1 rounded-1 mx-1 px-0  ${inputStatuses.input5 ? 'border-success bg-success-subtle' : ''} ${inputValues.input5 && !inputStatuses.input5 ? 'border-danger bg-danger-subtle ' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '32px' }}
                value={inputValues.input5}
                onChange={e => handleChange('input5', e)}
              />
              <span>x + 3y +</span>
              <input
                className={`border-1 rounded-1 mx-1 px-0  ${inputStatuses.input6 ? 'border-success bg-success-subtle' : ''} ${inputValues.input6 && !inputStatuses.input6 ? 'border-danger bg-danger-subtle ' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '32px' }}
                value={inputValues.input6}
                onChange={e => handleChange('input6', e)}
              />
              <span>z</span>
            </div>
            <Tips>isikan koefisien yang diketahui</Tips>
          </div>
          <div className="col-1 justify-content-center d-flex justify-content-center p-0">
            <p className="bg-blue-subtle  text-center py-1 px-2 rounded-2 mb-0 mt-2">=</p>
          </div>
          <div className="col-5 col-sm-3 px-0">
            <div
              className={`text-center p-2 border border-2 border-blue rounded-2 ${inputStatuses.input7 ? 'border-success bg-success-subtle disabled' : ''} ${
                inputValues.input7 && !inputStatuses.input7 ? 'border-danger bg-danger-subtle' : ''
              }`}
            >
              <input
                className={`border-0 w-100  ${inputStatuses.input7 ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input7 && !inputStatuses.input7 ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center' }}
                value={inputValues.input7}
                onChange={e => handleChange('input7', e)}
              />
            </div>
            <Tips>isikan konstanta yang diketahui</Tips>
          </div>
        </div>
      </div>
      <div ref={section2} className={`${isBlurred2 ? 'blur' : ''}`}>
        <p>Dengan demikian, kita telah mengubah kalimat pada cerita tadi menjadi sebuah SPLTV yang dapat kita selesaikan, yaitu</p>
        <div className="d-flex justify-content-center mb-4">
          <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4">
            <div className="d-flex justify-content-between gap-4">
              <p className="mb-0">4x + 6y + 3z = 20.700.000</p>
              <p className="mb-0">... (1)</p>
            </div>
            <div className="d-flex justify-content-between gap-4">
              <p className="mb-0">5x + 5y + 5z = 24.000.000</p>
              <p className="mb-0">... (2)</p>
            </div>
            <div className="d-flex justify-content-between gap-4">
              <p className="mb-0">2x + 3y + 7z = 19.700.000</p>
              <p className="mb-0">... (3)</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred2 ? 'blur' : ''} d-flex justify-content-center py-4`}>
        <NextButton confirmation={sessionData?.BentukUmumSPLTV2} backToSubjectMatter={fromMateri} link={fromMateri ? '/materi' : '/materi/metode-penyelesaian-spltv'}>
          Pengantar SPLTV
        </NextButton>
      </div>
    </Main>
  );
}
