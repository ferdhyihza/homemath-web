import { Accordion } from 'react-bootstrap';

export default function PetunjukPenggunaan() {
  return (
    <section className=" my-5">
      <div className="d-flex align-items-center mb-3 gap-2">
        <img src="/icon/icon-petunjuk.png" width={48} height={48} alt="" />
        <h5 className="fw-bold mb-0">Petunjuk Penggunaan</h5>
      </div>
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div>
              Bagaimana kita harus mengikuti pembelajaran pada <em>website</em> ini?
            </div>
          </Accordion.Header>
          <Accordion.Body className="p-1">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex">
                •
                <div className="ms-2">
                  Materi dan menu pada <em>website</em> ini akan terbuka jika kalian telah menyelesaikan rangkaian pembelajaran
                </div>
              </li>
              <li className="list-group-item d-flex">
                •<div className="ms-2">Ikuti pembelajaran sesuai alur terlebih dahulu agar kamu dapat mengakses keseluruhan materi dan menu yang tersedia</div>
              </li>
              <li className="list-group-item d-flex ">
                •
                <div className="ms-2 w-100">
                  <p>
                    Mulailah dengan menekan tombol lanjut
                    <span>
                      <img className="rounded-1 mx-1" src="/icon/icon-next-dark.png" alt="" width={24} />
                    </span>
                    pada halaman beranda
                  </p>
                  <div className="row justify-content-center">
                    <figure className="col-auto">
                      <img className="img-fluid" src="/img/petunjuk-1.png" alt="" width={380} />
                      <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                        tampilan desktop
                      </figcaption>
                    </figure>
                    <figure className="col-auto text-center">
                      <img src="/img/petunjuk-1-mobile.png" alt="" height={191} />
                      <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                        tampilan mobile
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex">
                •<div className="ms-2">Simak setiap halaman yang ada, dan lanjutkan ke halaman berikutnya dengan menekan lagi tombol lanjut</div>
              </li>
              <li className="list-group-item d-flex">
                •
                <div className="ms-2 w-100">
                  <p>Selesaikan dan lengkapi beberapa rangkaian latihan yang disediakan untuk dapat mengakses tombol lanjut dan materi selanjutnya</p>
                  <div className="row justify-content-center mb-2">
                    <figure className="col-auto">
                      <img className="img-fluid" src="/img/petunjuk-2.png" alt="" width={380} />
                      <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                        tampilan desktop
                      </figcaption>
                    </figure>
                    <figure className="col-auto text-center">
                      <img src="/img/petunjuk-2-mobile.png" alt="" height={191} />
                      <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                        tampilan mobile
                      </figcaption>
                    </figure>
                  </div>
                  <div className="row justify-content-center">
                    <figure className="col-auto">
                      <img className="img-fluid" src="/img/petunjuk-3.png" alt="" width={380} />
                      <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                        tampilan desktop
                      </figcaption>
                    </figure>
                    <figure className="col-auto text-center">
                      <img src="/img/petunjuk-3-mobile.png" alt="" height={191} />
                      <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                        tampilan mobile
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex">
                •<div className="ms-2">Untuk menyelesaikan rangkaian pembelajaran, kamu dapat menekan pilihan jawaban maupun mengisikan/mengetikkan jawaban pada kolom yang disediakan</div>
              </li>
              <li className="list-group-item d-flex">
                •<div className="ms-2">Lakukan langkah-langkah tersebut hingga seluruh materi telah kamu selesaikan</div>
              </li>
              <li className="list-group-item d-flex">
                •<div className="ms-2">Di akhir sesi, kamu akan menjumpai tes formatif yang harus dikerjakan untuk mengetahui seberapa jauh pemahamanmu mengenai SPLTV yang telah kamu pelajari</div>
              </li>
              <li className="list-group-item d-flex">
                •<div className="ms-2">Untuk mengerjakan tes formatif, pilih salah satu jawaban benar dari soal yang diberikan. Nilai kamu akan muncul setelah menyelesaikan seluruh soal</div>
              </li>
              <li className="list-group-item d-flex">
                •
                <div className="ms-2">
                  Jika telah menyelesaikan seluruhnya, maka kalian telah menyelesaikan pembelajaran SPLTV pada <em>website</em> ini
                </div>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Informasi Menu</Accordion.Header>
          <Accordion.Body>
            <div className="row justify-content-center">
              <figure className="col-auto">
                <img className="img-fluid" src="/img/petunjuk-4.png" alt="" width={144} />
                <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                  menu
                </figcaption>
              </figure>
              <figure className="col-auto text-center">
                <img className="img-fluid" src="/img/petunjuk-1.png" alt="" width={380} />
                <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                  tampilan desktop
                </figcaption>
              </figure>
              <figure className="col-auto text-center">
                <img src="/img/petunjuk-1-mobile.png" alt="" height={191} />
                <figcaption className="fst-italic text-center text-muted" style={{ fontSize: '12px' }}>
                  tampilan mobile
                </figcaption>
              </figure>
            </div>
            <p className="fw-bold mb-0 ms-2">Catatan:</p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item d-flex">
                •<div className="ms-2">Simak setiap halaman yang ada, dan lanjutkan ke halaman berikutnya dengan menekan lagi tombol lanjut</div>
              </li>
            </ul>
            <p className="fw-bold mb-0 ms-2">Daftar menu:</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex">
                •
                <div className="ms-2">
                  Peta konsep: berisikan informasi isi materi dan tujuan pembelajaran yang disajikan dalam <em>website</em> ini
                </div>
              </li>
              <li className="list-group-item d-flex">
                •
                <div className="ms-2">
                  Materi: berisikan <em>shortcut</em> pilihan materi jika ingin langsung mengakses ke materi tertentu
                </div>
              </li>
              <li className="list-group-item d-flex">
                •<div className="ms-2">Latihan soal: berisikan latihan soal sesuai materi yang disajikan dengan topik soal yang berbeda</div>
              </li>
              <li className="list-group-item d-flex">
                •
                <div className="ms-2">
                  Tes formatif: berisikan evaluasi untuk mengetahui pemahaman peserta didik terhadap SPLTV yang telah dipelajari pada <em>website</em>
                </div>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}
