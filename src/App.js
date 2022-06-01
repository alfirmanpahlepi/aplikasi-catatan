const App = () => {
  return (
    <>
      <header className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input type="text" placeholder="Cari catatan ..." value="" />
        </div>
      </header>
      <main>
        <div className="note-app__body">
          <div className="note-input">
            <h2>Buat catatan</h2>
            <form>
              <p className="note-input__title__char-limit">Sisa karakter: 50</p>
              <input
                className="note-input__title"
                type="text"
                placeholder="Ini adalah judul ..."
                required=""
                value=""
              />
              <textarea
                className="note-input__body"
                type="text"
                placeholder="Tuliskan catatanmu di sini ..."
                required=""
              ></textarea>
              <button type="submit">Buat</button>
            </form>
          </div>
          <h2>Catatan Aktif</h2>
          <div className="notes-list">
            <div className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">Babel</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">
                  Babel merupakan tools open-source yang digunakan untuk
                  mengubah sintaks ECMAScript 2015+ menjadi sintaks yang
                  didukung oleh JavaScript engine versi lama. Babel sering
                  dipakai ketika kita menggunakan sintaks terbaru termasuk
                  sintaks JSX.
                </p>
              </div>
              <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
              </div>
            </div>
            <div className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">Functional Component</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">
                  Functional component merupakan React component yang dibuat
                  menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat
                  disebut component ia harus mengembalikan React element dan
                  dipanggil layaknya React component.
                </p>
              </div>
              <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
              </div>
            </div>
            <div className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">Modularization</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">
                  Dalam konteks pemrograman JavaScript, modularization merupakan
                  teknik dalam memecah atau menggunakan kode dalam berkas
                  JavaScript secara terpisah berdasarkan tanggung jawabnya
                  masing-masing.
                </p>
              </div>
              <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
              </div>
            </div>
            <div className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">Lifecycle</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">
                  Dalam konteks React component, lifecycle merupakan kumpulan
                  method yang menjadi siklus hidup mulai dari component dibuat
                  (constructor), dicetak (render), pasca-cetak
                  (componentDidMount), dan sebagainya.{" "}
                </p>
              </div>
              <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
              </div>
            </div>
            <div className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">ESM</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">
                  ESM (ECMAScript Module) merupakan format modularisasi standar
                  JavaScript.
                </p>
              </div>
              <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
              </div>
            </div>
            <div className="note-item">
              <div className="note-item__content">
                <h3 className="note-item__title">Module Bundler</h3>
                <p className="note-item__date">Kamis, 14 April 2022</p>
                <p className="note-item__body">
                  Dalam konteks pemrograman JavaScript, module bundler merupakan
                  tools yang digunakan untuk menggabungkan seluruh modul
                  JavaScript yang digunakan oleh aplikasi menjadi satu berkas.
                </p>
              </div>
              <div className="note-item__action">
                <button className="note-item__delete-button">Delete</button>
                <button className="note-item__archive-button">Arsipkan</button>
              </div>
            </div>
          </div>
          <h2>Arsip</h2>
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        </div>
      </main>
    </>
  );
};

export default App;
