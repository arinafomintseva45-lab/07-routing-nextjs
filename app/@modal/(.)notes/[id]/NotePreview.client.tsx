'use client';

import Modal from '@/components/Modal/Modal';
import type { Note } from '@/types/note';

type Props = {
  note: Note;
};

export default function NotePreviewClient({ note }: Props) {
  return (
    <Modal>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <span>{note.tag}</span>
    </Modal>
  );
}