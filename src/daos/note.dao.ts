import type { Note } from "@prisma/client";

import { prisma } from "@/configs/prisma.config";

import type { NoteCreate, NoteUpdate } from "@/types/payloads";

export const NoteDAO = {
  findMany: async (): Promise<Note[]> =>
    await prisma.note.findMany({
      orderBy: { createdAt: "desc" },
    }),

  findById: async (id: number): Promise<Note | null> =>
    await prisma.note.findUnique({
      where: { id },
    }),

  create: async (data: NoteCreate): Promise<Note> => await prisma.note.create({ data }),

  updateById: async (id: number, data: NoteUpdate): Promise<Note> =>
    await prisma.note.update({
      where: { id },
      data,
    }),

  deleteById: async (id: number): Promise<Note> =>
    await prisma.note.delete({
      where: { id },
    }),
};
