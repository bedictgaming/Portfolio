// app/blog/page.tsx
import Link from 'next/link';
import RetroBox from '@/components/RetroBox';
import { POSTS } from '../../constants/blog';

export default function BlogListPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-7xl font-extrabold mb-10 tracking-tighter uppercase">
        Journal.
      </h1>
      
      <div className="flex flex-col gap-8">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <RetroBox className="p-6 bg-white hover:bg-gray-50 transition-all group">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-2">{post.slug}</p>
                  <h2 className="text-2xl font-bold uppercase group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-2 max-w-xl">{post.description}</p>
                </div>
                <span className="text-3xl group-hover:translate-x-2 transition-transform">
                  &rarr;
                </span>
              </div>
            </RetroBox>
          </Link>
        ))}
      </div>
    </main>
  );
}