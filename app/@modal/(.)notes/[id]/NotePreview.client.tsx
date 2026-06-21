'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';

type Props = {
  id: string;
};

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  const onClose = () => {
    router.back();
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <Modal onClose={onClose}>
      <div>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <p>{data.tag}</p>
        <p>{data.createdAt}</p>
      </div>
    </Modal>
  );
}
