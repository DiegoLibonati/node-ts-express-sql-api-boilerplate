export interface NoteCreate {
  title: string;
  content: string;
}

export interface NoteUpdate {
  title?: string;
  content?: string;
}
