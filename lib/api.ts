import axios from 'axios';
import type { Note, NotesResponse } from '@/types/note';

const API = 'https://notehub-public.goit.study/api';

const token = process.env.NEXT_PUBLIC_API_TOKEN;

const api = axios.create({
  baseURL: API,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

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
  const { data } = await api.get('/notes', {
    params: {
      page,
      search,
      tag: tag === 'all' ? undefined : tag,
    },
  });

  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data;
};

export type CreateNoteData = {
  title: string;
  content: string;
  tag: string;
};

export const createNote = async (data: CreateNoteData): Promise<Note> => {
  const { data: res } = await api.post('/notes', data);
  return res;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await api.delete(`/notes/${id}`);
  return data;
};