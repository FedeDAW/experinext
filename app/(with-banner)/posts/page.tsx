import { Suspense } from "react";
import { ListOfPosts } from "./ListOfPosts";

export default async function PostsPage ({ params }: any){
    return (
        <section>
            <Suspense fallback={<p>CARGANDO post...</p>}>
                <ListOfPosts/>
            </Suspense>
        </section>
    )
} 