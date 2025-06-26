import { fetchNotes } from '../../../../lib/api';
import NotesHydration from './NotesHydration';

interface NotesPageProps {
  params: { slug?: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function NotesPage({ params }: NotesPageProps) {
  const tag = params.slug?.[0];
  const notesResponse = tag
    ? await fetchNotes('', 1, tag)
    : await fetchNotes('', 1);

  return (
    <NotesHydration
      notes={notesResponse.notes}
      totalPages={notesResponse.totalPages}
    />
  );
}
