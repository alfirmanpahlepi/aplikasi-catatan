import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import { Provider } from "./hooks/useGlobalState";

const App = () => {
  return (
    <Provider>
      <Header />
      <main className="note-app__body">
        <NoteInput />
        <NotesList title="Catatan Aktif" />
        <NotesList title="Arsip" />
      </main>
    </Provider>
  );
};

export default App;
