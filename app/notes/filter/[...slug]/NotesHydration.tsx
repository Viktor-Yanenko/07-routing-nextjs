'use client';

import dynamic from 'next/dynamic';
import { Note } from '../../../../types/note';

const NotesClient = dynamic(() => import('./Notes.client'), { ssr: false });

interface NotesHydrationProps {
  notes: Note[];
  totalPages: number;
  tag?: string;
}

export default function NotesHydration({
  notes,
  totalPages,
  tag,
}: NotesHydrationProps) {
  return (
    <NotesClient
      initialNotes={notes}
      initialTotalPages={totalPages}
      tag={tag}
    />
  );
}
