import client from "@/lib/microcms"
import Link from "next/link"

export default async function Home() {
  const res = await client
    .getList({
      endpoint: 'blogs',
    })

  console.log(res)



  return <div>
    {res.contents.map((content: any) => {
      return <Link key={content.id} href={`blog/${content.id}`}>{content.title}</Link>
    })}
  </div>
}
