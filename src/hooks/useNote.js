import { useEffect, useState } from "react";
import useGlobalState from "./useGlobalState";

export default function useNote() {
  const { state, dispatch } = useGlobalState();
  const { notes } = state;
  const { setNotes } = dispatch;

  const [data, setData] = useState(notes);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    if (!search) return setData(notes);

    const query = search.toLowerCase();
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(query)
    );
    setData(filtered);
  }, [search, notes]);

  return {
    notes: data,
    deleteNote,
    toggleStatus,
    addNote,
    setSearch,
    search,
  };
}
