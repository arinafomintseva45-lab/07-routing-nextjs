export type Note = {
  id: string;
  title: string;
  content: string;
  tag: string;
};

export type NotesResponse = {
  notes: Note[];
};