import NotePreview from './NotePreview.client';

interface Props {
  params: Promise<{ id: string }>;
}

const Preview = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div>
      <NotePreview id={Number(id)} />
    </div>
  );
};

export default Preview;
