import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musings',
  description: 'Posts on random topics.',
}

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

function getPostMetadata(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const postsMetadata = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt || '',
    }
  })

  // Sort posts by date
  return postsMetadata.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function Musings() {
  const postsMetadata = getPostMetadata()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Musings</h1>
      
      <section className="mb-8">
        <p className="mb-4">
          WIP. May add stuff later.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
        <ul className="space-y-4">
          {postsMetadata.map((post) => (
            <li key={post.slug} className="border-b pb-4">
              <Link href={`/musings/${post.slug}`} className="text-xl font-medium hover:underline">
                {post.title}
              </Link>
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              {post.excerpt && <p className="mt-2">{post.excerpt}</p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}