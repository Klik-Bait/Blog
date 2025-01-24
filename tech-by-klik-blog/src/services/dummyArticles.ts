// src/services/dummyArticles.ts

import { Article } from '@/types';

export const dummyArticles: Article[] = [
  {
    id: 1,
    title: 'Understanding JavaScript Closures',
    summary: 'A deep dive into closures in JavaScript and how they work.',
    content: `<p>Closures are a fundamental concept in JavaScript...</p>`,
    date: '2023-01-15T10:00:00Z',
    slug: 'understanding-javascript-closures',
    tags: ['JavaScript', 'Programming', 'Closures'],
  },
  {
    id: 2,
    title: 'A Guide to Next.js Routing',
    summary: 'Learn how routing works in Next.js and how to create dynamic routes.',
    content: `<p>Next.js provides a powerful routing system...</p>`,
    date: '2023-02-20T12:30:00Z',
    slug: 'guide-to-nextjs-routing',
    tags: ['Next.js', 'React', 'Routing'],
  },
  {
    id: 3,
    title: 'Styling in React with Tailwind CSS',
    summary: 'An introduction to using Tailwind CSS for styling React applications.',
    content: `<p>Tailwind CSS offers utility-first classes...</p>`,
    date: '2023-03-10T09:15:00Z',
    slug: 'styling-react-tailwind-css',
    tags: ['React', 'Tailwind CSS', 'Styling'],
  },
  // Add more articles as needed
];
