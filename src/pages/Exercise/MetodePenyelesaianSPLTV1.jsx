import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';

export default function MetodePenyelesaianSPLTV1() {
  const [inputValues, setInputValues] = useState({
    input8l: '',
    input9l: '',
    input10l: '',
    input11l: '',
    input12l: '',
    input13l: '',
    input14l: '',
    input16l: '',
    input17l: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input8l: false,
    input9l: false,
    input10l: false,
    input11l: false,
    input12l: false,
    input13l: false,
    input14l: false,
    input16l: false,
    input17l: false,
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
    // const savedStatus = JSON.parse(localStorage.getItem('inputStatuses'));
    // if (savedStatus) {
    //   setInputValues(savedStatus.values);
    //   setInputStatuses(savedStatus.statuses);
    //   // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
    //   const allValid = savedStatus.statuses.input8l && savedStatus.statuses.input9l;
    //   setIsBlurred(!allValid);
    //   const allValid2 = savedStatus.statuses.input10l;
    //   setIsBlurred2(!allValid2);
    //   const allValid3 = savedStatus.statuses.input11l && savedStatus.statuses.input12l;
    //   setIsBlurred3(!allValid3);
    //   const allValid4 = savedStatus.statuses.input13l && savedStatus.statuses.input14l && savedStatus.statuses.input15l && savedStatus.statuses.input16l && savedStatus.statuses.input17l;
    //   setIsBlurred4(!allValid4);
    // }

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
  }, [isBlurred, isBlurred2, isBlurred3, isBlurred4]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input8l' && value.replace(/\./g, '') == '269') {
      isValid = true;
    } else if (inputName === 'input9l' && value.replace(/\./g, '') == '356') {
      isValid = true;
    } else if (inputName === 'input10l' && value.replace(/\./g, '') == '88') {
      isValid = true;
    } else if (inputName === 'input11l' && value.replace(/\./g, '') == '2') {
      isValid = true;
    } else if (inputName === 'input12l' && value.replace(/\./g, '') == '90') {
      isValid = true;
    } else if (inputName === 'input13l' && value.replace(/\./g, '') == '87') {
      isValid = true;
    } else if (inputName === 'input14l' && value.replace(/\./g, '') == '178') {
      isValid = true;
    } else if (inputName === 'input16l' && value.replace(/\./g, '') == '-91') {
      isValid = true;
    } else if (inputName === 'input17l' && value.replace(/\./g, '') == '91') {
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
    // const updatedStatus = {
    //   values: updatedValues,
    //   statuses: updatedStatuses,
    // };
    // localStorage.setItem('inputStatuses', JSON.stringify(updatedStatus));

    // Periksa apakah semua input sudah valid
    const allValid = updatedStatuses.input8l && updatedStatuses.input9l;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatuses.input10l;
    setIsBlurred2(!allValid2);
    const allValid3 = updatedStatuses.input11l && updatedStatuses.input12l;
    setIsBlurred3(!allValid3);
    const allValid4 = updatedStatuses.input13l && updatedStatuses.input14l && updatedStatuses.input16l && updatedStatuses.input17l;
    setIsBlurred4(!allValid4);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Metode Penyelesaian SPLTV Latihan Soal 1 <span className="text-muted fw-medium ms-sm-2 fs-5">Penyelesaian SPLTV dengan Metode Eliminasi</span>
      </h3>
      <p>
        Menjelang pendaftaran mahasiswa baru, beberapa sekolah mulai merilis daftar siswa yang <i>eligible</i> untuk mendaftar melalui jalur SNBP. Ilham, Yaqin, dan Ulay merupakan tiga siswa salah satu sekolah di Blitar yang dapat mendaftar
        melalui jalur SNBP. Nilai rata-rata dari mata pelajaran Matematika, Bahasa Indonesia, dan Bahasa Inggris selama 5 semester dari ketiga siswa tersebut dideskripsikan dengan keterangan sebagai berikut.
      </p>
      <ul className="list-group mb-2">
        <li className="list-group-item">2 kali nilai rata-rata Matematika Ilham dijumlahkan dengan nilai rata-rata Matematika Yaqin kemudian dikurangi dengan nilai rata-rata Matematika Ulay adalah 177</li>
        <li className="list-group-item">Nilai rata-rata Bahasa Indonesia Ilham dijumlahkan dengan nilai rata-rata Bahasa Indonesia Yaqin dan dijumlahkan lagi dengan nilai rata-rata Bahasa indonesia Ulay adalah 269</li>
        <li className="list-group-item">Nilai rata-rata Bahasa Inggris Ilham dikurangi dengan nilai rata-rata Bahasa Inggris Yaqin kemudian dijumlahkan dengan nilai rata-rata Bahasa Inggris Ulay adalah 87</li>
      </ul>
      <p>Berdasarkan informasi tersebut, berapa nilai rata-rata ketiga siswa tersebut?</p>
      <p>
        <b>Penyelesaian:</b>
      </p>
      <p>Untuk memudahkan kalian, kita bisa menyusunnya dalam bentuk tabel seperti berikut.</p>
      <div className="overflow-x-auto">
        <table className="table table-bordered text-center align-middle">
          <thead>
            <tr className="align-middle">
              <th>Mata Pelajaran</th>
              <th>Nilai rata-rata Ilham (x)</th>
              <th>Nilai rata-rata Yaqin (y)</th>
              <th>Nilai rata-rata Ulay (z)</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matematika</td>
              <td>2</td>
              <td>1</td>
              <td>-1</td>
              <td>177</td>
            </tr>
            <tr>
              <td>Bahasa Indonesia</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>269</td>
            </tr>
            <tr>
              <td>Bahasa Inggris</td>
              <td>1</td>
              <td>-1</td>
              <td>1</td>
              <td>87</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4 text-center">
          <p className="text-center">Dengan demikian, kita telah mengubah informasi pada cerita tadi menjadi sebuah SPLTV yang dapat kita selesaikan, yaitu</p>
          <div className="d-flex justify-content-center mb-4">
            <div className="d-inline-block">
              <div className="d-flex justify-content-between gap-4">
                <p className="mb-0">2x + y - z = 177</p>
                <p className="mb-0">... (1)</p>
              </div>
              <div className="d-flex justify-content-between gap-4">
                <p className="mb-0">x + y + z = 269</p>
                <p className="mb-0">... (2)</p>
              </div>
              <div className="d-flex justify-content-between gap-4">
                <p className="mb-0">x - y + z = 87</p>
                <p className="mb-0">... (3)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>1. Eliminasi salah satu variabel pada persamaan (1) dan (2), atau persamaan (2) dan (3), atau persamaan (1) dan (3) untuk membentuk persamaan linear dua variabel.</p>
      <p className="fw-light">Kali ini kita akan mencoba untuk mengeliminasi variabel y pada persamaan (1) dan (2) dengan mengurangi kedua persamaan tersebut. Sehingga,</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '200px' }}>
          <div className="" style={{ width: '200px' }}>
            <p>2x + y - z = 177</p>
            <p className="border-bottom d-inline-block border-black position-relative kurang pb-3">x + y + z = 269</p>
            <p className="ms-3">x - 2z = -92 &ensp; ...(4)</p>
          </div>
        </div>
      </div>

      <p>2. Selanjutnya, kita dapat mengulangi langkah tersebut untuk mengeliminasi variabel y pada persamaan (2) dan (3) dengan menjumlahkan kedua persamaan seperti berikut.</p>
      <div className="overflow-x-auto">
        <div className="row justify-content-center mx-0" style={{ minWidth: '350px' }}>
          <div className="" style={{ width: '350px' }}>
            <div className="d-flex align-items-center gap-2 mb-1">
              <p className="mb-0">x + y + z =</p>
              <input
                className={`form-control d-inline-block ${inputStatuses.input8l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input8l && !inputStatuses.input8l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '64px' }}
                value={inputValues.input8l}
                onChange={e => handleChange('input8l', e)}
              />
            </div>
            <p className="border-bottom d-inline-block border-black position-relative tambah pb-3">x - y + z = 87</p>
            <div>
              <p className="ms-1 d-inline-block">2x + 2z =</p>
              <input
                className={`form-control d-inline-block ms-2 ${inputStatuses.input9l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input9l && !inputStatuses.input9l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '64px' }}
                value={inputValues.input9l}
                onChange={e => handleChange('input9l', e)}
              />
              <p className="ps-2 d-inline-block">...(5)</p>
            </div>
            <p className="d-inline-block ps-3 fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
              hitung hasil operasi tersebut
            </p>
          </div>
        </div>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>3. Dari langkah sebelumnya, kita mendapatkan dua persamaan baru, yaitu persamaan (4) dan (5) yang menyisakan dua variabel x dan z.</p>
        <p className="fw-light">Kita akan melakukan eliminasi pada kedua persamaan tersebut dengan menjumlahkan keduanya. Sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '250px' }}>
            <div className="" style={{ width: '250px' }}>
              <p>x - 2z = -92</p>
              <p className="border-bottom d-inline-block border-black position-relative tambah pb-3">2x + 2z = 356</p>
              <p className="ps-4">3x = 264</p>
              <div className="d-flex ms-3 ps-1 mb-2 gap-2 align-items-center">
                <div className="d-inline-block">
                  <p className="border-bottom border-black mb-0 d-inline-block">3x</p>
                  <p className="text-center mb-0">3</p>
                </div>
                <span>=</span>
                <div className="d-inline-block">
                  <p className="border-bottom border-black mb-0 d-inline-block">264</p>
                  <p className="text-center mb-0">3</p>
                </div>
              </div>
              <div>
                <p className="ps-4 ms-3 d-inline-block">x =</p>
                <input
                  className={`form-control d-inline-block ms-2 ${inputStatuses.input10l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input10l && !inputStatuses.input10l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input10l}
                  onChange={e => handleChange('input10l', e)}
                />
              </div>
              <p className="d-inline-block fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dibagi dengan 3 untuk mengetahui nilai x
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred2 ? 'blur' : ''}`}>
        <p ref={section2}>4. Dari langkah 3 kita mengetahui nilai x. Kemudian kita eliminasi lagi variabel lainnya, dengan mengurangi persamaan (4) dengan persamaan (5).</p>
        <p className="fw-light">Terlebih dahulu kita kalikan persamaan (4) dengan 2, dan persamaan (5) dengan 1 agar koefisien variabel x habis dikurangi. Sehingga,</p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '500px' }}>
            <div className="" style={{ width: '150px' }}>
              <p className="pt-2">x - 2z = -92</p>
              <p className="">2x + 2z = 356</p>
            </div>
            <div className="text-center px-0" style={{ width: '100px' }}>
              <p className="d-inline-block">
                | <b>×</b>
              </p>
              <input
                className={`form-control fw-bold d-inline-block ${inputStatuses.input11l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input11l && !inputStatuses.input11l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '40px' }}
                value={inputValues.input11l}
                onChange={e => handleChange('input11l', e)}
              />
              <p className="d-inline-block ms-1"> |</p>
              <p>
                | <b>×1</b> |
              </p>
            </div>
            <div className="" style={{ width: '250px' }}>
              <p className="pt-2">2x - 4z = -184</p>
              <p className="border-bottom d-inline-block border-black position-relative kurang pb-3">2x + 2z = 356</p>
              <p className="ps-4">-6z = -540</p>
              <div className="d-flex ms-3 ps-1 mb-2 gap-2 align-items-center">
                <div className="d-inline-block">
                  <p className="border-bottom border-black mb-0 d-inline-block">-6z</p>
                  <p className="text-center mb-0">(-6)</p>
                </div>
                <span>=</span>
                <div className="d-inline-block">
                  <p className="border-bottom border-black mb-0 d-inline-block">-540</p>
                  <p className="text-center mb-0">(-6)</p>
                </div>
              </div>
              <div>
                <p className="ps-4 ms-3 d-inline-block">z =</p>
                <input
                  className={`form-control d-inline-block ms-2 ${inputStatuses.input12l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input12l && !inputStatuses.input12l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input12l}
                  onChange={e => handleChange('input12l', e)}
                />
              </div>
              <p className="d-inline-block fst-italic text-muted" style={{ textAlign: 'center', fontSize: '12px' }}>
                kedua ruas dibagi dengan -6 untuk mengetahui nilai z
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred3 ? 'blur' : ''}`}>
        <p ref={section3}>
          5. Setelah kita melakukan eliminasi dan mendapatkan nilai dari variabel x dan z, maka nilai y dapat kita tentukan dari mensubstitusikan nilai tersebut ke dalam salah satu persamaan, misal persamaan (3), sehingga
        </p>
        <div className="overflow-x-auto">
          <div className="row justify-content-center mx-0" style={{ minWidth: '700px' }}>
            <div className=" text-end" style={{ width: '150px' }}>
              <p>x - y + z</p>
              <p>88 - y + 90</p>
              <p>-y + 178</p>
              <p className="mt-3 pt-1">-y + 178 - 178</p>
              <p className="mt-3 pt-1 mt-1">-y</p>
              <p className="mt-3 pt-1 mt-1">-y (-1)</p>
              <p className="mt-4">y</p>
            </div>
            <div className=" text-center" style={{ width: '50px' }}>
              <p>=</p>
              <p>=</p>
              <p>=</p>
              <p className="mt-3 pt-1">=</p>
              <p className="mt-3 pt-2">=</p>
              <p className="mt-3 pt-1">=</p>
              <p className="mt-3 pt-1">=</p>
            </div>
            <div className="" style={{ width: '500px' }}>
              <p>87</p>
              <p>87</p>
              <p>87</p>
              <div className="d-flex align-items-center gap-2 mb-2">
                <input
                  className={`form-control ${inputStatuses.input13l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input13l && !inputStatuses.input13l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input13l}
                  onChange={e => handleChange('input13l', e)}
                />
                <span>-</span>
                <input
                  className={`form-control ${inputStatuses.input14l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input14l && !inputStatuses.input14l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input14l}
                  onChange={e => handleChange('input14l', e)}
                />

                <p className="mb-0 fst-italic text-muted" style={{ fontSize: '12px' }}>
                  kurangi kedua ruas dengan 178
                </p>
              </div>

              <div className="d-flex align-items-center gap-2 mb-2 pb-1">
                <input
                  className={`form-control ${inputStatuses.input16l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input16l && !inputStatuses.input16l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input16l}
                  onChange={e => handleChange('input16l', e)}
                />

                <p className="mb-0 fst-italic text-muted" style={{ fontSize: '12px' }}>
                  masukkan hasil operasi pengurangan tersebut
                </p>
              </div>
              <p>-91 (-1)</p>
              <div className="d-flex align-items-center gap-2">
                <input
                  className={`form-control ${inputStatuses.input17l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input17l && !inputStatuses.input17l ? 'border-danger bg-danger-subtle' : ''}`}
                  type="text"
                  placeholder="..."
                  style={{ textAlign: 'center', width: '64px' }}
                  value={inputValues.input17l}
                  onChange={e => handleChange('input17l', e)}
                />
                <p className="mb-0 fst-italic text-muted" style={{ fontSize: '12px' }}>
                  kedua ruas dikali dengan -1 untuk mengetahui nilai y
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isBlurred4 ? 'blur' : ''}`}>
        <p ref={section4}>
          6. Sehingga kita ketahui nilai variabel x = 88, variabel y = 91, dan variabel z = 90. Kita ingat Kembali bahwa:
          <br />• Variabel x mewakili nilai rata-rata Ilham
          <br />• Variabel y mewakili nilai rata-rata Yaqin
          <br />• Variabel z mewakili nilai rata-rata Ulay
        </p>
        <p>Jadi, nilai rata-rata Ilham adalah 88, nilai rata-rata Yaqin adalah 91, dan nilai rata-rata Ulay adalah 90.</p>

        <div className="d-flex justify-content-center py-4">
          <NextButton latsol={true} link="/latihan-soal">
            Penyelesaian SPLTV dengan Metode Eliminasi
          </NextButton>
        </div>
      </div>
    </Main>
  );
}
