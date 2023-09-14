export default function PostsLayout ({ children }:any) {
    return (
        <div>
            <marquee style={{ background:'#fff' ,color: 'purple' }}>El mejor canal de twitch de programacion: @midudev</marquee>
            <h1>Este es el layout de los posts</h1>
            { children }
        </div>
    )
}