import axios from 'axios';
import type { Note, NotesResponse } from '@/types/note';

const API = 'https://notehub-public.goit.study/api';

type FetchNotesParams = {
  page?: number;
  search?: string;
  tag?: string;
};

export const fetchNotes = async ({
  page = 1,
  search = '',
  tag,
}: FetchNotesParams): Promise<NotesResponse> => {
  const params: Record<string, string | number> = {
    page,
    search,
  };

  if (tag && tag !== 'all') {
    params.tag = tag;
  }

  const { data } = await axios.get<NotesResponse>(`${API}/notes`, {
    params,
  });

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await axios.get<Note>(`${API}/notes/${id}`);
  return data;
};