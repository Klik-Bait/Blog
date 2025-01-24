// app/page.tsx

import { Article } from '@/types';
import { fetchArticles } from '@/services/api';
import ArticleCard from './components/ArticleCard';
import Head from 'next/head';
import React from 'react';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

const HomePage = async () => {
  const articles: Article[] = await fetchArticles();

  return (
    <>
      <Head>
        <title>My Minimal Blog</title>
        <meta name="description" content="A minimal blog built with Next.js, TypeScript, and Tailwind CSS." />
      </Head>
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-6">Articles</h1>
        <ul>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default HomePage;
