import type { Note } from "@prisma/client";

import type { NoteCreate, NoteUpdate } from "@/types/payloads";

import { NoteDAO } from "@/daos/note.dao";

export const NoteService = {
  getAllNotes: async (): Promise<Note[]> => {
    return await NoteDAO.findMany();
  },

  getNoteById: async (id: number): Promise<Note | null> => {
    return await NoteDAO.findById(id);
  },

  createNote: async (data: NoteCreate): Promise<Note> => {
    return await NoteDAO.create(data);
  },

  updateNote: async (id: number, data: NoteUpdate): Promise<Note> => {
    return await NoteDAO.updateById(id, data);
  },

  deleteNote: async (id: number): Promise<Note> => {
    return await NoteDAO.deleteById(id);
  },
};
