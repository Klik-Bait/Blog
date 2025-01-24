// app/api/articles/route.ts

import { NextResponse } from 'next/server';
import { Article } from '@/types';

export async function GET() {
  const articles: Article[] = [
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

  return NextResponse.json(articles);
}
