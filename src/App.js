import ActiveNote from "./components/ActiveNote";
import ArchivedNote from "./components/ArchivedNote";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import { getInitialData } from "./utils";

const App = () => {
  const initialData = getInitialData();
  return (
    <>
      <Header />
      <main className="note-app__body">
        <NoteInput />
        <ActiveNote data={initialData} />
        <ArchivedNote data={initialData} />
      </main>
    </>
  );
};

export default App;
