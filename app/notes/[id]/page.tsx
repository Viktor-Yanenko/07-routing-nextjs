import { fetchNoteById } from "../../../lib/api";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

type Props = {
    params: Promise<{ id: number }>;
}

export default async function NoteDetails({ params }: Props) {
    const res = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['note', res.id],
        queryFn: () => fetchNoteById(res.id),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient />
        </HydrationBoundary>
    )
}