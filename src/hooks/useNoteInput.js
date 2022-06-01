import { useState } from "react";
import useNote from "./useNote";

export default function useNoteInput() {
  const { addNote } = useNote();
  const [input, setInput] = useState({ title: "", body: "" });
  const [charLeft, setCharLeft] = useState(50);

  const changeTitle = (e) => {
    if (charLeft < 1) return;

    const value = e.target.value;
    const key = e.target.name;

    setInput({ ...input, [key]: value });
    setCharLeft(50 - value.length);
  };

  const submit = (e) => {
    e.preventDefault();
    const { title, body } = input;
    if (!title || !body) return;
    addNote(input.title, input.body);
    setInput({ title: "", body: "" });
    setCharLeft(50);
  };

  return { charLeft, input, setInput, changeTitle, submit };
}
