'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import type { NotesResponse, Note } from '@/types/note';
import Link from 'next/link';

type Props = {
  tag?: string;
  initialData: NotesResponse;
};

export default function NotesClient({ tag, initialData }: Props) {
  const { data } = useQuery<NotesResponse>({
    queryKey: ['notes', tag],
    queryFn: () => fetchNotes({ tag }),
    initialData,
  });

  return (
    <div>
      {data.notes.map((note: Note) => (
        <Link key={note.id} href={`/notes/${note.id}`}>
          <div>
            <h3>{note.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}