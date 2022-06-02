import { useState } from "react";
import useNote from "./useNote";

export default function useNoteInput() {
  const { addNote } = useNote();
  const [input, setInput] = useState({ title: "", body: "" });

  const changeInput = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    const { title, body } = input;

    if (!title || !body) return;

    addNote(input.title, input.body);

    setInput({ title: "", body: "" });
  };

  return { input, changeInput, submit };
}
