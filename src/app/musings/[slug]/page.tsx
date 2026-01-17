import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { Metadata } from 'next'
import styles from '@/styles/blogPost.module.css'

interface PostData {
    slug: string;
    title: string;
    date: string;
    contentHtml: string;
    [key: string]: string | undefined;
}


export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }))
}


async function getPostData(slug: string): Promise<PostData> {
    const postsDirectory = path.join(process.cwd(), 'src', 'posts')
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    const matterResult = matter(fileContents)
  
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    return {
      slug,
      contentHtml,
      title: matterResult.data.title,
      date: matterResult.data.date,
      ...matterResult.data,
    }
  }

  
export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
  ): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostData(slug)

    return {
      title: `Blog » ${post.title}`,
      description: post.description || `A blog post by Nicholas Wilson about ${post.title}`,
    }
}


export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postData = await getPostData(slug)

  return (
    <article className={styles.blogPost}>
      <h1>{postData.title}</h1>
      <div className={styles.metadata}>
        <time>{postData.date}</time>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  )
}