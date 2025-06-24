'use client';

import dynamic from "next/dynamic";
import { type Note } from "../../types/note";

const NotesClient = dynamic(() => import('./Notes.client'), {ssr: false})

interface NotesHydrationProps {
    notes: Note[];
    totalPages: number;
}

export default function NotesHydration({notes, totalPages}: NotesHydrationProps) {
    return <NotesClient initialNotes={notes} initialTotalPages={totalPages} />
}