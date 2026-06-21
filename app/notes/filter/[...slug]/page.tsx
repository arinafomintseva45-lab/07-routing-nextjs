import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug?.[0] ?? 'all';

  const tag = slug === 'all' ? undefined : slug;

  const initialData = await fetchNotes({
    tag,
    page: 1,
  });

  return <NotesClient tag={tag} initialData={initialData} />;
}