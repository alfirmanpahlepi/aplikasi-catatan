// import { useState } from "react";
// import { getInitialData } from "../utils";
import useGlobalState from "./useGlobalState";

export default function useNote() {
  const { state, dispatch } = useGlobalState();
  const { notes } = state;
  const { setNotes } = dispatch;

  function deleteNote(id) {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);
  }

  return { notes, deleteNote };
}
