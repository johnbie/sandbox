// http://localhost:3000/data-fetch/basic
export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts: Array<any> = await data.json()
    return (
      <ul>
        {posts.map((post) => (
            <li key={post.id} id={post.id}>{post.title}</li>
        ))}
      </ul>
    )
}