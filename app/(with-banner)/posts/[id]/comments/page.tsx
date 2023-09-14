const fetchComments = async (id: any) =>{
    await new Promise(resolve => setTimeout(resolve, 3000));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
            next: {revalidate: 60}
        }
    ).then(res => res.json())
}

export default async function Post ({ params }: any){
    const { id } = params;
    const comments = await fetchComments(id);
    return  (
        <ul style={{ background:'#444', fontSize: '10px'}}>
            {comments.map((comment: any) => (
                <li key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    );
}