import { POSTS } from '@/constants/blog';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;

  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8 italic">{post.description}</p>
      <div className="prose lg:prose-xl">
        {post.content}
      </div>
    </article>
  );
}