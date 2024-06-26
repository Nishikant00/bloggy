import Link from "next/link";

export default async function PostList() {
    await new Promise((resolve)=>(setTimeout(resolve,1000)));
    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await response.json()
    return (
        <div>
        <ul>
            {data.posts.map((post:any)=>(
        <li key={post.id} className="text-stone-600 hover:text-stone-900 font-bold text-xl mt-4">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    </div>
    );
}