import useGlobalState from "./useGlobalState";

export default function useNote() {
  const { state, dispatch } = useGlobalState();
  const { notes } = state;
  const { setNotes } = dispatch;

  function deleteNote(id) {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  }

  function toggleStatus(id) {
    const targetIndex = notes.findIndex((note) => note.id === id);
    notes[targetIndex].archived = !notes[targetIndex].archived;
    setNotes([...notes]);
  }

  return { notes, deleteNote, toggleStatus };
}
