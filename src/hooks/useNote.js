import useGlobalState from "./useGlobalState";

export default function useNote() {
  const { state, dispatch } = useGlobalState();
  const { notes } = state;
  const { setNotes } = dispatch;

  function addNote(title, body) {
    const data = {
      id: Date.now(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes([...notes, data]);
  }

  function deleteNote(id) {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  }

  function toggleStatus(id) {
    const targetIndex = notes.findIndex((note) => note.id === id);
    notes[targetIndex].archived = !notes[targetIndex].archived;
    setNotes([...notes]);
  }

  return { notes, deleteNote, toggleStatus, addNote };
}
