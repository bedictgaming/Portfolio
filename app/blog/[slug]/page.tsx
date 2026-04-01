import { POSTS } from '@/constants/blog';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Find the post that matches the URL slug
  const post = POSTS.find((p) => p.slug === params.slug);

  // If the post doesn't exist, show the 404 page
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