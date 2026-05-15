import config from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'

async function getLatestPosts() {
  const payload = await getPayload({ config })

  const posts = await payload.find({
    collection: 'posts',
    limit: 3,
    sort: '-createdAt',
    where: {
      status: {
        equals: 'published',
      },
    },
  })

  return posts.docs
}

export default async function BlogSection() {
  const posts = await getLatestPosts()

  console.log('posts25', posts)

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold">Latest Blogs</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post: any) => (
            <article key={post.id} className="rounded-xl border p-5">
              <h3 className="mb-3 text-xl font-semibold">{post.title}</h3>

              {post.excerpt && <p className="mb-4 text-gray-600">{post.excerpt}</p>}

              <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
