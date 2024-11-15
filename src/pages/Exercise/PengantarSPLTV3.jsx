import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';
import Tips from '../../components/Tips';

export default function PengantarSPLTV3() {
  const [inputValues, setInputValues] = useState({
    input1l: '',
    input2l: '',
    input3l: '',
    input4l: '',
    input5l: '',
    input6l: '',
    input7l: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input1l: false,
    input2l: false,
    input3l: false,
    input4l: false,
    input5l: false,
    input6l: false,
    input7l: false,
  });
  const [isBlurred, setIsBlurred] = useState(true); // Status untuk kelas blur
  const [isBlurred2, setIsBlurred2] = useState(true);
  const section = useRef(null);
  const section2 = useRef(null);

  // Efek untuk memuat status dan nilai dari localStorage ketika komponen pertama kali dimuat
  useEffect(() => {
    // const savedStatus = JSON.parse(localStorage.getItem('inputStatusesLatsol'));
    // if (savedStatus) {
    //   setInputValues(savedStatus.values);
    //   setInputStatuses(savedStatus.statuses);
    //   // Tentukan apakah kelas blur harus dihapus berdasarkan status validasi
    //   const allValid = savedStatus.statuses.input1l && savedStatus.statuses.input2l && savedStatus.statuses.input3l;
    //   setIsBlurred(!allValid);
    //   const allValid2 = savedStatus.statuses.input4l && savedStatus.statuses.input5l && savedStatus.statuses.input6l && savedStatus.statuses.input7l;
    //   setIsBlurred2(!allValid2);
    // }

    if (!isBlurred && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (!isBlurred2 && section2.current) {
      section2.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isBlurred, isBlurred2]);

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (inputName, event) => {
    const value = event.target.value;
    let isValid = false;

    // Tentukan validasi berdasarkan nama input
    if (inputName === 'input1l' && value === 'x') {
      isValid = true;
    } else if (inputName === 'input2l' && value === 'y') {
      isValid = true;
    } else if (inputName === 'input3l' && value === 'z') {
      isValid = true;
    } else if (inputName === 'input4l' && value.replace(/\./g, '') == '269') {
      isValid = true;
    } else if (inputName === 'input5l' && value == '1') {
      isValid = true;
    } else if (inputName === 'input6l' && value == '1') {
      isValid = true;
    } else if (inputName === 'input7l' && value.replace(/\./g, '') == '87') {
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
    // localStorage.setItem('inputStatusesLatsol', JSON.stringify(updatedStatus));

    // Periksa apakah semua input sudah valid
    const allValid = updatedStatuses.input1l && updatedStatuses.input2l && updatedStatuses.input3l;
    setIsBlurred(!allValid); // Hapus kelas blur jika semua input valid
    const allValid2 = updatedStatuses.input4l && updatedStatuses.input5l && updatedStatuses.input6l && updatedStatuses.input7l;
    setIsBlurred2(!allValid2);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Pengantar SPLTV Latihan Soal 3 <span className="text-muted fw-medium ms-sm-2 fs-5">Bentuk Umum SPLTV: Menyusun Sistem Persamaan Linear Tiga Variabel</span>
      </h3>

      <p>
        Menjelang pendaftaran mahasiswa baru, beberapa sekolah mulai merilis daftar siswa yang eligible untuk mendaftar melalui jalur SNBP. Ilham, Yaqin, dan Ulay merupakan tiga siswa salah satu sekolah di Blitar yang dapat mendaftar
        melalui jalur SNBP. Nilai rata-rata mata pelajaran Matematika, Bahasa Indonesia, dan Bahasa Inggris selama 5 semester dari ketiga siswa tersebut sama, dan dideskripsikan dengan keterangan sebagai berikut.
      </p>
      <ul className="list-group mb-2">
        <li className="list-group-item">
          2 kali nilai rata-rata mata pelajaran Matematika Ilham dijumlahkan dengan nilai rata-rata mata pelajaran Bahasa Indonesia Ilham kemudian dikurangi dengan nilai rata-rata mata pelajaran Bahasa Inggris Ilham adalah 177
        </li>
        <li className="list-group-item">
          Nilai rata-rata mata pelajaran Matematika Yaqin dijumlahkan dengan nilai rata-rata mata pelajaran Bahasa Indonesia Yaqin dan dijumlahkan lagi dengan nilai rata-rata mata pelajaran Bahasa Inggris Yaqin adalah 269
        </li>
        <li className="list-group-item">Nilai rata-rata mata pelajaran Matematika Ulay dikurangi dengan nilai rata-rata Bahasa Indonesia Ulay kemudian dijumlahkan dengan nilai rata-rata mata pelajaran Bahasa Inggris adalah 87</li>
      </ul>
      <p>Berdasarkan informasi tersebut, berapakah nilai rata-rata masing-masing mata pelajaran ketiga siswa tersebut?</p>
      <p>
        <b>Penyelesaian:</b> <br />
        Di sini kita akan berlatih menentukan variabel terlebih dahulu. Ingat, nilai rata-rata setiap mata pelajaran ketiga siswa tersebut saman, sehingga dari informasi yang disebutkan, kita bisa memisalkan nilai rata-ratanya menjadi
        variabel.
      </p>

      <p className="text-center fst-italic my-4">
        Lengkapi kotak kosong berikut dengan variabel yang mewakili nilai rata-rata mata pelajaran Matematika adalah x, variabel yang mewakili nilai rata-rata mata pelajaran Bahasa Indonesia adalah y, dan variabel yang mewakili nilai
        rata-rata mata pelajaran Bahasa Inggris adalah z
      </p>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input
          className={`form-control ${inputStatuses.input1l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input1l && !inputStatuses.input1l ? 'border-danger bg-danger-subtle' : ''}`}
          type="text"
          placeholder="..."
          style={{ textAlign: 'center', width: '50px' }}
          value={inputValues.input1l}
          onChange={e => handleChange('input1l', e)}
        />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">nilai rata-rata mata pelajaran Matematika</p>
      </div>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input
          className={`form-control ${inputStatuses.input2l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input2l && !inputStatuses.input2l ? 'border-danger bg-danger-subtle' : ''}`}
          type="text"
          placeholder="..."
          style={{ textAlign: 'center', width: '50px' }}
          value={inputValues.input2l}
          onChange={e => handleChange('input2l', e)}
        />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">nilai rata-rata mata pelajaran Bahasa Indonesia</p>
      </div>
      <div className="d-flex justify-content-center gap-3 align-items-center my-4">
        <input
          className={`form-control ${inputStatuses.input3l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input3l && !inputStatuses.input3l ? 'border-danger bg-danger-subtle' : ''}`}
          type="text"
          placeholder="..."
          style={{ textAlign: 'center', width: '50px' }}
          value={inputValues.input3l}
          onChange={e => handleChange('input3l', e)}
        />
        <p className="bg-blue-subtle p-1 rounded-2 mb-0">sebagai</p>
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">nilai rata-rata mata pelajaran Bahasa Inggris</p>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>
          Karena kita sudah memisalkan <b>nilai rata-rata tiap mata pelajaran</b> tersebut sebagai <b>variabel</b> tertentu, selanjutnya kita dapat menentukan besaran koefisien dan konstanta untuk melengkapi persamaannya.
        </p>

        <ul className="list-group mb-2">
          <li className="list-group-item">
            2 kali nilai rata-rata mata pelajaran Matematika Ilham dijumlahkan dengan nilai rata-rata mata pelajaran Bahasa Indonesia Ilham kemudian dikurangi dengan nilai rata-rata mata pelajaran Bahasa Inggris Ilham adalah 177 <br />
            <b>Kalimat tersebut bisa kita ubah menjadi 2x + y - z = 177</b>
          </li>
          <li className="list-group-item">
            Nilai rata-rata mata pelajaran Matematika Yaqin dijumlahkan dengan nilai rata-rata mata pelajaran Bahasa Indonesia Yaqin dan dijumlahkan lagi dengan nilai rata-rata mata pelajaran Bahasa Inggris Yaqin adalah 269 <br />
            <b>Kalimat tersebut bisa kita ubah menjadi x + y + z = 269</b>
          </li>
          <li className="list-group-item">
            Nilai rata-rata mata pelajaran Matematika Ulay dikurangi dengan nilai rata-rata Bahasa Indonesia Ulay kemudian dijumlahkan dengan nilai rata-rata mata pelajaran Bahasa Inggris adalah 87 <br />
            <b>Kalimat tersebut bisa kita ubah menjadi x - y + z = 87</b>
          </li>
        </ul>

        <p>Coba susun persamaan tersebut pada kolom di bawah ini!</p>

        <p className="text-center mt-4 mb-1">
          Informasi nilai rata-rata milik <b>Ilham</b> pada poin pertama akan kita jadikan <b>sebagai persamaan 1</b>
        </p>
        <div className="row justify-content-center align-items-center mb-4 gap-1">
          <div className="col-5 col-sm-3 text-center p-2 border border-2 border-blue rounded-2 ">2x + y - z</div>
          <div className="col-1 justify-content-center d-flex justify-content-center p-0">
            <p className="bg-blue-subtle  text-center py-1 px-2 rounded-2 mb-0">=</p>
          </div>
          <div className="col-5 col-sm-3 text-center p-2 border border-2 border-blue rounded-2 ">177</div>
        </div>

        <p className="text-center mt-4 mb-1">
          Informasi nilai rata-rata milik <b>Yaqin</b> pada poin pertama akan kita jadikan <b>sebagai persamaan 2</b>
        </p>
        <div className="row justify-content-center align-items-start mb-2 gap-1">
          <div className="col-5 col-sm-3 text-center p-2 border border-2 border-blue rounded-2 ">x + y + z</div>
          <div className="col-1 justify-content-center d-flex justify-content-center p-0">
            <p className="bg-blue-subtle  text-center py-1 px-2 rounded-2 mb-0 mt-2">=</p>
          </div>
          <div className="col-5 col-sm-3 px-0">
            <div
              className={`text-center p-2 border border-2 border-blue rounded-2 ${inputStatuses.input4l ? 'border-success bg-success-subtle disabled' : ''} ${
                inputValues.input4l && !inputStatuses.input4l ? 'border-danger bg-danger-subtle' : ''
              }`}
            >
              <input
                className={`border-0 w-100  ${inputStatuses.input4l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input4l && !inputStatuses.input4l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center' }}
                value={inputValues.input4l}
                onChange={e => handleChange('input4l', e)}
              />
            </div>
            <Tips>isikan konstanta yang diketahui</Tips>
          </div>
        </div>

        <p className="text-center mt-4 mb-1">
          Informasi nilai rata-rata milik <b>Ulay</b> pada poin pertama akan kita jadikan <b>sebagai persamaan 3</b>
        </p>
        <div className="row justify-content-center align-items-start mb-4 gap-1">
          <div className="col-5 col-sm-3 px-0 text-center ">
            <div
              className={`d-flex p-2 border border-2 border-blue rounded-2  justify-content-center ${inputStatuses.input5l || inputStatuses.input6l ? 'border-success bg-success-subtle' : ''} ${
                (inputValues.input5l && !inputStatuses.input5l) || (inputValues.input6l && !inputStatuses.input6l) ? 'border-danger bg-danger-subtle' : ''
              } ${inputStatuses.input5l && inputStatuses.input6l ? 'disabled' : ''}`}
            >
              <input
                className={`border-1 rounded-1 mx-1 px-0  ${inputStatuses.input5l ? 'border-success bg-success-subtle' : ''} ${inputValues.input5l && !inputStatuses.input5l ? 'border-danger bg-danger-subtle ' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '32px' }}
                value={inputValues.input5l}
                onChange={e => handleChange('input5l', e)}
              />
              <span>x - y +</span>
              <input
                className={`border-1 rounded-1 mx-1 px-0  ${inputStatuses.input6l ? 'border-success bg-success-subtle' : ''} ${inputValues.input6l && !inputStatuses.input6l ? 'border-danger bg-danger-subtle ' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center', width: '32px' }}
                value={inputValues.input6l}
                onChange={e => handleChange('input6l', e)}
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
              className={`text-center p-2 border border-2 border-blue rounded-2 ${inputStatuses.input7l ? 'border-success bg-success-subtle disabled' : ''} ${
                inputValues.input7l && !inputStatuses.input7l ? 'border-danger bg-danger-subtle' : ''
              }`}
            >
              <input
                className={`border-0 w-100  ${inputStatuses.input7l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.input7l && !inputStatuses.input7l ? 'border-danger bg-danger-subtle' : ''}`}
                type="text"
                placeholder="..."
                style={{ textAlign: 'center' }}
                value={inputValues.input7l}
                onChange={e => handleChange('input7l', e)}
              />
            </div>
            <Tips>isikan konstanta yang diketahui</Tips>
          </div>
        </div>
      </div>
      <div ref={section2} className={`${isBlurred2 ? 'blur' : ''}`}>
        <p>Dengan demikian, kita telah mengubah informasi pada cerita tadi menjadi sebuah SPLTV yang dapat kita selesaikan, yaitu</p>
        <div className="d-flex justify-content-center mb-4">
          <div className="d-inline-block border border-blue rounded-2 border-2 p-2 px-4">
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

      <div className={`${isBlurred2 ? 'blur' : ''} d-flex justify-content-center py-4`}>
        <NextButton link="/latihan-soal" />
      </div>
    </Main>
  );
}
