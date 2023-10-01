import client from "@/lib/microcms"
import Link from "next/link"

export default async function Home() {
  const res = await client
    .getList({
      endpoint: 'blogs',
    })

  console.log(res)



  return <div>
    <h1>ブログサンプル</h1>
    <h2>記事一覧</h2>
    <ul>
      {res.contents.map((content: any, index: number) => {
        const created_at = new Date(content.createdAt).toLocaleDateString()
        return <>
          <li key={index}>
            <Link href={`blog/${content.id}`}><span className="font-bold text-4xl">{created_at}</span> {content.title}</Link>
          </li>
        </>

      })}
    </ul>
  </div>
}
