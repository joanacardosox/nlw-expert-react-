import * as Diolong from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <Diolong.Root>
      <Diolong.Trigger className="rounded-md text-left flex flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {note.date.toISOString()}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 " />
      </Diolong.Trigger>

      <Diolong.Portal>
        <Diolong.Overlay className="inset-0 fixed bg-black/60" />
        <Diolong.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none ">
          <Diolong.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-300">
            <X className="size-5" />
          </Diolong.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300"></span>
            <p className="text-sm leading-6 text-slate-400"></p>
          </div>

          <button
            type="button"
            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>{" "}
            ?
          </button>
        </Diolong.Content>
      </Diolong.Portal>
    </Diolong.Root>
  );
};
