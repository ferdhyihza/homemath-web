import { useEffect, useState } from 'react';
import FormativeTestAnswer from '../components/FormativeTestAnswer';
import FormativeTestQuestion from '../components/FormativeTestQuestion';
import Main from '../components/layouts/Main';
import { Link } from 'react-router-dom';

export default function FormativeTest() {
  const kunciJawaban = {
    soal1: '1b',
    soal2: '2a',
    soal3: '3c',
    soal4: '4d',
    soal5: '5c',
    soal6: '6a',
    soal7: '7d',
    soal8: '8a',
    soal9: '9c',
    soal10: '10a',
  };
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    // Load data dari localStorage (jika ada)
    const storedData = JSON.parse(localStorage.getItem('formativeTestAnswers')) || {};
    setSelectedOptions(storedData);
  }, []);

  const handleOptionChange = e => {
    const { name, id } = e.target;

    // Update state untuk menyimpan pilihan terbaru
    const updatedOptions = { ...selectedOptions, [name]: id };
    setSelectedOptions(updatedOptions);

    // Simpan data ke localStorage dalam format JSON
    localStorage.setItem('formativeTestAnswers', JSON.stringify(updatedOptions));
  };

  const calculateCorrectAnswers = () => {
    let correctCount = 0;
    // Bandingkan jawaban yang disimpan dengan kunci jawaban
    Object.keys(kunciJawaban).forEach(key => {
      if (selectedOptions[key] === kunciJawaban[key]) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const handleSubmit = () => {
    if (!selectedOptions.soal1 || !selectedOptions.soal2) {
      alert('Jawab seluruh pertanyaan terlebih dahulu!');
      return;
    }
    setShowResult(true);
    localStorage.removeItem('formativeTestAnswers');
  };

  return (
    <Main className="pb-3 pb-sm-5">
      <h3 className="fw-bold pb-4 my-1">Tes Formatif</h3>
      <div className="bg-white text-black rounded-4  p-2 p-sm-5">
        <ul className="list-group list-group-flush list-group-numbered gap-3">
          {/* Soal 1 */}
          <FormativeTestQuestion>
            Diantara pernyataan berikut, mana yang benar mengenai unsur pada sistem persamaan linear
            <ul className="ps-0">
              <li className=" d-flex">
                (1)<div className="ms-2">Variabel merupakan simbol atau huruf yang mewakili suatu nilai</div>
              </li>
              <li className=" d-flex">
                (2)<div className="ms-2">Koefisien merupakan suatu bilangan yang menjelaskan banyaknya jumlah variabel</div>
              </li>
              <li className=" d-flex">
                (3)<div className="ms-2">Koefisien merupakan nilai tetap yang tidak diikuti oleh variabel di belakangnya</div>
              </li>
              <li className=" d-flex">
                (4)<div className="ms-2">Konstanta merupakan simbol atau huruf yang mewakili suatu nilai yang belum diketahui besarnya</div>
              </li>
            </ul>
            <p className="mb-2">Pernyataan yang benar adalah...</p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer option="a" name="soal1" id="1a" onChange={handleOptionChange} className="btn-outline-darkblue">
                  Pernyataan (1) dan (3)
                </FormativeTestAnswer>
                <FormativeTestAnswer option="b" name="soal1" id="1b" onChange={handleOptionChange} className="btn-outline-darkblue">
                  Pernyataan (1) dan (2)
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer option="c" name="soal1" id="1c" onChange={handleOptionChange} className="btn-outline-darkblue">
                  Pernyataan (2) dan (3)
                </FormativeTestAnswer>
                <FormativeTestAnswer option="d" name="soal1" id="1d" onChange={handleOptionChange} className="btn-outline-darkblue">
                  Pernyataan (3) dan (4)
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 2 */}
          <FormativeTestQuestion>
            Diberikan beberapa persamaan
            <ul className="ps-0">
              <li className=" d-flex">
                (1)
                <div className="ms-2">
                  2x<sup>2</sup> + 5 = 3y
                </div>
              </li>
              <li className=" d-flex">
                (2)<div className="ms-2">x + y + z = 0</div>
              </li>
              <li className=" d-flex">
                (3)<div className="ms-2">a + 5b + 2c = 9</div>
              </li>
              <li className=" d-flex">
                (4)
                <div className="ms-2">
                  2 + y<sup>3</sup> = 0
                </div>
              </li>
              <li className=" d-flex">
                (5)
                <div className="ms-2">4p + 5q = 40</div>
              </li>
            </ul>
            <p className="mb-2">Diantara persamaan tersebut, mana yang merupakan linear tiga variabel?</p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer option="a" name="soal2" id="2a" onChange={handleOptionChange}>
                  Persamaan (2) dan (3)
                </FormativeTestAnswer>
                <FormativeTestAnswer option="b" name="soal2" id="2b" onChange={handleOptionChange}>
                  Persamaan (1) dan (3)
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer option="c" name="soal2" id="2c" onChange={handleOptionChange}>
                  Persamaan (2) dan (5)
                </FormativeTestAnswer>
                <FormativeTestAnswer option="d" name="soal2" id="2d" onChange={handleOptionChange}>
                  Persaman (1) dan (4)
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 3 */}
          <FormativeTestQuestion>
            <p className="mb-2">Manakah yang merupakan contoh dari bentuk Sistem Persamaan Linear Tiga Variabel (SPLTV)?</p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="3" option="a">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>x + y + z = 6</div>
                      <div>
                        2x<sup>2</sup> + 3 y + z = 11
                      </div>
                      <div>-2x + y + z = 9</div>
                    </div>
                  </div>
                </FormativeTestAnswer>
                <FormativeTestAnswer no="3" option="b">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>y - 2z = 11</div>
                      <div>a + 5b + 2c = 9</div>
                      <div>2p + q - 3r = -3</div>
                    </div>
                  </div>
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="3" option="c">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>2a - b + c = 16</div>
                      <div>a + 5b - c = -9</div>
                      <div>a - b - c = 3</div>
                    </div>
                  </div>
                </FormativeTestAnswer>
                <FormativeTestAnswer no="3" option="d">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>5f + 2g = 14</div>
                      <div>
                        f + g<sup>2</sup> - h = 4
                      </div>
                      <div>
                        2f + g -h<sup>2</sup> = 2
                      </div>
                    </div>
                  </div>
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 4 */}
          <FormativeTestQuestion>
            <p className="mb-2">
              Luna merupakan seorang mahasiswa yang sedang melakukan observasi mengenai kebiasaan peserta didik dalam membaca al-qur’an. Luna melakukan observasi di kelas 10A, 11A, dan 12A. Setiap harinya, kelas 10A mampu menyelesaikan 4
              juz, kelas 11A mampu menyelesaikan 6 juz, dan kelas 12A mampu menyelesaikan 5 juz. Sehingga, dalam satu hari, ketiga kelas tersebut mampu menyelesaikan 15 juz. Jika Luna melakukan observasi selama 5 hari, bagaimana model
              persamaan linear yang dapat disusun?
            </p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="4" option="a">
                  a + b + c = 15
                </FormativeTestAnswer>
                <FormativeTestAnswer no="4" option="b">
                  4a + 6b + 5c = 15
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="4" option="c">
                  a + 6b = 45 - 5c
                </FormativeTestAnswer>
                <FormativeTestAnswer no="4" option="d">
                  5a + 5b + 5c = 45
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 5 */}
          <FormativeTestQuestion>
            <p className="mb-2">
              Untuk mempersiapkan bulan Ramadhan, keluarga pak Ilham, pak Saiful, dan pak Sakri membeli beberapa kebutuhan pokok di toko Barokah. Keluarga pak Ilham menghabiskan Rp193.000 untuk membeli 5 kantong beras, 3 kantong gula, dan 5
              kantong minyak goreng. Keluarga pak Sakri menghabiskan Rp172.000 untuk membeli 4 kantong beras, 3 kantong gula, dan 6 kantong minyak goreng. Sedangkan keluarga pak Saiful menghabiskan Rp179.000 untuk membeli 7 kantong beras, 4
              kantong gula, dan 8 kantong minyak goreng. Bagaimana model SPLTV yang dapat dibentuk berdasarkan cerita tersebut?
            </p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="5" option="a">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>5p + 4q + 7r = 193.000</div>
                      <div>3p + 2q + 4r = 172.000</div>
                      <div>5p + 6q + 8r = 279.000</div>
                    </div>
                  </div>
                </FormativeTestAnswer>
                <FormativeTestAnswer no="5" option="b">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>3p - 2q + 7r = 172.000</div>
                      <div>4p + 7q - r = 279.000</div>
                      <div>5q + 4q + 8r = 193.000</div>
                    </div>
                  </div>
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="5" option="c">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>5p + 3q + 5r = 193.000</div>
                      <div>4p + 2q + 6r = 172.000</div>
                      <div>7p + 4q + 8r = 279.000</div>
                    </div>
                  </div>
                </FormativeTestAnswer>
                <FormativeTestAnswer no="5" option="d">
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
                    <div>
                      <div>5p + 3q - 5r = 193.000</div>
                      <div>4p + 2q + 6r = 279.000</div>
                      <div>7p + 4q + 8r = 172.000</div>
                    </div>
                  </div>
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 6 */}
          <FormativeTestQuestion>
            <p className="mb-2">Diberikan SPLTV berikut</p>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
              <div>
                <div>2x - y + 4z = 24</div>
                <div>x + 2y - z = 18</div>
                <div>x + y + z = 16</div>
              </div>
            </div>
            <p className="mb-2">Himpunan penyelesaian dari SPLTV tersebut adalah...</p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="6" option="a">
                  {'{'}(2, 10, 4){'}'}
                </FormativeTestAnswer>
                <FormativeTestAnswer no="6" option="b">
                  {'{'}(2, -10, -4){'}'}
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="6" option="c">
                  {'{'}(4, -2, 3){'}'}
                </FormativeTestAnswer>
                <FormativeTestAnswer no="6" option="d">
                  {'{'}(-8, 10, 4){'}'}
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 7 */}
          <FormativeTestQuestion>
            <p className="mb-2">Diberikan SPLTV berikut</p>
            <div className="d-flex align-items-center">
              <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginLeft: '12px', marginRight: '4px' }}>{'{'}</span>
              <div>
                <div>-a - b + c = 0</div>
                <div>2a = b + 2c + 6</div>
                <div>a + 2b - 2c = 4</div>
              </div>
            </div>
            <p className="mb-2">Himpunan penyelesaian yang sesuai untuk SPLTV tersebut adalah...</p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="7" option="a">
                  {'{'}(2, 2, -4){'}'}
                </FormativeTestAnswer>
                <FormativeTestAnswer no="7" option="b">
                  {'{'}(3, -2, 4){'}'}
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="7" option="c">
                  {'{'}(-4, -2, -2){'}'}
                </FormativeTestAnswer>
                <FormativeTestAnswer no="7" option="d">
                  {'{'}(4, -2, 2){'}'}
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 8 */}
          <FormativeTestQuestion>
            <p className="mb-2">
              Terdapat sebuah bilangan yang terdiri dari tiga angka. Jumlah ketiga angka tersebut adalah 12. Dua kali bilangan pertama dijumlahkan dengan bilangan ketiga sama dengan bilangan kedua. Nilai bilangan tersebut adalah 22 kali
              jumlah ketiga angkanya dijumlahkan dengan 9. Dari pernyataan tersebut, model persamaan yang dapat kita susun adalah sebagai berikut.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <span style={{ fontSize: '72px', fontWeight: '100', lineHeight: '1.1', marginBottom: '16px', marginRight: '4px' }}>{'{'}</span>
              <div>
                <div>a + b + c = 12</div>
                <div>2a + c = b</div>
                <div>nilai bilangan abc = 22(a + b + c) + 9</div>
              </div>
            </div>
            <p className="mb-2">Dari pernyataan dan persamaan yang diidentifikasi, dapat kita ketahui bahwa...</p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="8" option="a">
                  Nilai a = 2, b = 7, c = 3 dan bilangan tersebut adalah 273
                </FormativeTestAnswer>
                <FormativeTestAnswer no="8" option="b">
                  Nilai a = 4, b = 4, c = 4 dan bilangan tersebut adalah 444
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="8" option="c">
                  Nilai a = 2, b = 7, c = 3 dan bilangan tersebut adalah 444
                </FormativeTestAnswer>
                <FormativeTestAnswer no="8" option="d">
                  Nilai a = 3, b = 8, c = 2 dan bilangan tersebut adalah 382
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 9 */}
          <FormativeTestQuestion>
            <p className="mb-2">
              Perusahaan tempat Diana, Anida,dan Faiza bekerja sedang mengalami renovasi. Sehingga, jadwal masuk mereka dibagi dalam tiga shift, pagi, siang, dan sore. Setiap orang mendapatkan jatah masuk selama 36 jam dalam satu minggu.
              Selama satu minggu tersebut, Diana masuk sebanyak 3 kali pada shift pagi, 1 kali pada shift siang, dan 3 kali pada shift sore. Anida masuk sebanyak 3 kali pada shift pagi, 2 kali pada shift siang, dan 4 kali pada shift sore.
              Sedangkan Faiza, masuk 3 kali pada shift pagi, 3 kali pada shift siang, dan 2 kali pada shift sore. Berdasarkan informasi tersebut, berapakah durasi waktu kerja pada setiap shift-nya?
            </p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="9" option="a">
                  Durasi shift pagi adalah 6 jam, shift siang 4 jam, dan shift sore 3 jam
                </FormativeTestAnswer>
                <FormativeTestAnswer no="9" option="b">
                  Durasi shift pagi adalah 4 jam, shift siang 3 jam, dan shift sore 4 jam
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="9" option="c">
                  Durasi shift pagi adalah 4 jam, shift siang 6 jam, dan shift sore 3 jam
                </FormativeTestAnswer>
                <FormativeTestAnswer no="9" option="d">
                  Durasi shift pagi adalah 3 jam, shift siang 6 jam, dan shift sore 4 jam
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>

          {/* Soal 10 */}
          <FormativeTestQuestion>
            <p className="mb-2">
              Pada liburan semester ganjil 2024-2025, kelas XA, XB, dan XC berencana untuk mendaki gunung. Mereka menyiapkan segala perlengkapan dan juga fisik. Untuk beberapa perlengkapan yang belum terpenuhi, ketua kelas berinisiatif
              untuk menyewa alat pendakian selama tiga hari. Kelas XA menyewa 3 tenda, 3 tas, dan 1 sepatu dengan biaya Rp450.000. kelas XB menyewa 4 tenda, 2 tas, dan 2 sepatu dengan biaya Rp510.000. sedangkan kelas XC menyewa 3 tenda, 5
              tas, dan 4 sepatu dengan biaya Rp705.000. Berdasarkan informasi tersebut, berapa harga sewa setiap alat untuk setiap harinya?
            </p>
            <div className="row">
              <div className="col-sm-6">
                <FormativeTestAnswer no="10" option="a">
                  Harga sewa tenda Rp25.000 per hari, tas Rp20.000 per hari, dan Sepatu Rp15.000 per hari
                </FormativeTestAnswer>
                <FormativeTestAnswer no="10" option="b">
                  Harga sewa tenda Rp15.000 per hari, tas Rp20.000 per hari, dan Sepatu Rp15.000 per hari
                </FormativeTestAnswer>
              </div>
              <div className="col-sm-6">
                <FormativeTestAnswer no="10" option="c">
                  Harga sewa tenda Rp20.000 per hari, tas Rp30.000 per hari, dan Sepatu Rp15.000 per hari
                </FormativeTestAnswer>
                <FormativeTestAnswer no="10" option="d">
                  Harga sewa tenda Rp35.000 per hari, tas Rp10.000 per hari, dan Sepatu Rp10.000 per hari
                </FormativeTestAnswer>
              </div>
            </div>
          </FormativeTestQuestion>
        </ul>
        <button onClick={handleSubmit}>Submit</button>
        <div className="text-center">
          <Link to="hasil" onClick={handleSubmit} className="btn bg-darkblue">
            Submit Jawaban
          </Link>
        </div>

        {showResult && (
          <div>
            <h4>Jumlah Jawaban Benar: {calculateCorrectAnswers()}</h4>
          </div>
        )}
      </div>
    </Main>
  );
}
