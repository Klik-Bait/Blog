// app/api/articles/[slug]/route.ts

import { NextResponse } from 'next/server';
import { Article } from '@/types';

const dummyArticles: Article[] = [
  {
    id: 1,
    title: 'First Article',
    date: new Date().toISOString(),
    summary: 'This is the summary of the first article.',
    content: '<p>This is the full content of the first article.</p>',
    tags: ['Next.js', 'TypeScript'],
    slug: 'first-article',
  },
  {
    id: 2,
    title: 'Second Article',
    date: new Date().toISOString(),
    summary: 'This is the summary of the second article.',
    content: '<p>This is the full content of the second article.</p>',
    tags: ['React', 'JavaScript'],
    slug: 'second-article',
  },
  // Add more dummy articles as needed
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const article = dummyArticles.find((a) => a.slug === slug);

  if (!article) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  return NextResponse.json(article);
}
