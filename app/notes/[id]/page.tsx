import { fetchNoteById } from '@/lib/api';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NoteDetailsPage({ params }: Props) {
  const { id } = await params;

  const note = await fetchNoteById(id);

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p>{note.tag}</p>
    </div>
  );
}