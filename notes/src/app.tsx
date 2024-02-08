import logo from "./assets/Logo-nlw-expert.svg";
import { NewNoteCard } from "./components/newNoteCard";
import { NoteCard } from "./components/noteCard";

export const App = () => {
  return (
    <div className="mx-[200px] max-w-6x1 my-12 space-y-6">
      <img src={logo} alt="nlw expert" />

      <form className="w-full ">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent text-2xl font-semibold trancking-tight outline-none placeholder: text-slate-600"
        />
      </form>

      <div className="h-px bg-slate-700"></div>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard note={{ date: new Date(), content: "Hello" }} />
      </div>
    </div>
  );
};
