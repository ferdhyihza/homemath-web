import { useEffect, useRef, useState } from 'react';
import NextButton from '../../components/buttons/NextButton';
import Main from '../../components/layouts/Main';

export default function PengantarSPLTV3() {
  const [inputValues, setInputValues] = useState({
    input1l: '',
    input2l: '',
    input3l: '',
    inputt1l: '',
    inputt2l: '',
    inputt3l: '',
    inputt4l: '',
    inputt5l: '',
    inputt6l: '',
    inputt7l: '',
    inputt8l: '',
  });
  const [inputStatuses, setInputStatuses] = useState({
    input1l: false,
    input2l: false,
    input3l: false,
    inputt1l: false,
    inputt2l: false,
    inputt3l: false,
    inputt4l: false,
    inputt5l: false,
    inputt6l: false,
    inputt7l: false,
    inputt8l: false,
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
    } else if (inputName === 'inputt1l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'inputt2l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'inputt3l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'inputt4l' && value.replace(/\./g, '') == '269') {
      isValid = true;
    } else if (inputName === 'inputt5l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'inputt6l' && value.replace(/\./g, '') == '-1') {
      isValid = true;
    } else if (inputName === 'inputt7l' && value.replace(/\./g, '') == '1') {
      isValid = true;
    } else if (inputName === 'inputt8l' && value.replace(/\./g, '') == '87') {
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
    const allValid2 =
      updatedStatuses.inputt1l && updatedStatuses.inputt2l && updatedStatuses.inputt3l && updatedStatuses.inputt4l && updatedStatuses.inputt5l && updatedStatuses.inputt6l && updatedStatuses.inputt7l && updatedStatuses.inputt8l;
    setIsBlurred2(!allValid2);
  };

  return (
    <Main>
      <h3 className="fw-bold pb-4 my-1">
        Pengantar SPLTV Latihan Soal 3 <span className="text-muted fw-medium ms-sm-2 fs-5">Menyusun Sistem Persamaan Linear Tiga Variabel</span>
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
      <p>Berdasarkan informasi tersebut, bagaimana model persamaan linear yang dapat kita susun?</p>
      <p>
        <b>Penyelesaian:</b> <br />
        Di sini kita akan berlatih menentukan variabel terlebih dahulu. Ingat, nilai rata-rata setiap mata pelajaran ketiga siswa tersebut sama, sehingga dari informasi yang disebutkan, kita bisa memisalkan nilai rata-ratanya menjadi
        variabel.
      </p>

      <p className="text-center fst-italic my-4">
        Lengkapi kotak kosong berikut dengan variabel yang mewakili nilai rata-rata Ilham adalah x, variabel yang mewakili nilai rata-rata Yaqin adalah y, dan variabel yang mewakili nilai rata-rata Ulay adalah z
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
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">nilai rata-rata Ilham</p>
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
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">nilai rata-rata Yaqin</p>
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
        <p className="bg-darkblue mb-0 p-2 px-3 fw-light rounded-2">nilai rata-rata Ulay</p>
      </div>
      <div className={`${isBlurred ? 'blur' : ''}`}>
        <p ref={section}>Untuk memudahkan kalian, kita bisa menyusunnya dalam bentuk tabel seperti berikut.</p>
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
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt1l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt1l && !inputStatuses.inputt1l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '48px' }}
                    value={inputValues.inputt1l}
                    onChange={e => handleChange('inputt1l', e)}
                  />
                </td>
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt2l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt2l && !inputStatuses.inputt2l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '48px' }}
                    value={inputValues.inputt2l}
                    onChange={e => handleChange('inputt2l', e)}
                  />
                </td>
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt3l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt3l && !inputStatuses.inputt3l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '48px' }}
                    value={inputValues.inputt3l}
                    onChange={e => handleChange('inputt3l', e)}
                  />
                </td>
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt4l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt4l && !inputStatuses.inputt4l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '96px' }}
                    value={inputValues.inputt4l}
                    onChange={e => handleChange('inputt4l', e)}
                  />
                </td>
              </tr>
              <tr>
                <td>Bahasa Inggris</td>
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt5l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt5l && !inputStatuses.inputt5l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '48px' }}
                    value={inputValues.inputt5l}
                    onChange={e => handleChange('inputt5l', e)}
                  />
                </td>
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt6l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt6l && !inputStatuses.inputt6l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '48px' }}
                    value={inputValues.inputt6l}
                    onChange={e => handleChange('inputt6l', e)}
                  />
                </td>
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt7l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt7l && !inputStatuses.inputt7l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '48px' }}
                    value={inputValues.inputt7l}
                    onChange={e => handleChange('inputt7l', e)}
                  />
                </td>
                <td>
                  <input
                    className={`form-control d-inline-block ${inputStatuses.inputt8l ? 'border-success bg-success-subtle disabled' : ''} ${inputValues.inputt8l && !inputStatuses.inputt8l ? 'border-danger bg-danger-subtle' : ''}`}
                    type="text"
                    placeholder="..."
                    style={{ textAlign: 'center', width: '96px' }}
                    value={inputValues.inputt8l}
                    onChange={e => handleChange('inputt8l', e)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
        <NextButton latsol={true} link="/latihan-soal">
          Menyusun Sistem Persamaan Linear Tiga Variabel
        </NextButton>
      </div>
    </Main>
  );
}
