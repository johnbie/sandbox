export default async function Page() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts: Array<any> = await data.json()
    return (
      <ul>
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
}
