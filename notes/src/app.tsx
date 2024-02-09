import { ChangeEvent, useEffect, useState } from "react";
import logo from "./assets/Logo-nlw-expert.svg";
import { NewNoteCard } from "./components/newNoteCard";
import { NoteCard } from "./components/noteCard";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export const App = () => {
  const [search, setSearch] = useState("");
  const [notes, setNote] = useState<Note[]>(() => {
    const noteOnStorage = localStorage.getItem("notes");

    if (noteOnStorage) {
      return JSON.parse(noteOnStorage);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNote(notesArray);
  }

  function onNoteDelete(id: string) {
    const notesArray = notes.filter((notes) => {
      return notes.id != id;
    });

    setNote(notesArray);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  const clearNotes = () => {
    setNote([]);
  };

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;

    setSearch(query);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto px-20 max-w-6x1 my-12 space-y-6">
      <img src={logo} alt="nlw expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-2xl font-semibold trancking-tight outline-none placeholder: text-slate-600"
          onChange={handleSearch}
        />

        <button
          onClick={clearNotes}
          className="mt-6 right-0 p-5 px-4 py-2 bg-red-500 text-white rounded shadow"
        >
          Limpar Notes
        </button>
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onNoteDelete={onNoteDelete} />
          );
        })}
      </div>
    </div>
  );
};
