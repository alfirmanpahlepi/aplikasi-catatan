import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import { getInitialData } from "./utils";

const App = () => {
  const initialData = getInitialData();
  return (
    <>
      <Header />
      <main className="note-app__body">
        <NoteInput />
        <NotesList data={initialData} title="Catatan Aktif" />
        <NotesList data={initialData} title="Arsip" />
      </main>
    </>
  );
};

export default App;
