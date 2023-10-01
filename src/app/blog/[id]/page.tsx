import client from "@/lib/microcms"

export default async function Page({ params }: { params: { id: string } }) {
    const res = await client
        .get({
            endpoint: 'blogs',
            contentId: params.id,
        })
    console.log(res)

    return <div><h1>{res.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: res.content }}></div>
    </div>
}

