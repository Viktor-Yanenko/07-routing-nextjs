import { fetchNotes } from '../../../../lib/api';
import NotesHydration from './NotesHydration';

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const notesResponse = await fetchNotes('', 1, tag);

  return (
    <NotesHydration
      notes={notesResponse.notes}
      totalPages={notesResponse.totalPages}
      tag={tag}
    />
  );
}
