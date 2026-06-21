import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from './NotePreview.client';

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const note = await fetchNoteById(params.id);

  return <NotePreviewClient note={note} />;
}