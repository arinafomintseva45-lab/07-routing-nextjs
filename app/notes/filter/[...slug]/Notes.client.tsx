'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';

import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';

type Props = {
  tag: string;
};

export default function NotesClient({ tag }: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ['notes', tag, page, search],
    queryFn: () =>
      fetchNotes({
        tag: tag === 'all' ? undefined : tag,
        page,
        search,
      }),
  });

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        + Create note
      </button>

      <SearchBox value={search} onChange={setSearch} />

      <NoteList notes={data?.notes ?? []} />

      <Pagination
        pageCount={data?.totalPages ?? 1}
        currentPage={page}
        onPageChange={(selectedPage: number) =>
          setPage(selectedPage)
        }
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NoteForm onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}