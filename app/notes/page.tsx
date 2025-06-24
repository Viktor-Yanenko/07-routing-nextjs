import { fetchNotes } from "../../lib/api";
import NotesHydration from "./NotesHydration";


export default async function NotesPage() {
    const notesResponse = await fetchNotes('', 1)
    
    return (
        <NotesHydration notes={notesResponse.notes} totalPages={notesResponse.totalPages}/>
    )
}